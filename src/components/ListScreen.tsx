import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Thumbnail from './Thumbnail';
import { Entities } from '../data/Entities.json';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const ListScreen = () => {
  

  return (
      <FlatList
        data={Entities}
        renderItem={({item}) => {
          return(
          <View style={styles.container}>
            <Thumbnail
              backgroundColor="black"
              color="white"
              text={item.title.charAt(0)}
            />
            <Text style={styles.textStyle}>{item.title}</Text>
            <Text style={styles.textStyle}>{item.subtitle}</Text>
            </View>
          );
          
        }}
      />
  );
};

const styles = StyleSheet.create({
  container:{
    paddingTop: 30,
    paddingLeft: 30
  },
  textStyle:{
    marginVertical: 6
  }
});

export default ListScreen;