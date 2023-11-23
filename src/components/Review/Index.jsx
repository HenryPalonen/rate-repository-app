import React from 'react';
import ReviewContainer from './ReviewContainer';
import useCreateReview from '../../hooks/useCreateReview';
import { useNavigation } from '@react-navigation/native';

const Review = () => {
  const [createReview] = useCreateReview();
  const navigation = useNavigation();

  const onSubmit = async ({ ownerName, repositoryName, rating, text }) => {
    try {
      const response = await createReview({ ownerName, repositoryName, rating: Number(rating), text });

      // Assuming the successful submission redirects to the single repository view
      if (response.data.createReview) {
        navigation.navigate('RepositoryList');
      }
      
    } catch (e) {
      console.error(e);
    }
  };

  return <ReviewContainer onSubmit={onSubmit} />;
};

export default Review;

