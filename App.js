import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexScreen from "./src/screens/screen-beliefs-index";

const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={IndexScreen}
          options={{ title: 'Index' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
)

export default App;