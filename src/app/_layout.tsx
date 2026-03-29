import { ApolloProvider } from '@apollo/client/react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';
import { githubClient, getGithubToken, setTokenRef } from '@/lib/github-apollo';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // Load persisted GitHub token into the Apollo auth-link on startup.
  useEffect(() => {
    getGithubToken().then(setTokenRef);
  }, []);

  return (
    <ApolloProvider client={githubClient}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AnimatedSplashOverlay />
        <AppTabs />
      </ThemeProvider>
    </ApolloProvider>
  );
}
