import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenScaffoldProps extends ViewProps {
  title: string;
  headerRight?: () => React.ReactNode;
  headerLeft?: () => React.ReactNode;
  children: React.ReactNode;
  hideHeader?: boolean;
}

const ScreenScaffold: React.FC<ScreenScaffoldProps> = ({
  title,
  headerRight,
  headerLeft,
  children,
  hideHeader = false,
  style,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title,
          headerShown: !hideHeader,
          headerRight,
          headerLeft,
          headerStyle: { backgroundColor: '#ffffff' },
          headerTitleStyle: { color: '#1f2328', fontWeight: '600' },
          headerTintColor: '#0969da',
        }}
      />
      <SafeAreaView edges={['bottom', 'left', 'right']} style={[styles.content, style]} {...props}>
        {children}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
  },
});

export default ScreenScaffold;
