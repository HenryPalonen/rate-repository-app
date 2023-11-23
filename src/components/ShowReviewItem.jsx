import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0366d6',
  },
  
});

const ShowReviewItem = ({ review }) => {
    
    const formattedDate = format(new Date(review.createdAt), 'dd.MM.yyyy');
  
    return (
      <View style={styles.container}>
        <View style={styles.ratingContainer}>
          <Text style={{ color: 'white' }}>{review.rating}</Text>
        </View>
        <Text>{review.user ? review.user.username : 'Unknown user'}</Text>
         {/* Ensure review.user is defined */}
        <Text>{formattedDate}</Text>
        <Text>{review.text}</Text>
      </View>
    );
  };
  
  export default ShowReviewItem;

