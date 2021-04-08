import React from 'react'
//Components
import Menu from './Menu/Menu';
import PickUp from './PickUp';
//Navigations
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

//Navigators
const Tab = createBottomTabNavigator();
const MenuStack = createStackNavigator();

function MenuScreen() { 
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name='Menu' component={Menu} options={{headerShown: false}}/>
      <MenuStack.Screen name='PickUp' component={PickUp} options={ {title: 'Select a restaurant'}}/>
    </MenuStack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Menu"
      tabBarOptions={{
        activeTintColor: '#E60E33',
        inactiveTintColor: 'gray'
      }}
    >
      {/* MENU SCREEN */}
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarBadge: '3',
          tabBarIcon: ({ color }) => (
            <Icon
              name='utensils'
              type='font-awesome-5'
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Main() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Main;
