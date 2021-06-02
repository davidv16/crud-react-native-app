import React, { ChangeEvent, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Overlay, Text, Button, Input } from 'react-native-elements';
import { Entity } from '../models/entity';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  visible: boolean,
  setVisible: (arg: boolean) => void
}

export default function AddEntityForm({ visible, setVisible }: Props) {

  const [title, setTitle] = useState<string>('');

  const [subtitle, setSubtitle] = useState<string>('');



  function handleSubmit() {
    setVisible(false);
    console.log(title);
    console.log(subtitle);
  }

  return (
    <View>
      <Overlay isVisible={visible} onBackdropPress={() => setVisible(false)}>
        <Text>Hello from Overlay!</Text>
        <Input
          placeholder="title"
          leftIcon={<Icon
            name='envelope-square'
            size={24}
            color='black'
          />}
          style={styles}
          onChangeText={(text: string) => setTitle(text)}
        />
        <Input
          placeholder="subtitle"
          leftIcon={<Icon
            name='key'
            size={24}
            color='black'
          />}
          style={styles}
          onChangeText={(text: string) => setSubtitle(text)}
        />

        <Button
          title="Save"
          onPress={() => handleSubmit()}
        />
      </Overlay>
    </View>
  );
}

/* styling for the outcome text */
const styles = StyleSheet.create({});