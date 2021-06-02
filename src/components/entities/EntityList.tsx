import React, { useState } from 'react';
import { View } from 'react-native';
import Thumbnail from '../../elements/Thumbnail';
import { Entity } from '../../models/entity';
import { ListItem } from 'react-native-elements';
import EntityDetailsModal from './EntityDetailsModal';

/* Interface */
interface Props {
  entitiesData: Entity[];
  deleteItem: (id: string) => void;
}

/**
 * @function ListScreen
 * Function to generate a list of the entities on the screen
 * @param Props passed down from parent element
 * @returns a list view of entities
 */
export default function EntityList({ entitiesData, deleteItem }: Props) {
  /* Initial Entity state for the Entity hook */
  const initialState = {
    key: '',
    title: '',
    subtitle: '',
  };

  /* Hook to control the visibility of the Entity Details Modal */
  const [overlayVisible, setOverlayVisible] = useState<boolean>(false);
  /* Hook to access the Entity item being selected from the list to pass to the modal */
  const [entityItem, setEntityItem] = useState<Entity>(initialState);

  /**
   * @function handleOpenOverlay
   * Function to Open the Entity Details modal and pass the data to the entity hook.
   * @param entity
   */
  function handleOpenOverlay(entity: Entity) {
    setEntityItem(entity);
    setOverlayVisible(true);
  }

  /**
   * @function handleDelete
   * Function to pass on the deletion of an item from the modal window
   * and turn the modal window off
   * @param id the id of the item to be deleted.
   */
  function handleDelete(id: string) {
    deleteItem(id);
    setOverlayVisible(false);
  }

  return (
    <View>
      {/* Loop through the list of Entities */}
      {entitiesData.map((entity: Entity) => (
        /* List item */
        <ListItem key={entity.key as React.Key} bottomDivider onPress={() => handleOpenOverlay(entity)}>
          {/* List item thumbnail */}
          <Thumbnail height={76} width={76} text={entity.title.charAt(0)} />
          {/* List item text content */}
          <ListItem.Content>
            <ListItem.Title>{entity.title}</ListItem.Title>
            <ListItem.Subtitle>{entity.subtitle}</ListItem.Subtitle>
          </ListItem.Content>

          <EntityDetailsModal
            visible={overlayVisible}
            setVisible={setOverlayVisible}
            entityItem={entityItem}
            deleteButton={handleDelete}
          />
        </ListItem>
      ))}
    </View>
  );
}
