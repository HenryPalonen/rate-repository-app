import React, { refetch} from 'react';
import { FlatList, View, StyleSheet, Text, Button, Alert } from 'react-native';
import useUserReviews from '../hooks/useUserReviews';
import useDeleteReview from '../hooks/useDeleteReview';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {

  const navigation = useNavigation();
  const { reviews, loading, error, fetchMore, refetch } = useUserReviews(5, null);
  const [deleteReview] = useDeleteReview();

  const handleViewRepository = (repositoryId) => {
      navigation.navigate('SingleRepositoryView', { id: repositoryId });
  };

  const handleDeleteReview = (reviewId) => {
      Alert.alert(
          'Delete Review',
          'Are you sure you want to delete this review?',
          [
              {
                  text: 'Cancel',
                  style: 'cancel',
              },
              {
                  text: 'OK',
                  onPress: () => deleteReview(reviewId, refetch),
              },
          ],
          { cancelable: false }
      );
  };

  const renderItem = ({ item }) => {
    const formattedDate = format(new Date(item.createdAt), 'dd.MM.yyyy');

    return (
      <View style={styles.container}>
        <View style={styles.ratingContainer}>
          <Text style={{ color: 'white' }}>{item.rating}</Text>
        </View>
        <Text style={styles.text}>{item.repository.fullName}</Text>
        <Text style={styles.text}>{formattedDate}</Text>
        <Text style={styles.text}>{item.text}</Text>
        <View style={styles.buttonContainer}>
          <Button title="View Repository" onPress={() => handleViewRepository(item.repository.id)} />
          <Button title="Delete Review" onPress={() => handleDeleteReview(item.id)} color="red" />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={reviews}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={fetchMore}
    />
  );
};

export default MyReviews;



/*
import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import useUserReviews from '../hooks/useUserReviews';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
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
  text: {
    
  }
});

const ItemSeparator = () => <View style={styles.separator} />;


const MyReviews = () => {
  const { reviews, loading, error, fetchMore } = useUserReviews(5, null);

  if (loading) return <Text>Loading...</Text>;
  if (error) {
    console.error("Error details:", error);
    return <Text>Error occurred: {error.message}</Text>;
  }

  const renderItem = ({ item }) => {
    const formattedDate = format(new Date(item.createdAt), 'dd.MM.yyyy');

    return (
      <View style={styles.container}>
        <View style={styles.ratingContainer}>
          <Text style={{ color: 'white' }}>{item.rating}</Text>
        </View>
        <Text style={styles.text}>{item.repository.fullName}</Text>
        <Text style={styles.text}>{formattedDate}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={reviews}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={fetchMore}
    />
  );
};

export default MyReviews;

*/