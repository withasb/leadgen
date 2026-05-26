import React, { useState, useCallback } from 'react';

const defaultValues = {
  country: '',
  state: '',
  city: '',
  zip: '',
  socks5: ''
};

const LeadForm = ({ onSearch }) => {
  const [fields, setFields] = useState(defaultValues);

  const handleChange = useCallback(e => {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    if (fields.country && fields.state && fields.city) {
      onSearch(fields);
    }
  }, [fields, onSearch]);

  const handleReset = useCallback(() => {
    setFields(defaultValues);
  }, []);

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        alignItems: 'center',
        margin: '16px 0',
        padding: '20px',
        background: '#fff',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}
    >
      <input
        required
        name="country"
        placeholder="Country"
        value={fields.country}
        onChange={handleChange}
        style={{ flex: '1 1 150px', minWidth: '100px' }}
      />
      <input
        required
        name="state"
        placeholder="State"
        value={fields.state}
        onChange={handleChange}
        style={{ flex: '1 1 150px', minWidth: '100px' }}
      />
      <input
        required
        name="city"
        placeholder="City"
        value={fields.city}
        onChange={handleChange}
        style={{ flex: '1 1 150px', minWidth: '100px' }}
      />
      <input
        name="zip"
        placeholder="Zip Code"
        value={fields.zip}
        onChange={handleChange}
        style={{ flex: '1 1 100px', minWidth: '80px' }}
      />
      <input
        name="socks5"
        placeholder="SOCKS5 Proxy (optional)"
        value={fields.socks5}
        onChange={handleChange}
        style={{ flex: '1 1 220px', minWidth: '150px' }}
      />
      <div style={{ display: 'flex', gap: '8px' }}>
        <button type="submit" style={{ padding: '10px 24px' }}>
          Search
        </button>
        <button 
          type="button" 
          onClick={handleReset} 
          style={{
            padding: '10px 24px',
            background: '#999'
          }}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default LeadForm;
