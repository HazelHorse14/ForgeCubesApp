import React from 'react';
import { Text, StyleSheet } from 'react-native';
import ScreenScaffold from '../scaffolds/ScreenScaffold';
import { useThemeStore } from '../store/useThemeStore';

export default function Explore() {
  const { getColors } = useThemeStore();
  const colors = getColors();

  return (
    <ScreenScaffold title="Explore">
      <Text style={[styles.text, { color: colors.text }]}>
        Explore the ForgeCubes world.
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
