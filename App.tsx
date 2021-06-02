/* imports */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import uuid from 'react-native-uuid';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';


/* interfaces */
import { Entity } from './src/models/entity';

/* components import */
import ListScreen from './src/components/ListScreen';
import HeaderMenu from './src/components/HeaderMenu';

/* data import */
import * as listEntities from './data.json';
import { entitiesData } from './entities'

export default function App() {

  /* Global Variables */
  const [entities, setEntities] = useState<Entity[]>(entitiesData);

  /* Actions */
  useEffect(() => {

  }, []);

  /* Methods */

  /**
   * @function addEntity
   * Function to add a new entity.
   */
  function addEntity(entity: Entity) {
    // spreads the entities array and adds a uuid as a key
    setEntities([...entities, { ...entity, key: uuid.v4() }]);
  }

  /**
   * @function copyRandomEntity
   * Function to get a random item from the entity array and adds it to the array again.
   */
  function copyRandomEntity() {
    // finds a random item in the entities array
    // and adds it to the entity array.
    addEntity(entities[Math.floor(Math.random() * entities.length)]);
  }

  /**
   * @function deleteEntity
   * @param id string
   * Function that deletes an entity from the array by id
   */
  function deleteEntity(id: string) {
    // looks for the entity uuid in the list and deletes it
    setEntities([...entities.filter(x => x.key !== id)])
  }

  /* View */
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <View style={styles.container}>
          <HeaderMenu/>
          <ListScreen entitiesData={entities} />
          <Button
            onPress={() => addEntity({ key: '', title: 'bleh', subtitle: 'subtitle' })}
            title="Add Entity"
            color="#841584"
          />
          <Button
            onPress={() => copyRandomEntity()}
            title="Copy Entity"
            color="#841584"
          />
          <Button
            onPress={() => deleteEntity('fda66d1c-3312-47a4-92f3-cfa8a3a26886')}
            title="Delete Entity"
            color="#841584"
          />


        </View>

      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
