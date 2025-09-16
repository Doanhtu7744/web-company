import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GameScreen = () => {
  const [score, setScore] = useState(0);

  const handleStart = () => alert('Game Started!');
  const handlePause = () => alert('Game Paused!');
  const handleReset = () => { setScore(0); alert('Reset!'); };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Screen</Text>
      <Text>Score: {score}</Text>
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePause}>
        <Text>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  button: { backgroundColor: '#4a90e2', padding: 10, margin: 10, borderRadius: 5 },
});

export default GameScreen;