import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Thumbnail from './Thumbnail';
//import { Entities } from '../data/Entities.json';

interface Props {
  entitiesData: object[]
}

const ListScreen = (props: any) => {

  return (
    <FlatList
      data={props.entitiesData}
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <Thumbnail
              backgroundColor="black"
              color="white"
              text={item.title.charAt(0)
              }
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
  container: {
    paddingTop: 30,
    paddingLeft: 30
  },
  textStyle: {
    marginVertical: 6
  }
});

export default ListScreen;