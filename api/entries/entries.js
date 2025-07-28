import { applyCors } from '../../utils/cors.js';
import fetch from 'node-fetch';

export default async function activitiesEntriesHandler(req, res) {
  await applyCors(req, res);

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://api.superlikerslabs.com/v1/entries/index', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error forwarding request', error: error.message });
  }
}
