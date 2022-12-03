import React from 'react';
import Main from "./screens/Main";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Home from './screens/Home';
import Main from "./screens/Main";

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigation initialRouteName="Home" screenOptions={{
      headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Main" component={Main}/>
      </Stack.Navigation>
    </NavigationContainer>
  );
}

export default App;