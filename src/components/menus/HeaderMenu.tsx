import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

/**
 * @function HeaderMenu
 * Function to render the Header on top of the app.
 * @returns A view of the header.
 */
export default function HeaderMenu() {
  return (
    <View>
      <Header centerComponent={{ text: 'Memento', style: { color: '#fff' } }} />
    </View>
  );
}
