import { useState, useCallback } from 'react';

/**
 * Custom hook for managing lead search state and operations
 * @returns {Object} Search state and handlers
 */
export const useLeadSearch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const search = useCallback(async (searchLeadsFn, fields) => {
    setLoading(true);
    setError('');
    
    try {
      const data = await searchLeadsFn(fields);
      setResults(data);
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearResults = useCallback(() => {
    setResults([]);
    setError('');
  }, []);

  return {
    results,
    loading,
    error,
    search,
    clearResults
  };
};
