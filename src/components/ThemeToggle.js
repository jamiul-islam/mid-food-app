import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <TouchableOpacity style={styles.button} onPress={toggleTheme}>
      <Text style={styles.text}>{isDark ? "🌙" : "☀"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
