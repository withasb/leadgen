import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LeadForm from './components/LeadForm';
import LeadResults from './components/LeadResults';

import './App.css';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSearch = async (fields) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:3001/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields)
      });
      
      if (!res.ok) {
        throw new Error('Failed to fetch leads');
      }
      
      const data = await res.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <main style={{ maxWidth: 1100, margin: '50px auto', minHeight: '70vh' }}>
        <h1>Lead Generator</h1>
        <p>Search for leads by location information</p>
        <LeadForm onSearch={onSearch} />
        {loading && <div style={{ marginTop: 20, color: '#666' }}>Loading...</div>}
        {error && <div style={{ marginTop: 20, color: '#d32f2f', padding: '10px', background: '#ffebee', borderRadius: '4px' }}>Error: {error}</div>}
        <LeadResults results={results} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
