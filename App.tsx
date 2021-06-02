import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';

const App = () => {
  return (
    <View>
      <SafeAreaProvider>
        <ThemeProvider>
          <HomeScreen />
        </ThemeProvider>
      </SafeAreaProvider>
    </View>
  );
};

export default App;
