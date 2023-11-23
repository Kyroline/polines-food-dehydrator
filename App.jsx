import * as React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './src/App';

export default function Main() {
  return (
    <PaperProvider>
      <StatusBar translucent backgroundColor="transparent" />
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);