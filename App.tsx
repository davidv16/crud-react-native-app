import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <View>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </View>
  );
}

export default App;