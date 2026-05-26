// Dummy leads data for demonstration
export const dummyLeads = [
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

/**
 * Search for leads based on location criteria
 * @param {Object} criteria - Search criteria
 * @param {string} criteria.country - Country filter
 * @param {string} criteria.state - State filter
 * @param {string} criteria.city - City filter
 * @param {string} criteria.zip - Zip code filter
 * @returns {Array} Array of matching leads
 */
export const searchLeads = (criteria) => {
  const { country, state, city, zip } = criteria;
  
  // Log search request for debugging
  console.log(`Search request - Country: ${country}, State: ${state}, City: ${city}, Zip: ${zip || 'Any'}`);
  
  // STUB: This is where you would integrate with:
  // - Licensed data provider APIs
  // - Custom data sources
  // - Proxy handling (if using SOCKS5)
  // For now, returning dummy data
  
  return dummyLeads;
};
