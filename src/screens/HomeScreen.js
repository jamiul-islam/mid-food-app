import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { RestaurantCard } from "../components/RestaurantCard";
import { restaurantData } from "../data/restaurantData";
import { useTheme } from "../context/ThemeContext";

export const HomeScreen = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={restaurantData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RestaurantCard
            restaurant={item}
            onPress={() =>
              navigation.navigate("Menu", {
                restaurantId: item.id,
              })
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
