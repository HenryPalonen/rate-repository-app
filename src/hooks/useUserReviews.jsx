import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useUserReviews = (first, after) => {
  // Prepare variables for the query
  const variables = {
    includeReviews: true,
    reviewsFirst: first,
  };

  // Include 'after' only if it's not null
  if (after) {
    variables.reviewsAfter = after;
  }

  const { data, loading, error, fetchMore, refetch } = useQuery(ME, {
    variables: variables,
    fetchPolicy: 'cache-and-network',
  });

  // Function to handle fetching more reviews
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me?.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        reviewsAfter: data.me.reviews.pageInfo.endCursor,
        reviewsFirst: first,
      },
    });
  };

  return {
    reviews: data?.me?.reviews.edges.map(edge => edge.node) || [],
    loading,
    error,
    fetchMore: handleFetchMore,
    refetch,
  };
};

export default useUserReviews;
