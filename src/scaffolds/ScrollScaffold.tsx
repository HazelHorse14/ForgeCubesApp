import React from 'react';
import { ScrollView, RefreshControl, StyleSheet, ScrollViewProps } from 'react-native';
import ScreenScaffold from './ScreenScaffold';

interface ScrollScaffoldProps extends ScrollViewProps {
  title: string;
  onRefresh?: () => void;
  refreshing?: boolean;
  children: React.ReactNode;
  headerRight?: () => React.ReactNode;
}

const ScrollScaffold: React.FC<ScrollScaffoldProps> = ({
  title,
  onRefresh,
  refreshing = false,
  children,
  headerRight,
  style,
  ...props
}) => {
  return (
    <ScreenScaffold title={title} headerRight={headerRight}>
      <ScrollView
        style={[styles.scroll, style]}
        refreshControl={
          onRefresh ? (
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="#0969da"
              colors={['#0969da']}
            />
          ) : undefined
        }
        {...props}
      >
        {children}
      </ScrollView>
    </ScreenScaffold>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
});

export default ScrollScaffold;
