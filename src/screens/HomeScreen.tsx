/* imports */
import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import uuid from 'react-native-uuid';


/* interfaces */
import { Entity } from '../models/entity';

/* components import */
import ListScreen from '../components/entities/EntityList';
import HeaderMenu from '../components/menus/HeaderMenu';
import FooterMenu from '../components/menus/FooterMenu';
import AddEntityForm from '../forms/AddEntityForm';

/* Initial data import */
import { entitiesData } from '../../entities'

/* Import window dimensions */
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');

export default function HomeScreen() {

  /* Hooks */
  /* Hook to store a list of Entities imported from the mock database */
  const [entities, setEntities] = useState<Entity[]>(entitiesData);
  
  /* Hook to control the bottom menu visibility */
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
  /* Hook to control the add Entity form modal visibility */
  const [AddModalOpen, setAddModalOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(WINDOW_HEIGHT);
  }, [])

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

  /**
   * @function handleAddModalOpen
   * Function to open the Add Entity Modal window
   * and close the footer menu
   */
  function handleAddModalOpen () {
    setAddModalOpen(true);
    setMenuOpen(false);
  }

  /**
   * @function handleCopyRandomEntity
   * Function to run the Copy Random Entity procedure
   * as well as closing the footer menu
   */
  function handleCopyRandomEntity() {
    copyRandomEntity();
    setMenuOpen(false);
  }

  /* View */
  return (
      <View style={styles.container}>
        {/* Header */}
        <View style={{flex: 1}}>
          <HeaderMenu />
        </View>

        {/* List of Entities */}
        <View style={{flex: 1}}>
          <ListScreen 
            entitiesData={entities} 
            deleteItem={deleteEntity}
          />
        </View>

        {/* Add new Entity Form */}
        <AddEntityForm
          visible={AddModalOpen}
          setVisible={setAddModalOpen}
          addEntity={addEntity}
        />

        {/* Footer button menu */}
        <View style={styles.footer}>
          <FooterMenu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            copyRandomEntity={handleCopyRandomEntity}
            addButton={handleAddModalOpen}
          />
        </View>
      </View>
  );
}

/* Styles */
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  footer: {
    position: 'absolute',
    height: 40,
    left: 0, 
    top: WINDOW_HEIGHT - 2, 
    width: WINDOW_WIDTH,
}
});