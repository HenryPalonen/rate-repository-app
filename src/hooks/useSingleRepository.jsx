import { useQuery } from '@apollo/client';
import { GET_REPO } from '../graphql/queries';

const useSingleRepository = (id, first, after) => {
  const { data, loading, error, fetchMore } = useQuery(GET_REPO, {
    variables: { id, first, after },
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    if (!data?.repository.reviews.pageInfo.hasNextPage) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        first,
      },
    });
  };

  if (error) {
    console.error('Error fetching single repository:', error);
  }

  if (loading) {
    console.log('Loading single repository...');
  }

  const repository = data?.repository;

  return { repository, loading, error, fetchMore: handleFetchMore };
};

export default useSingleRepository;



/*
import { useQuery } from '@apollo/client';
import { GET_REPO } from '../graphql/queries';

const useSingleRepository = (id, first, after) => {
  const { data, loading, error } = useQuery(GET_REPO, {
    variables: { id, first, after },
    fetchPolicy: 'cache-and-network',
  });

  if (error) {
    console.error('Error fetching single repository:', error);
  }

  if (loading) {
    console.log('Loading single repository...');
  }

  const repository = data?.repository;
  //console.log(repository);

  return { repository, loading, error };

};

export default useSingleRepository;

*/

