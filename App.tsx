import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

// components import
import ListScreen from './src/components/ListScreen';

// data import
import { Entities } from './src/data/Entities';

export default function App() {
  /* Actions */

  /* Global Variables */
  let data: string[] = [];
  
  /* Methods */

  /**
   * @function populateList
   */
  function populateList () {
    

  }

  /**
   * @function addEntity
   */
  function addEntity() {
    const newEntity = {
      key: '4',
      title: 'gitle #4',
      subtitle: 'subtitle #4'
    };
    Entities.push(newEntity);
  }

  /* View */
  return (
    <View style={styles.container}>
      <ListScreen/>
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
