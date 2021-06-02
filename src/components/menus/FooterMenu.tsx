import React from 'react';
import { View } from 'react-native';
import { SpeedDial } from 'react-native-elements';

/* Interface */
interface Props {
  menuOpen: boolean;
  setMenuOpen: (arg: boolean) => void;
  copyRandomEntity: () => void;
  addButton: (arg: boolean) => void;
}

/**
 * @function FooterMenu
 * @param Props passed down from parent component
 * @returns The Footer Menu
 */
export default function FooterMenu({ menuOpen, setMenuOpen, copyRandomEntity, addButton }: Props) {
  return (
    <View>
      {/* Main menu button */}
      <SpeedDial
        isOpen={menuOpen}
        onOpen={() => {
          setMenuOpen(true);
        }}
        onClose={() => {
          setMenuOpen(false);
        }}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
      >
        {/* Menu button "Add Entity" */}
        <SpeedDial.Action icon={{ name: 'add', color: '#fff' }} title="Add Entity" onPress={() => addButton(true)} />

        {/* Menu button "Copy a random Entity" */}
        <SpeedDial.Action
          icon={{ name: 'add-circle', color: '#fff' }}
          title="Copy a Random Entity"
          onPress={() => copyRandomEntity()}
        />
      </SpeedDial>
    </View>
  );
}
