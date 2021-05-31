import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Thumbnail from './Thumbnail';

const ListScreen = () => {
  const DATA = [
    {
      key: '1',
      title: 'title #1',
      subtitle: 'subtitle #1'
    },
    {
      key: '2',
      title: 'yitle #2',
      subtitle: 'subtitle #2'
    },
    {
      key: '3',
      title: 'uitle #3',
      subtitle: 'subtitle #3'
    }
  ];

  return (
      <FlatList
        data={DATA}
        renderItem={({item}) => {
          return(<>
          <View style={styles.container}>
            <Thumbnail
              backgroundColor="black"
              color="white"
              text={item.title.charAt(0)}
            />
            <Text style={styles.textStyle}>{item.title}</Text>
            <Text style={styles.textStyle}>{item.subtitle}</Text>
            </View>
          </>
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