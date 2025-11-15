import { Fragment, useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(goal) {
    if (goal.trim() === '') return;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goal, id: new Date().getTime().toString() },
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  function startAddGoalHandler() {
    setModalIsVisible(true);
  };

  function endAddGoalHandler() {
    setModalIsVisible(false);
  };

  return (
    <Fragment>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add Goal" onPress={startAddGoalHandler} color="#6214c7ff"></Button>
        {modalIsVisible &&
          (<GoalInput
            visible={modalIsVisible}
            addGoalHandler={addGoalHandler}
            cancelGoalHandler={endAddGoalHandler}
          />)
        }
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteItem={deleteGoalHandler} />;
            }}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#976eccff',
  },
  goalsContainer: {
    flex: 5,
  },
});
