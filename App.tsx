import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';

import fillTask from './fillTask';
import React, { useState } from "react";
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />



      
      <Stack.Screen name="fillTask" component={fillTask} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;