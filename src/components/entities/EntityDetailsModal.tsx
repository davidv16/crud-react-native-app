import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card, Icon, Overlay } from 'react-native-elements';
import Thumbnail from '../../elements/Thumbnail';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/stores';

/**
 * @function EntityDetailsModal
 * Function to run the Entity Details Modal window
 * @param Props passed down from a parent element
 * @returns the Entity Details modal view
 */
export default observer(function EntityDetailsModal() {
  /* Hooks from the Mobx Entity Store */
  const { entityStore } = useStore();
  const { handleDeleteEntity, selectedEntity, entityModalOpen, setEntityModalOpen } = entityStore;

  return (
    <View>
      {/* Entity Details Modal window */}
      <Overlay isVisible={entityModalOpen} onBackdropPress={() => setEntityModalOpen(false)}>
        <Card>
          {/* Title */}
          <Card.Title>{selectedEntity.title}</Card.Title>

          {/* Thumbnail */}
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
            <Thumbnail height={200} width={200} text={selectedEntity.title.charAt(0)} />
          </View>

          {/* Subtitle */}
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ paddingTop: 20, paddingBottom: 20 }}>{selectedEntity.subtitle}</Text>
          </View>

          <Card.Divider />

          {/* Buttons */}
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Button
                icon={<Icon name="delete" color="#ffffff" />}
                buttonStyle={{ width: 300, backgroundColor: 'red' }}
                title="Delete"
                onPress={() => handleDeleteEntity(selectedEntity)}
              />
            </View>
            <View>
              <Button
                icon={<Icon name="close" color="#ffffff" />}
                buttonStyle={{ width: 300 }}
                title="Close"
                onPress={() => setEntityModalOpen(false)}
              />
            </View>
          </View>
        </Card>
      </Overlay>
    </View>
  );
}
)