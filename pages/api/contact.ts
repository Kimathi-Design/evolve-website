import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { contactQueries } from '@/lib/db';
import { sendContactNotification, sendWelcomeEmail } from '@/lib/email';

// Request validation schema
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  company: z.string().max(100).optional(),
  message: z.string().min(1, 'Message is required').max(1000),
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
    const validatedData = contactSchema.parse(req.body);
    
    // Get client IP and user agent for basic tracking
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';

    // Save to database
    const contact = await contactQueries.create(validatedData);

    // Send notification email to admin
    const notificationResult = await sendContactNotification(validatedData);
    
    // Send welcome email to user
    const welcomeResult = await sendWelcomeEmail(validatedData.email, validatedData.name);

    // Log the results
    console.log('Contact form submission:', {
      contactId: contact.id,
      notificationSent: notificationResult.success,
      welcomeSent: welcomeResult.success,
      ip: clientIp,
      userAgent,
    });

    res.status(200).json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      contactId: contact.id,
    });

  } catch (error) {
    console.error('Contact form error:', error);

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
      sizeLimit: '1mb',
    },
  },
}
