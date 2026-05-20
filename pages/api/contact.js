// API route for contact form
// In production, you would integrate with an email service or database

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      // TODO: Integrate with email service (e.g., SendGrid, Nodemailer)
      // For now, just log the data
      console.log('Contact form submission:', { name, email, message });

      res.status(200).json({ success: true, message: 'Message received' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
