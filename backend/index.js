import express from 'express';
import cors from 'cors';
import { PORT, CORS_ORIGIN } from './config/index.js';
import leadsRouter from './routes/leads.js';

const app = express();

// Middleware
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// API routes
app.use('/api', leadsRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`LeadGen Backend running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log(`  GET  /health`);
  console.log(`  POST /api/leads`);
});
