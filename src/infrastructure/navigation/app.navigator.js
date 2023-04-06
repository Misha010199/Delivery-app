import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HomeNavigator } from "./home.navigator";

import { SettingsNavigator } from "./settings.navigator";

import { colors } from "../../infrastructure/theme/colors";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
 Home:"md-home",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
 
    
      
       
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: colors.brand.primary,
              inactiveTintColor: colors.brand.muted,
            }}
          >
            
           
            
            <Tab.Screen name="Settings" component={SettingsNavigator} />
            <Tab.Screen name="Home" component={HomeNavigator} />
          </Tab.Navigator>
        
      
   
  
);