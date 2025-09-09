// This is a basic Vercel API route that receives a webhook payload.
// You would place this file at the path /api/webhook.js in your project.

export default async function handler(req, res) {
    console.log('Received Vercel Webhook test');

  // We only want to handle POST requests from the webhook.
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Log the received data to the console.
  // In a real application, you would process this data,
  // for example, to trigger a rebuild or update a database.
  try {
    const payload = req.body;
    console.log('Received Vercel Webhook Payload:', payload);
    
    // You can add more logic here, like validating the payload
    // to ensure it came from Vercel.

    // Send a success response back to Vercel.
    res.status(200).json({ message: 'Webhook received successfully!' });

  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
