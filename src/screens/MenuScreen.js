import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useTheme } from "../context/ThemeContext";
import { menuData } from "../data/menuData";

export const MenuScreen = ({ route }) => {
  const { theme } = useTheme();
  const { restaurantId } = route.params;
  const restaurant = menuData.find((r) => r.restaurantId === restaurantId);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={restaurant.items}
        keyExtractor={(item) => item.title}
        renderItem={({ item: category }) => (
          <View style={styles.categoryContainer}>
            <Text style={[styles.categoryTitle, { color: theme.text }]}>
              {category.title}
            </Text>
            <FlatList
              data={category.contents}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.menuItem, { backgroundColor: theme.card }]}
                  onPress={() =>
                    Alert.alert("Add to Cart", `Add ${item.title} to cart?`)
                  }
                >
                  <View style={styles.menuInfo}>
                    <Text style={[styles.menuTitle, { color: theme.text }]}>
                      {item.title}
                    </Text>
                    <Text style={[styles.menuPrice, { color: theme.primary }]}>
                      {item.price}
                    </Text>
                  </View>
                  <Image source={item.imagePath} style={styles.menuImage} />
                </TouchableOpacity>
              )}
            />
          </View>
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
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuInfo: {
    flex: 1,
    marginRight: 10,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  menuPrice: {
    fontSize: 16,
    marginTop: 4,
  },
  menuImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});
