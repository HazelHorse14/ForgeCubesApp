import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import ScreenScaffold from './ScreenScaffold';

interface TabbedScaffoldProps {
  title: string;
  tabs: string[];
  activeTab: number;
  onTabSwitch: (index: number) => void;
  headerRight?: () => React.ReactNode;
  children: React.ReactNode;
}

const TabbedScaffold: React.FC<TabbedScaffoldProps> = ({
  title,
  tabs,
  activeTab,
  onTabSwitch,
  headerRight,
  children,
}) => {
  return (
    <ScreenScaffold title={title} headerRight={headerRight}>
      <View style={styles.navContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {tabs.map((tab, index) => {
            const isActive = activeTab === index;
            return (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, isActive && styles.activeTab]}
                onPress={() => onTabSwitch(index)}
              >
                <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                  {tab}
                </Text>
                {isActive && <View style={styles.activeIndicator} />}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.content}>
        {children}
      </View>
    </ScreenScaffold>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#d0d7de',
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  tab: {
    paddingVertical: 12,
    marginRight: 24,
    position: 'relative',
  },
  activeTab: {
    // No specific style needed for the tab container when active
  },
  tabText: {
    fontSize: 14,
    color: '#656d76',
    fontWeight: '400',
  },
  activeTabText: {
    color: '#1f2328',
    fontWeight: '600',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#fd8c73', // Primer-like orange indicator
    borderRadius: 1,
  },
  content: {
    flex: 1,
  },
});

export default TabbedScaffold;
