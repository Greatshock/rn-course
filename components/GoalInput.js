import { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Button,
  Modal,
  Image,
} from 'react-native';

export function GoalInput({ onAddGoal, visible, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalsInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
    <Modal visible={visible}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          value={enteredGoalText}
          onChangeText={goalsInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' color='#f31282' onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' color='#8b56d0' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
  },
  textInput: {
    marginRight: 8,
    padding: 16,
    width: '100%',
    borderWidth: 1,
    borderColor: '#e0d4ff',
    borderRadius: 6,
    backgroundColor: '#e0d4ff',
    color: '#120438',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
