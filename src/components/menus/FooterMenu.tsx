import React from 'react';
import { View } from 'react-native';
import { SpeedDial } from 'react-native-elements';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/stores';

/**
 * @function FooterMenu
 * @param Props passed down from parent component
 * @returns The Footer Menu
 */
export default observer(function FooterMenu() {
  /* Hooks from the Mobx Entity Store */
  const { entityStore } = useStore();
  const { handleAddModalOpen, footerMenuOpen, setFooterMenuOpen, copyRandomEntity } = entityStore;

  return (
    <View>
      {/* Main menu button */}
      <SpeedDial
        isOpen={footerMenuOpen}
        onOpen={() => {
          setFooterMenuOpen(true);
        }}
        onClose={() => {
          setFooterMenuOpen(false);
        }}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
      >
        {/* Menu button "Add Entity" */}
        <SpeedDial.Action icon={{ name: 'add', color: '#fff' }} title="Add Entity" onPress={() => handleAddModalOpen()} />

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
)
