import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Dummy leads data for demonstration
const dummyLeads = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "555-0101",
    address: "123 Main St, Anytown, USA"
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "555-0102",
    address: "456 Oak Ave, Anytown, USA"
  },
  {
    name: "Bob Johnson",
    email: "bob.j@example.com",
    phone: "555-0103",
    address: "789 Pine Rd, Anytown, USA"
  },
  {
    name: "Alice Williams",
    email: "alice.w@example.com",
    phone: "555-0104",
    address: "321 Elm St, Anytown, USA"
  }
];

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Main leads search endpoint
app.post('/api/leads', (req, res) => {
  try {
    const { country, state, city, zip, socks5 } = req.body;

    // Validation
    if (!country || !state || !city) {
      return res.status(400).json({ error: 'Country, State, and City are required' });
    }

    console.log(`Search request - Country: ${country}, State: ${state}, City: ${city}, Zip: ${zip}, Proxy: ${socks5 || 'None'}`);

    // STUB: This is where you would integrate with:
    // - Licensed data provider APIs
    // - Your custom data sources
    // - Proxy handling (if using SOCKS5)
    // For now, returning dummy data

    res.json(dummyLeads);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`LeadGen Backend running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log(`  GET  /health`);
  console.log(`  POST /api/leads`);
});
