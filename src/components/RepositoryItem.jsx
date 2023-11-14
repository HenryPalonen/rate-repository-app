import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ccontainer: {
    backgroundColor: 'white',
    padding: 10,
  },
  topContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    marginLeft: 10,
    justifyContent: 'space-around',
    flex: 1,
  },
  countsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  countItem: {
    alignItems: 'center',
  },
  languageBadge: {
    backgroundColor: '#0366d6', // Or use theme.colors.primary
    color: 'white',
    padding: 4,
    borderRadius: 4,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
});

const formatCount = count => count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toString();

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.infoContainer}>
          <Text>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <Text style={styles.languageBadge}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.countsContainer}>
        <View style={styles.countItem}>
          <Text>Stars:</Text>
          <Text>{formatCount(item.stargazersCount)}</Text>
        </View>
        <View style={styles.countItem}>
          <Text>Forks:</Text>
          <Text>{formatCount(item.forksCount)}</Text>
        </View>
        <View style={styles.countItem}>
          <Text>Reviews:</Text>
          <Text>{formatCount(item.reviewCount)}</Text>
        </View>
        <View style={styles.countItem}>
          <Text>Rating:</Text>
          <Text>{formatCount(item.ratingAverage)}</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
