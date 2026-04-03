import React from 'react';
import { Text, StyleSheet } from 'react-native';
import ScreenScaffold from '../scaffolds/ScreenScaffold';
import { useThemeStore } from '../store/useThemeStore';

export default function Index() {
  const { getColors } = useThemeStore();
  const colors = getColors();

  return (
    <ScreenScaffold title="ForgeCubes">
      <Text style={[styles.text, { color: colors.text }]}>
        Welcome to ForgeCubes!
      </Text>
    </ScreenScaffold>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 16,
    fontSize: 16,
  },
});
