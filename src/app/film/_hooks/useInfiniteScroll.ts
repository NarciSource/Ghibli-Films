import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface Options {
  loading: boolean;
  hasMore: boolean;
  onLoadMore: () => Promise<any>;
  rootMargin?: string;
}

export function useInfiniteScroll({ loading, hasMore, onLoadMore, rootMargin = '200px' }: Options) {
  // 무한스크롤 트리거
  const { ref, inView } = useInView({
    root: null, // 스크린 기준
    rootMargin, // 뷰박스
    triggerOnce: false, // 무한스크롤
  });
  const loadingMoreRef = useRef(false); //fetchMore 중복 호출 방지

  // 무한 스크롤 트리거로 재패칭
  useEffect(() => {
    if (loading) return;
    if (!hasMore) return; // 페이지 끝일 때
    if (!inView) return; // 아직 화면에 안 들어왔을 때

    if (loadingMoreRef.current) return; // fetchMore 중복 호출 방지
    loadingMoreRef.current = true;

    onLoadMore().finally(() => {
      loadingMoreRef.current = false;
    });
  }, [inView, loading, hasMore, onLoadMore]);

  return { ref };
}
