import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';


export default function HeaderMenu() {
  return (
    <View>
      <Header
        centerComponent={{ text: 'Memento', style: { color: '#fff' } }}
      />
    </View>

  );
}

/* styling for the outcome text */
const styles = StyleSheet.create({});