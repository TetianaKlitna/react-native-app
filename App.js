import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goal, setGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };
  const addGoalHandler = () => {
    if (goal.trim() === '') return;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goal, id: Math.random().toString() },
    ]);
    setGoal('');
  };
  return (
    <View style={styles.appContainer}>
      <GoalInput
        goal={goal}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
