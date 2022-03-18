import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyDrawer from './src/navigation/NavMeals';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
// import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <GestureHandlerRootView>
    <MyDrawer />
    // </GestureHandlerRootView>
  );
}
export default App;
