import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tab: {
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontSize: 16,
    },
    pressed: {
      opacity: 0.5,
    },
  });
  

const AppBarTab = ({ text, screenName, onPress }) => {
    const navigation = useNavigation();
  
    const handlePress = () => {
      if (onPress) {
        // If there's a custom onPress function
        onPress();
      } else if (screenName) {
        // Otherwise, navigate to the specified screen
        navigation.navigate(screenName);
      }
    };
  
    return (
      <Pressable
        style={({ pressed }) => [styles.tab, pressed && styles.pressed]}
        onPress={handlePress}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  };
  
  export default AppBarTab;  