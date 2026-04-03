import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';

interface EmptyStateProps {
  message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message = 'No data available' }) => {
  return (
    <View style={styles.container}>
      <Octicons name="search" size={48} color="#8c959f" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    opacity: 0.6,
  },
  text: {
    marginTop: 16,
    fontSize: 14,
    color: '#8c959f',
    textAlign: 'center',
  },
});

export default EmptyState;
