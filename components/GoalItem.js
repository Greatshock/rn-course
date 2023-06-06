import { StyleSheet, View, Text, Pressable } from 'react-native';

export function GoalItem({ id, text, onDeleteItem }) {
  return (
    <View style={styles.goal}>
      <Pressable
        android_ripple='#210644'
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={onDeleteItem.bind(this, id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goal: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    padding: 8,
    color: '#ffffff',
  },
  pressedItem: {
    opacity: 0.5,
  },
});
