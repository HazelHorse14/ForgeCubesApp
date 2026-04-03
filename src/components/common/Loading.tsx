import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

interface LoadingProps {
  more?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ more }) => {
  return (
    <View style={[styles.container, more && styles.more]}>
      <ActivityIndicator size={more ? 'small' : 'large'} color="#0969da" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  more: {
    paddingVertical: 10,
  },
});

export default Loading;
