import { View, Text, StyleSheet } from 'react-native';

const GoalItem = ({ text }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#6214c7ff',
  },
  goalText: {
    color: 'white',
  },
});

export default GoalItem;
