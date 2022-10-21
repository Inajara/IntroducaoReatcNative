import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './Pages/Feed';
import Header from './Components/Header';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer backgroundColor="transparent" translucent>
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{
            headerTitle: () => <Header />,
            headerStyle: {
              backgroundColor: '#f5f5f5',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
