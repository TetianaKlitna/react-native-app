import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = ({ id, text, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDeleteItem(id)}
        style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#6214c7ff',
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: '#a065ecff',
  }
});

export default GoalItem;
