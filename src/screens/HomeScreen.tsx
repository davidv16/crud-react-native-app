/* imports */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import uuid from 'react-native-uuid';
import { SpeedDial, ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';


/* interfaces */
import { Entity } from '../models/entity';

/* components import */
import ListScreen from '../components/ListScreen';
import HeaderMenu from '../components/HeaderMenu';

/* data import */
import * as listEntities from '../../data.json';
import { entitiesData } from '../../entities'
import FooterMenu from '../components/FooterMenu';

export default function HomeScreen() {

  /* Hooks */
  const [entities, setEntities] = useState<Entity[]>(entitiesData);

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [AddModalOpen, setAddModalOpen] = useState<boolean>(true);


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
    <ThemeProvider>
      <View style={styles.container}>
        <HeaderMenu />
        <ListScreen entitiesData={entities} />
        <SpeedDial
          isOpen={menuOpen}
          onOpen={() => { setMenuOpen(true) }}
          onClose={() => { setMenuOpen(false) }}
          icon={{ name: 'edit', color: '#fff' }}
          openIcon={{ name: 'close', color: '#fff' }}
        >
          <SpeedDial.Action
            icon={{ name: 'add', color: '#fff' }}
            title="Add Entity"
            onPress={() => console.log('Add Something')}
          />
          <SpeedDial.Action
            icon={{ name: 'add-circle', color: '#fff' }}
            title="Copy a random Entity"
            onPress={() => copyRandomEntity()}
          />
        </SpeedDial>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});