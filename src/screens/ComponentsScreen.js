import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

 const ComponentsScreen = () => {
  const greeting = "Hi there";
  const greetingTwo = <Text style={styles.extraText}>Hello to you.</Text>
  const name = "Innocent";

  return (
      <View>
        <Text style={styles.mainHeaderStyle}>
          Getting started with react native!
        </Text>
        <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        <Text style={styles.textStyle}>{greeting}</Text>
        {greetingTwo}
      </View>
    )
 };

 const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  mainHeaderStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20,
  },
  extraTextStyle: {
    fontSize: 20
  }
 });

 export default ComponentsScreen;