import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import Home from "./Screens/Home";
import Photos from "./Screens/Photos";
import Favorites from './Screens/Favorites';

const MainStack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack.Navigator initialRouteName='Home'>
            <MainStack.Screen
              name='Home'
              component={Home}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name='Photos'
              component={Photos}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name='Favorites'
              component={Favorites}
              options={{ headerShown: false }}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
      <StatusBar style='auto' />
    </Provider>
  );
}