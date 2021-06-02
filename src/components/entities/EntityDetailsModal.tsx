import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card, Icon, Overlay } from 'react-native-elements';
import { Entity } from '../../models/entity';
import Thumbnail from '../../elements/Thumbnail';

/* Interface */
interface Props {
  visible: boolean;
  setVisible: (args: boolean) => void;
  entityItem: Entity;
  deleteButton: (id: string) => void;
}

/**
 * @function EntityDetailsModal
 * Function to run the Entity Details Modal window
 * @param Props passed down from a parent element
 * @returns the Entity Details modal view
 */
export default function EntityDetailsModal({ visible, setVisible, entityItem, deleteButton }: Props) {
  return (
    <View>
      {/* Entity Details Modal window */}
      <Overlay isVisible={visible} onBackdropPress={() => setVisible(false)}>
        <Card>
          {/* Title */}
          <Card.Title>{entityItem.title}</Card.Title>

          {/* Thumbnail */}
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
            <Thumbnail height={200} width={200} text={entityItem.title.charAt(0)} />
          </View>

          {/* Subtitle */}
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ paddingTop: 20, paddingBottom: 20 }}>{entityItem.subtitle}</Text>
          </View>

          <Card.Divider />

          {/* Buttons */}
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Button
                icon={<Icon name="delete" color="#ffffff" />}
                buttonStyle={{ width: 300, backgroundColor: 'red' }}
                title="Delete"
                onPress={() => deleteButton(entityItem.key as string)}
              />
            </View>
            <View>
              <Button
                icon={<Icon name="close" color="#ffffff" />}
                buttonStyle={{ width: 300 }}
                title="Close"
                onPress={() => setVisible(false)}
              />
            </View>
          </View>
        </Card>
      </Overlay>
    </View>
  );
}
