import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen({ username }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, {username}!</Text>
      <Text style={styles.subtitle}>Você fez login com sucesso.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'normal',
  },
});
