import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

interface KickoffFormData {
  company_name: string;
  industry?: string;
  project_type?: string;
  budget_range?: string;
  timeline?: string;
  goals?: string;
  target_audience?: string;
  current_challenges?: string;
  additional_info?: string;
}

// Create reusable transporter object using SMTP transport
let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

// Generic email sending function
export async function sendEmail({ to, subject, html, text }: EmailOptions) {
  try {
    const transporter = getTransporter();
    
    const mailOptions = {
      from: `"Evolve Link" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ''), // Strip HTML for text version
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Contact form notification email
export async function sendContactNotification(formData: ContactFormData) {
  const { name, email, company, message } = formData;
  
  const html = `
    <div style="font-family: 'Mooli', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: #4DA18D; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
      </div>
      
      <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #ddd;">
        <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #4DA18D;">Name:</strong> ${name}
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #4DA18D;">Email:</strong> ${email}
        </div>
        
        ${company ? `
        <div style="margin-bottom: 15px;">
          <strong style="color: #4DA18D;">Company:</strong> ${company}
        </div>
        ` : ''}
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #4DA18D;">Message:</strong>
          <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 5px; border: 1px solid #ddd;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #fff; border-radius: 4px; border: 1px solid #4DA18D;">
          <p style="margin: 0; color: #666; font-style: italic;">
            This message was sent from the Evolve Link website contact form.
          </p>
        </div>
      </div>
    </div>
  `;

  return sendEmail({
    to: process.env.ADMIN_EMAIL || 'admin@evolve-link.com',
    subject: `New Contact Form Submission from ${name}`,
    html,
  });
}

// Kickoff form notification email
export async function sendKickoffNotification(formData: KickoffFormData) {
  const {
    company_name,
    industry,
    project_type,
    budget_range,
    timeline,
    goals,
    target_audience,
    current_challenges,
    additional_info
  } = formData;
  
  const html = `
    <div style="font-family: 'Mooli', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: #4DA18D; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">New Kickoff Form Submission</h1>
      </div>
      
      <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #ddd;">
        <h2 style="color: #333; margin-top: 0;">Project Details for ${company_name}</h2>
        
        ${industry ? `<div style="margin-bottom: 15px;"><strong style="color: #4DA18D;">Industry:</strong> ${industry}</div>` : ''}
        ${project_type ? `<div style="margin-bottom: 15px;"><strong style="color: #4DA18D;">Project Type:</strong> ${project_type}</div>` : ''}
        ${budget_range ? `<div style="margin-bottom: 15px;"><strong style="color: #4DA18D;">Budget Range:</strong> ${budget_range}</div>` : ''}
        ${timeline ? `<div style="margin-bottom: 15px;"><strong style="color: #4DA18D;">Timeline:</strong> ${timeline}</div>` : ''}
        
        ${goals ? `
        <div style="margin-bottom: 15px;">
          <strong style="color: #4DA18D;">Goals:</strong>
          <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 5px; border: 1px solid #ddd;">
            ${goals.replace(/\n/g, '<br>')}
          </div>
        </div>
        ` : ''}
        
        ${target_audience ? `
        <div style="margin-bottom: 15px;">
          <strong style="color: #4DA18D;">Target Audience:</strong>
          <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 5px; border: 1px solid #ddd;">
            ${target_audience.replace(/\n/g, '<br>')}
          </div>
        </div>
        ` : ''}
        
        ${current_challenges ? `
        <div style="margin-bottom: 15px;">
          <strong style="color: #4DA18D;">Current Challenges:</strong>
          <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 5px; border: 1px solid #ddd;">
            ${current_challenges.replace(/\n/g, '<br>')}
          </div>
        </div>
        ` : ''}
        
        ${additional_info ? `
        <div style="margin-bottom: 15px;">
          <strong style="color: #4DA18D;">Additional Information:</strong>
          <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 5px; border: 1px solid #ddd;">
            ${additional_info.replace(/\n/g, '<br>')}
          </div>
        </div>
        ` : ''}
      </div>
    </div>
  `;

  return sendEmail({
    to: process.env.ADMIN_EMAIL || 'admin@evolve-link.com',
    subject: `New Kickoff Submission - ${company_name}`,
    html,
  });
}

// Welcome email for new contacts
export async function sendWelcomeEmail(email: string, name: string) {
  const html = `
    <div style="font-family: 'Mooli', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: #4DA18D; color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 28px;">Welcome to Evolve Link!</h1>
        <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">scaling trust.</p>
      </div>
      
      <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #ddd;">
        <h2 style="color: #333; margin-top: 0;">Hi ${name},</h2>
        
        <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
          Thank you for reaching out to Evolve Link! We've received your message and our team will get back to you within 24 hours.
        </p>
        
        <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
          In the meantime, feel free to explore our services and learn more about how we help brands scale trust and build lasting connections.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.NEXT_PUBLIC_SITE_URL}" 
             style="background: #ff6b35; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
            Visit Our Website
          </a>
        </div>
        
        <p style="color: #999; font-size: 14px; text-align: center; margin-top: 30px;">
          This email was sent from Evolve Link. If you have any questions, reply to this email or contact us at admin@evolve-link.com
        </p>
      </div>
    </div>
  `;

  return sendEmail({
    to: email,
    subject: 'Welcome to Evolve Link - We\'ve received your message!',
    html,
  });
}
