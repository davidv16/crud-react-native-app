import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

// components import
import ListScreen from './src/components/ListScreen';

export default function App() {
  const [state, setState] = useState<number>(0);

  /* Methods */

  /**
   * @function bleh
   */
  function bleh() {}

  /* View */
  return (
    <View style={styles.container}>
      <ListScreen></ListScreen>  
    
    </View>
  );
}

const styles = StyleSheet.create({
  // styling for the main container
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  textStyle:{
    fontSize: 45
  },
});
