import React, { useCallback, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View, Text } from 'react-native';
import ScreenScaffold from './ScreenScaffold';
import Loading from '../components/common/Loading';
import EmptyState from '../components/common/EmptyState';
import ErrorView from '../components/common/ErrorView';
import { ListPayload } from '../types/scaffold';

interface InfiniteListScaffoldProps<T, K> {
  title: string;
  fetch: (cursor: K | null) => Promise<ListPayload<T, K>>;
  renderItem: ({ item, index }: { item: T; index: number }) => React.ReactElement | null;
  headerRight?: () => React.ReactNode;
  keyExtractor: (item: T, index: number) => string;
  onRefresh?: () => void;
  emptyMessage?: string;
  ItemSeparatorComponent?: React.ComponentType<any>;
}

function InfiniteListScaffold<T, K>({
  title,
  fetch,
  renderItem,
  headerRight,
  keyExtractor,
  onRefresh,
  emptyMessage,
  ItemSeparatorComponent,
}: InfiniteListScaffoldProps<T, K>) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cursor, setCursor] = useState<K | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const loadData = useCallback(async (isRefresh = false) => {
    if (loading || (loadingMore && !isRefresh)) return;

    if (isRefresh) {
      setLoading(true);
    } else {
      setLoadingMore(true);
    }
    setError(null);

    try {
      const currentCursor = isRefresh ? null : cursor;
      const result = await fetch(currentCursor);
      
      setItems((prev) => (isRefresh ? result.items : [...prev, ...result.items]));
      setCursor(result.cursor);
      setHasMore(result.hasMore);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [cursor, loading, loadingMore, fetch]);

  const handleRefresh = useCallback(() => {
    loadData(true);
    onRefresh?.();
  }, [loadData, onRefresh]);

  const handleEndReached = useCallback(() => {
    if (hasMore && !loading && !loadingMore && !error) {
      loadData(false);
    }
  }, [hasMore, loading, loadingMore, error, loadData]);

  // Initial load
  React.useEffect(() => {
    loadData(true);
  }, []);

  const renderFooter = () => {
    if (loadingMore) return <Loading more />;
    return <View style={styles.footer} />;
  };

  const renderContent = () => {
    if (loading && items.length === 0) {
      return <Loading />;
    }

    if (error && items.length === 0) {
      return <ErrorView message={error} onRetry={() => loadData(true)} />;
    }

    if (items.length === 0) {
      return <EmptyState message={emptyMessage} />;
    }

    return (
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={ItemSeparatorComponent || (() => <View style={styles.separator} />)}
        ListFooterComponent={renderFooter}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={handleRefresh}
            tintColor="#0969da"
            colors={['#0969da']}
          />
        }
      />
    );
  };

  return (
    <ScreenScaffold title={title} headerRight={headerRight}>
      {renderContent()}
    </ScreenScaffold>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#d0d7de',
  },
  footer: {
    height: 32,
  },
});

export default InfiniteListScaffold;
