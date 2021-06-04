import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Overlay, Button, Input } from 'react-native-elements';
import { Entity } from '../models/entity';
import Icon from 'react-native-vector-icons/FontAwesome';
import { observer } from 'mobx-react';
import { useStore } from '../stores/stores';
import uuid from 'react-native-uuid';

/**
 * @function AddEntityForm
 * Function to display the Add new Entity Form
 * @param Props passed down from parent component
 * @returns Add Entity Modal View
 */
export default observer(function AddEntityForm() {
  const { entityStore } = useStore();
  const { addEntityModalOpen, setAddEntityModalOpen, addEntity } = entityStore;

  /* Hooks to store the text data from the input fields */
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');

  /**
   * @function handleSubmit
   * Function to handle the submission of the Entity form
   */
  function handleSubmit() {
    // creates a temp Entity
    const newEntity: Entity = {
      key: uuid.v4(),
      title: title,
      subtitle: subtitle,
    };

    // passes it up to the add Entity function
    addEntity(newEntity);
    // and hides the form modal window again
    setAddEntityModalOpen(false);
  }

  return (
    <View>
      <Overlay isVisible={addEntityModalOpen} onBackdropPress={() => setAddEntityModalOpen(false)}>
        <Input
          placeholder="title"
          leftIcon={<Icon name="envelope-square" size={24} color="black" />}
          style={styles}
          onChangeText={(text: string) => setTitle(text)}
        />
        <Input
          placeholder="subtitle"
          leftIcon={<Icon name="key" size={24} color="black" />}
          style={styles}
          onChangeText={(text: string) => setSubtitle(text)}
        />

        <Button title="Save" onPress={() => handleSubmit()} />
      </Overlay>
    </View>
  );
}
)

/* styling */
const styles = StyleSheet.create({});
