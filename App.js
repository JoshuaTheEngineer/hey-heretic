import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexScreen from "./src/screens/screen-beliefs-index";
import HeresyScreen from "./src/screens/screen-heresy";
import ChurchScreen from "./src/screens/screen-church";

const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Index"
          component={IndexScreen}
          options={{ title: 'Index' }}
        />
        <Stack.Screen name="Heresy" component={HeresyScreen} />
        <Stack.Screen name="Church" component={ChurchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
)

export default App;