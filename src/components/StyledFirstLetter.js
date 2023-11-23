import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const StyledFirstLetter = ({ text, firstLetterStyle, restTextStyle }) => {
    return (
      <View style={styles.container}>
        <Text style={firstLetterStyle}>{text.charAt(0)}</Text>
        <Text style={restTextStyle}>{text.slice(1)}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    
  });
  export default StyledFirstLetter;