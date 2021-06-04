import React from 'react';
import { View } from 'react-native';
import Thumbnail from '../../elements/Thumbnail';
import { ListItem } from 'react-native-elements';
import EntityDetailsModal from './EntityDetailsModal';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/stores';

/**
 * @function ListScreen
 * Function to generate a list of the entities on the screen
 * @param Props passed down from parent element
 * @returns a list view of entities
 */
export default observer(function EntityList() {
  /* Hooks from the Mobx Entity Store */
  const { entityStore } = useStore();
  const { handleOpenEntityModal, entities } = entityStore;

  return (
    <View>
      {/* Loop through the list of Entities */}
      {entities.map(entity => (
        /* List item */
        <ListItem key={entity.key as React.Key} bottomDivider onPress={() => handleOpenEntityModal(entity)}>
          {/* List item thumbnail */}
          <Thumbnail height={76} width={76} text={entity.title.charAt(0)} />
          {/* List item text content */}
          <ListItem.Content>
            <ListItem.Title>{entity.title}</ListItem.Title>
            <ListItem.Subtitle>{entity.subtitle}</ListItem.Subtitle>
          </ListItem.Content>

          <EntityDetailsModal />
        </ListItem>
      ))}
    </View>
  );
}
)
