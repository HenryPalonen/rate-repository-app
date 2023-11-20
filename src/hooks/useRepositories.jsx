import { useQuery } from '@apollo/client';
import { GET_REPOS } from '../graphql/queries';

const useRepositories = () => {
  const { data, loading, error, refetch } = useQuery(GET_REPOS, {
    fetchPolicy: 'cache-and-network',
  });

  // Check if there's an error
  if (error) {
    console.error('Error fetching repositories:', error);
    // Handle error appropriately. You might want to return the error
    // or manage state differently based on your application needs.
  }

  // Log loading status
  if (loading) {
    console.log('Loading repositories...');
  }

  // Adjust how the repositories data is accessed
  const repositories = data?.repositories.edges.map(edge => edge.node) ?? [];

  return { repositories, loading, refetch, error };
};

export default useRepositories;




// old version
/*import { useState, useEffect } from 'react';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // New state for tracking errors

  const fetchRepositories = async () => {
    setLoading(true);
    setError(null); // Reset error state before fetching

    try {
      const response = await fetch('http://192.168.8.100:5000/api/repositories');

      if (!response.ok) { // Check if response status is not OK
        throw new Error(`HTTP error! status: ${response.status}`); // Throw an error
      }

      const json = await response.json();
      setRepositories(json);
    } catch (e) {
      setError(e); // Set error if fetching fails
      console.error(e); // Log the error for debugging purposes
    } finally {
      setLoading(false); // Ensure loading is set to false
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories, error }; // Include error in the returned object
};
*/
