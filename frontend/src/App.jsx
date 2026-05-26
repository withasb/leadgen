import React from 'react';
import { useLeadSearch } from '../hooks/useLeadSearch';
import { searchLeads } from '../services/api';
import Header from './components/Header';
import Footer from './components/Footer';
import LeadForm from './components/LeadForm';
import LeadResults from './components/LeadResults';

import './App.css';

function App() {
  const { results, loading, error, search } = useLeadSearch();

  const onSearch = (fields) => {
    search(searchLeads, fields);
  };

  return (
    <div>
      <Header />
      <main style={{ maxWidth: 1100, margin: '50px auto', minHeight: '70vh' }}>
        <h1>Lead Generator</h1>
        <p>Search for leads by location information</p>
        <LeadForm onSearch={onSearch} />
        {loading && <div style={{ marginTop: 20, color: '#666' }}>Loading...</div>}
        {error && (
          <div style={{ 
            marginTop: 20, 
            color: '#d32f2f', 
            padding: '10px', 
            background: '#ffebee', 
            borderRadius: '4px' 
          }}>
            Error: {error}
          </div>
        )}
        <LeadResults results={results} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
