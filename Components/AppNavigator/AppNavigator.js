import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../Pages/Home";
import Friends from "../Pages/Friends";
import Profile from "../Pages/Profile";
import Search from "../Pages/Search";
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={35}
              color={focused ? "blue" : "#272727"}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              name={focused ? "people-sharp" : "people-outline"}
              size={35}
              color={focused ? "blue" : "#272727"}
            />
          ),
        }}
        name="Friends"
        component={Friends}
      />
      <Tab.Screen
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={35}
              color={focused ? "blue" : "#272727"}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={35}
              color={focused ? "blue" : "#272727"}
            />
          ),
        }}
        name="Search"
        component={Search}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
