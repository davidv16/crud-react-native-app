import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Overlay } from 'react-native-elements';

export default function EntityDetails() {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </View>
  );
}