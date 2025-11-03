const express = require('express');
const { createTransport } = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use('/installers', express.static(path.join(__dirname, 'installers')));

// Create transporter for Gmail
const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'aani64257@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || 'wwtq misf eipl euwd'
  }
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('Transporter verification error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message } = req.body;

    // Validate input
    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.GMAIL_USER || 'aani64257@gmail.com',
      to: process.env.GMAIL_USER || 'aani64257@gmail.com',
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 20px;">
              <strong>Message:</strong>
              <p style="background-color: white; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px;">${message}</p>
            </div>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #777;">
            This message was sent from your portfolio website contact form.
          </p>
        </div>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    // Send confirmation email to the sender
    const confirmationMailOptions = {
      from: process.env.GMAIL_USER || 'aani64257@gmail.com',
      to: email,
      subject: 'Thank you for contacting Devesh Samant',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Reaching Out!</h2>
          <p>Hi ${firstName},</p>
          <p>Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Your Message Summary:</strong></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-left: 4px solid #007bff;">${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
          </div>
          <p>Best regards,<br>Devesh Samant</p>
          <hr>
          <p style="font-size: 12px; color: #777;">
            This is an automated confirmation email. Please do not reply to this email.
          </p>
        </div>
      `
    };

    // Send confirmation email
    await transporter.sendMail(confirmationMailOptions);
    console.log('Confirmation email sent to:', email);

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully! You will receive a confirmation email shortly.' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// Serve React app for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;