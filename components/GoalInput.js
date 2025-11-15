import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';
import { useState } from 'react';

const GoalInput = ({ visible, addGoalHandler, cancelGoalHandler }) => {
  const [goal, setGoal] = useState('');
  function goalInputHandler() {
    addGoalHandler(goal);
    setGoal('');
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/img/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          value={goal}
          onChangeText={setGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelGoalHandler} color="#f31f31ff"/>
          </View>
          <View style={styles.button}>
            <Button title="Add goal" onPress={goalInputHandler} color="#6214c7ff" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#311b6bff',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438ff',
    borderRadius: 6,
    width: '100%',
    padding: 16, 
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 18,
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
