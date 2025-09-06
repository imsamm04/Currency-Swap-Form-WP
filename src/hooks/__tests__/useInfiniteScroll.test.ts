import { renderHook, act } from '@testing-library/react';
import { useInfiniteScroll } from '../useInfiniteScroll';

describe('useInfiniteScroll', () => {
  const items = Array.from({ length: 50 }, (_, i) => i + 1);

  it('should initialize with first page of items', () => {
    const { result } = renderHook(() => useInfiniteScroll({ items, itemsPerPage: 10 }));
    expect(result.current.displayedItems.length).toBe(10);
    expect(result.current.hasMore).toBe(true);
  });

  it('should load more items when loadMore is called', async () => {
    const { result } = renderHook(() => useInfiniteScroll({ items, itemsPerPage: 10 }));
    await act(async () => {
      await result.current.loadMore();
    });
    expect(result.current.displayedItems.length).toBe(20);
  });
});
