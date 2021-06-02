import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SpeedDial } from 'react-native-elements';

interface Props {
  menuOpen: boolean,
  setMenuOpen: (arg: boolean) => void,
  copyRandomEntity: () => void,
  addButton: (arg: boolean) => void
}

export default function FooterMenu({ menuOpen, setMenuOpen, copyRandomEntity, addButton }: Props) {

  return (
    <View>
      <SpeedDial
        isOpen={menuOpen}
        onOpen={() => { setMenuOpen(true) }}
        onClose={() => { setMenuOpen(false) }}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
      >
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          title="Add Entity"
          onPress={() => addButton(true)}
        />
        <SpeedDial.Action
          icon={{ name: 'add-circle', color: '#fff' }}
          title="Copy a random Entity"
          onPress={() => copyRandomEntity()}
        />
      </SpeedDial>
    </View>
  );
}