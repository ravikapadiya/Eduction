/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {

  StyleSheet
} from 'react-native';
import About from "./src/screen/About";
import Contact from "./src/screen/Contact";
import Course from "./src/screen/Course";
import CourseDetails from "./src/screen/CourseDetails";
import HomeScreen from "./src/screen/HomeScreen";
import UserData from "./src/screen/UserData";

const Stack = createStackNavigator();
function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' options={{ headerShown: false }}>
          {(props) => <HomeScreen {...props} channelname={'Online Education'} />}
        </Stack.Screen>
        <Stack.Screen name='About' component={About} options={{
          headerTitleStyle: {
            fontSize: 25
          },
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name='Contact' component={Contact} options={{
          headerTitleStyle: {
            fontSize: 25
          },
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name='Course' component={Course} options={{
          headerTitleStyle: {
            fontSize: 25
          },
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name='Student' component={UserData} options={{
          headerTitleStyle: {
            fontSize: 25
          },
          headerTitle: "Students Data",
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name='CourseDetails' component={CourseDetails} options={{
          headerTitleStyle: {
            fontSize: 25
          },
          headerTitle: "Course Details",
          headerTitleAlign: 'center'
        }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
