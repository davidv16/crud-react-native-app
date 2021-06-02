import React from 'react';
import { View, StyleSheet, SafeAreaViewBase } from 'react-native';
import { Header } from 'react-native-elements';


export default function HeaderMenu() {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Memento', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    </View>
      
  );
}

/* styling for the outcome text */
const styles = StyleSheet.create({
  container: {
  },
});