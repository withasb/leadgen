import React from 'react';

const LeadResults = ({ results }) => {
  if (!results || results.length === 0) {
    return (
      <div style={{
        marginTop: 30,
        padding: '20px',
        background: '#f5f5f5',
        borderRadius: '4px',
        color: '#999',
        textAlign: 'center'
      }}>
        No leads found. Use the search form above to get started.
      </div>
    );
  }

  return (
    <div style={{ marginTop: 30 }}>
      <h3>Search Results ({results.length})</h3>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Street Address</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name || 'N/A'}</td>
              <td>{item.email || 'N/A'}</td>
              <td>{item.phone || 'N/A'}</td>
              <td>{item.address || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadResults;
