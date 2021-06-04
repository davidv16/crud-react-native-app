/* imports */
import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import uuid from 'react-native-uuid';
import { observer } from 'mobx-react';

/* interfaces */
import { Entity } from '../models/entity';

/* components import */
import ListScreen from '../components/entities/EntityList';
import HeaderMenu from '../components/menus/HeaderMenu';
import FooterMenu from '../components/menus/FooterMenu';
import AddEntityForm from '../forms/AddEntityForm';

/* custom hooks */
import { useStore } from '../stores/stores';

/* Initial data import */
import { entitiesData } from '../../entities';

/* Import window dimensions */
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');

export default observer(function HomeScreen() {

  const { entityStore } = useStore();
  const { loadEntities, entityRegistry } = entityStore;

  useEffect(() => {
    //check if we have a loaded entityList in the registry(state)
    //if not we load them.
    if (entityRegistry.size <= 1) loadEntities();
    //then pass the entityRegistry.size and loadEntities as a dependency to our useEffect
  }, [entityRegistry.size, loadEntities])



  /* Hooks */
  /* Hook to store a list of Entities imported from the mock database */
  const [entities, setEntities] = useState<Entity[]>(entitiesData);

  /* Methods */

  /**
   * @function deleteEntity
   * @param id string
   * Function that deletes an entity from the array by id
   */
  function deleteEntity(id: string) {
    // looks for the entity uuid in the list and deletes it
    setEntities([...entities.filter((x) => x.key !== id)]);
  }

  /* View */
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ flex: 1 }}>
        <HeaderMenu />
      </View>

      {/* List of Entities */}
      <View style={{ flex: 1 }}>
        <ListScreen deleteItem={deleteEntity} />
      </View>

      {/* Add new Entity Form */}
      <AddEntityForm />

      {/* Footer button menu */}
      <View style={styles.footer}>
        <FooterMenu
        />
      </View>
    </View>
  );
}
)

/* Styles */
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  footer: {
    position: 'absolute',
    height: 40,
    left: 0,
    top: WINDOW_HEIGHT - 2,
    width: WINDOW_WIDTH,
  },
});
