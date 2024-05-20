import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {Home, AddNewTask} from '../screens';
const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddNewTask" component={AddNewTask} />
    </Stack.Navigator>
  );
};

export default Navigation;
