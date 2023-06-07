import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Title } from '../components/ui/Title';
import { useEffect, useMemo, useState } from 'react';
import { NumberContainer } from '../components/game/NumberContainer';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Card } from '../components/ui/Card';
import { InstructionText } from '../components/game/InstructionText';
import { GuessLogItem } from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = useMemo(
    () => generateRandomBetween(minBoundary, maxBoundary, userNumber),
    []
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greated' && currentGuess > userNumber)
    ) {
      Alert.alert('Dont lie!', 'You know that this is wrong...', [
        { text: 'Sorry', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newNumber);
    setGuessRounds((rounds) => [newNumber, ...rounds]);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponnet's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name='md-remove' size='24' color='white' />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name='md-add' size='24' color='white' />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <ScrollView style={styles.logsContainer}>
        {guessRounds.map((guess, index) => (
          <GuessLogItem
            key={guess}
            roundNumber={guessRounds.length - index}
            guess={guess}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  logsContainer: {
    flex: 1,
    padding: 16,
  },
});
