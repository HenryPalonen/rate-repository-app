import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigation } from '@react-navigation/native';
import RepositorySorter from './RepositorySorter';
import SearchInput from './SearchInput'; 

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [sortCriteria, setSortCriteria] = useState({ orderBy: 'CREATED_AT', orderDirection: 'DESC' });
  const [searchQuery, setSearchQuery] = useState('');
  
  const { repositories, refetch } = useRepositories({ sortParameters: sortCriteria, searchKeyword: searchQuery });
  const navigation = useNavigation();

  useEffect(() => {
    refetch({ sortParameters: sortCriteria, searchKeyword: searchQuery });
  }, [sortCriteria, searchQuery, refetch]);

  const handleSortChange = (value) => {
    const criteria = {
      latest: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
      highestRated: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
      lowestRated: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' },
    };

    setSortCriteria(criteria[value]);
  };

  const handlePress = (id) => {
    navigation.navigate('SingleRepositoryView', { id });
  };

  // Use `useCallback` to memoize the renderHeader function
  const renderHeader = useCallback(() => {
    return (
      <>
        <SearchInput onSearch={setSearchQuery} />
        <RepositorySorter onSortChange={handleSortChange} />
      </>
    );
  }, [setSearchQuery, handleSortChange]);

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => handlePress(item.id)}>
          <RepositoryItem item={item} showGitHubButton={false} />
        </Pressable>
      )}
      keyExtractor={item => item.id}
      ListHeaderComponent={renderHeader}
    />
  );
};

export default RepositoryList;
