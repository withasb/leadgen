const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

/**
 * Fetch leads from the backend API
 * @param {Object} fields - Search criteria
 * @returns {Promise<Array>} Array of leads
 */
export const searchLeads = async (fields) => {
  const response = await fetch(`${API_BASE_URL}/api/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fields)
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to fetch leads');
  }
  
  return response.json();
};

/**
 * Health check endpoint
 * @returns {Promise<Object>} Health status
 */
export const checkHealth = async () => {
  const response = await fetch(`${API_BASE_URL}/health`);
  if (!response.ok) {
    throw new Error('Backend health check failed');
  }
  return response.json();
};
