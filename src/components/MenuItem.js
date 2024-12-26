export const MenuItem = ({ item, onPress }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.menuItem, { backgroundColor: theme.card }]}
      onPress={() => onPress(item)}
    >
      <View style={styles.menuInfo}>
        <Text style={[styles.menuTitle, { color: theme.text }]}>
          {item.title}
        </Text>
        <Text style={[styles.menuPrice, { color: theme.primary }]}>
          ${item.price.toFixed(2)}
        </Text>
      </View>
      <Image source={item.image} style={styles.menuImage} />
    </TouchableOpacity>
  );
};
