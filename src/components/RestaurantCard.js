import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../context/ThemeContext";

export const RestaurantCard = ({ restaurant, onPress }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.card }]}
      onPress={onPress}
    >
      <Image source={restaurant.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={[styles.title, { color: theme.text }]}>
          {restaurant.title}
        </Text>
        <Text style={[styles.tagline, { color: theme.text }]}>
          {restaurant.tagline}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.eta}>{restaurant.eta} mins</Text>
          <Text
            style={[
              styles.status,
              {
                color: restaurant.openStatus ? "#4CAF50" : "#F44336",
              },
            ]}
          >
            {restaurant.openStatus ? "Open Now!" : "Closed"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    height: 150,
    width: "100%",
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tagline: {
    fontSize: 14,
    marginVertical: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  eta: {
    fontSize: 12,
    color: "#757575",
  },
  status: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
