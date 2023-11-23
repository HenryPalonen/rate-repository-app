import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW)

  const deleteReview = async (deleteReviewId ,refetch) => {
    const res = await mutate({
      variables: { deleteReviewId },
    })
    return res,
    await refetch();
  }
  
  return [deleteReview, result]
}

export default useDeleteReview




/*import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (deleteReviewId, refetch) => {
    try {
      await mutate({ variables: { deleteReviewId } });
      await refetch();
    } catch (error) {
      console.error('Error deleting review:', error);
          }
  };

  return [deleteReview, result];
};

export default useDeleteReview;

*/


