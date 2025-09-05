import { useState, useEffect, useCallback, useRef } from 'react';

interface UseInfiniteScrollOptions<T> {
  items: T[];
  itemsPerPage?: number;
  hasMore?: boolean;
  onLoadMore?: () => void;
  threshold?: number;
}

interface UseInfiniteScrollReturn<T> {
  displayedItems: T[];
  isLoading: boolean;
  hasMore: boolean;
  loadMore: () => void;
  observerRef: (node: HTMLDivElement | null) => void;
}

export function useInfiniteScroll<T>({
  items,
  itemsPerPage = 20,
  hasMore = true,
  onLoadMore,
  threshold = 0.1,
}: UseInfiniteScrollOptions<T>): UseInfiniteScrollReturn<T> {
  const [displayedItems, setDisplayedItems] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const observer = useRef<IntersectionObserver | null>(null);

  // Reset when items change
  useEffect(() => {
    setDisplayedItems(items.slice(0, itemsPerPage));
    setCurrentPage(1);
  }, [items, itemsPerPage]);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const nextPage = currentPage + 1;
    const startIndex = 0;
    const endIndex = nextPage * itemsPerPage;
    const newItems = items.slice(startIndex, endIndex);

    setDisplayedItems(newItems);
    setCurrentPage(nextPage);
    setIsLoading(false);

    // Call external load more function if provided
    if (onLoadMore) {
      onLoadMore();
    }
  }, [currentPage, items, itemsPerPage, isLoading, hasMore, onLoadMore]);

  const observerRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            loadMore();
          }
        },
        {
          threshold,
        }
      );
      
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore, loadMore, threshold]
  );

  // Check if there are more items to load
  const hasMoreItems = displayedItems.length < items.length;

  return {
    displayedItems,
    isLoading,
    hasMore: hasMoreItems,
    loadMore,
    observerRef,
  };
}
