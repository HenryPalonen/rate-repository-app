import { useQuery } from '@apollo/client';
import { GET_REPOS } from '../graphql/queries';

const useRepositories = ({ sortParameters, searchKeyword }) => {
  const { orderBy = 'CREATED_AT', orderDirection = 'DESC' } = sortParameters || {};

  const { data, loading, error, refetch } = useQuery(GET_REPOS, {
    variables: { orderBy, orderDirection, searchKeyword },
    fetchPolicy: 'cache-and-network',
  });

  if (error) {
    console.error('Error fetching repositories:', error);
  }

  if (loading) {
    console.log('Loading repositories...');
  }

  const repositories = data?.repositories.edges.map(edge => edge.node) ?? [];

  return { repositories, loading, refetch, error };
};

export default useRepositories;

