import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { kickoffQueries } from '@/lib/db';
import { sendKickoffNotification } from '@/lib/email';

// Request validation schema
const kickoffSchema = z.object({
  company_name: z.string().min(1, 'Company name is required').max(255),
  industry: z.string().max(255).optional(),
  project_type: z.string().max(255).optional(),
  budget_range: z.string().max(100).optional(),
  timeline: z.string().max(100).optional(),
  goals: z.string().max(2000).optional(),
  target_audience: z.string().max(2000).optional(),
  current_challenges: z.string().max(2000).optional(),
  additional_info: z.string().max(2000).optional(),
  contact_id: z.number().int().positive().optional(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate request body
    const validatedData = kickoffSchema.parse(req.body);
    
    // Get client IP and user agent for basic tracking
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';

    // Save to database
    const kickoff = await kickoffQueries.create(validatedData);

    // Send notification email to admin
    const notificationResult = await sendKickoffNotification(validatedData);

    // Log the results
    console.log('Kickoff form submission:', {
      kickoffId: kickoff.id,
      companyName: validatedData.company_name,
      notificationSent: notificationResult.success,
      ip: clientIp,
      userAgent,
    });

    res.status(200).json({
      success: true,
      message: 'Thank you for providing your project details! Our team will review your information and get back to you soon.',
      kickoffId: kickoff.id,
    });

  } catch (error) {
    console.error('Kickoff form error:', error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      });
    }

    // Generic error response
    res.status(500).json({
      error: 'Something went wrong. Please try again or contact us directly at admin@evolve-link.com',
    });
  }
}

// Export config for API route
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '2mb',
    },
  },
}
