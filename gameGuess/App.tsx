import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';

const App = () => {
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('Enter your guess!');
  const [guessCount, setGuessCount] = useState(0);

  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);
    setGuessCount(guessCount + 1);

    if (isNaN(userGuess)) {
      setFeedback('Please enter a valid number!');
    } else if (userGuess < secretNumber) {
      setFeedback('Too low! Try again.');
    } else if (userGuess > secretNumber) {
      setFeedback('Too high! Try again.');
    } else {
      setFeedback(`Congratulations! You've guessed the correct number!`);
    }
    setGuess('');
  };

  const handleRestart = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setFeedback('Enter your guess!');
    setGuessCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number Guessing Game</Text>
      <Text style={styles.feedback}>{feedback}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
        placeholder="Enter your guess (1-100)"
      />
      <TouchableHighlight style={styles.button} onPress={handleGuess} underlayColor="#ccc">
        <Text style={styles.buttonText}>Submit Guess</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={handleRestart} underlayColor="#ccc">
        <Text style={styles.buttonText}>Restart Game</Text>
      </TouchableHighlight>
      <Text style={styles.count}>Guesses: {guessCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  feedback: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: 200,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  count: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default App;