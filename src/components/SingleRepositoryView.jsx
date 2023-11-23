import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import useSingleRepository from '../hooks/useSingleRepository';
import RepositoryItem from './RepositoryItem';
import ShowReviewItem from './ShowReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const SingleRepositoryView = ({ route }) => {
  const { id } = route.params;
  const { repository, loading, error, fetchMore } = useSingleRepository(id, 10);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  // Ensure that repository data is available before rendering
  if (!repository) return null;

  const reviewData = repository.reviews.edges.map(edge => edge.node);
  const onEndReached = () => {
    if (repository.reviews.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          after: repository.reviews.pageInfo.endCursor,
          first: 10, // or any number of items you want to fetch per page
        },
      });
    }
  };

  return (
    <FlatList
      data={reviewData}
      renderItem={({ item }) => <ShowReviewItem review={item} />}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={() => <RepositoryItem item={repository} showGitHubButton={true} />}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5} // Fetch more items when you're halfway through the last item
    />
  );
};

export default SingleRepositoryView;



/*
import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import useSingleRepository from '../hooks/useSingleRepository';
import RepositoryItem from './RepositoryItem';
import ShowReviewItem from './ShowReviewItem';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
});

const SingleRepositoryView = ({ route }) => {
    const { id } = route.params;
    const { repository, loading, error } = useSingleRepository(id, 10);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    // Ensure that repository data is available before rendering
    if (!repository) return null;

    const reviewData = repository.reviews.edges.map(edge => edge.node);

    return (
        <FlatList
            data={reviewData}
            renderItem={({ item }) => <ShowReviewItem review={item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListHeaderComponent={() => <RepositoryItem item={repository} showGitHubButton={true} />}
        />
    );
};

export default SingleRepositoryView;
*/
/*
import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import useSingleRepository from '../hooks/useSingleRepository';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });


  const SingleRepositoryView = ({ route }) => {
    const { id } = route.params;
    const { repository, loading, error } = useSingleRepository(id, 10); // Fetch first 10 reviews
  
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;
  
    return (
      <FlatList
        data={repository.reviews.edges.map(edge => edge.node)}
        //renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => <RepositoryItem item={repository} showGitHubButton={true} />}
      />
    );
  };
export default SingleRepositoryView;

*/
