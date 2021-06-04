/* imports */
import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { observer } from 'mobx-react';

/* components import */
import ListScreen from '../components/entities/EntityList';
import HeaderMenu from '../components/menus/HeaderMenu';
import FooterMenu from '../components/menus/FooterMenu';
import AddEntityForm from '../forms/AddEntityForm';

/* custom hooks */
import { useStore } from '../stores/stores';

/* Import window dimensions */
const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window');

export default observer(function HomeScreen() {

  const { entityStore } = useStore();
  const { loadEntities, entityRegistry } = entityStore;

  useEffect(() => {
    //check if we have a loaded entityList in the registry(state)
    //if not we load them.
    if (entityRegistry.size < 1) loadEntities();
    //then pass the entityRegistry.size and loadEntities as a dependency to our useEffect
  }, [entityRegistry.size, loadEntities])

  /* View */
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ flex: 1 }}>
        <HeaderMenu />
      </View>

      {/* List of Entities */}
      <View style={{ flex: 1 }}>
        <ListScreen />
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
