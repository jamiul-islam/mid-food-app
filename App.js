/**
 * RESTAURANT APP
 * Developed by: Jamiul Islam
 *
 * This file represents the entry point for the restaurant app.
 * It has been thoroughly refactored and redesigned for scalability,
 * maintainability, and production-grade quality.
 *
 * Key Steps Followed in Refactoring:
 * 1. Implemented a clean and professional folder architecture for future scaling.
 * 2. Replaced poorly structured code with modularized components and contexts.
 * 3. Integrated a ThemeProvider to support light and dark themes.
 * 4. Enhanced navigation by utilizing React Navigation's stack navigator.
 * 5. Added context-driven dynamic header styles based on theme selection.
 * 6. Encapsulated reusable components like `ThemeToggle` for better code reuse.
 * 7. Ensured compliance with clean code principles:
 *    - Separation of concerns
 *    - Readable and maintainable code
 *    - Consistent coding standards.
 *
 * The current version is prepared for further enhancements without
 * compromising the codebase quality.
 *
 * TODO:
 * 1. added reactReanimated for theming - done
 * 2. added MenuScreen component to display restaurant menu - done
 * 3. integrated menuData from data folder into MenuScreen - done
 * 4. implemented navigation using React Navigation - done
 * 5. added styles for consistent UI across components - done
 * 6. added dynamic header styles based on theme selection - done
 *
 * UI Inspirations: Foodpanda
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { MenuScreen } from "./src/screens/MenuScreen";
import { ThemeProvider, useTheme } from "./src/context/ThemeContext";
import { ThemeToggle } from "./src/components/ThemeToggle";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Restaurants"
            component={HomeScreen}
            options={({ navigation }) => {
              const { isDark } = useTheme();
              return {
                headerRight: () => <ThemeToggle />,
                headerStyle: {
                  backgroundColor: isDark ? "#333" : "#FFF",
                },
                headerTintColor: isDark ? "#FFF" : "#333",
              };
            }}
          />
          <Stack.Screen
            name="Menu"
            component={MenuScreen}
            options={({ route, navigation }) => {
              const { isDark } = useTheme();
              return {
                title: route.params.restaurantName || "Menu",
                headerRight: () => <ThemeToggle />,
                headerStyle: {
                  backgroundColor: isDark ? "#333" : "#FFF",
                },
                headerTintColor: isDark ? "#FFF" : "#333",
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
