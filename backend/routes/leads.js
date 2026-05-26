import express from 'express';
import { searchLeads } from '../services/leadService.js';

const router = express.Router();

/**
 * POST /api/leads
 * Search for leads by location
 */
router.post('/leads', (req, res) => {
  try {
    const { country, state, city, zip, socks5 } = req.body;

    // Validation
    if (!country || !state || !city) {
      return res.status(400).json({ error: 'Country, State, and City are required' });
    }

    // Search for leads
    const leads = searchLeads({ country, state, city, zip, socks5 });
    
    res.json(leads);
  } catch (error) {
    console.error('Error in leads search:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
