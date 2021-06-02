import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Thumbnail from './Thumbnail';
//import { Entities } from '../data/Entities.json';
import {Entity} from '../models/entity';
import { Avatar, ListItem } from 'react-native-elements';

export default function(entitiesData: any) {
  return (
    <View>
    {
      entitiesData.entitiesData.map((entity: any) => (
        <ListItem key={entity.key} bottomDivider>
          <Thumbnail
              backgroundColor="black"
              color="white"
              text={entity.title.charAt(0)
              }
            />
          <ListItem.Content>
            <ListItem.Title>{entity.title}</ListItem.Title>
            <ListItem.Subtitle>{entity.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))
    }
    </View>
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