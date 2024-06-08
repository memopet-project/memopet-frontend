import { useCallback, useEffect, useState } from 'react';

type TUseIntersectionObserverProps = {
  threshold: number;
  hasNextPage: boolean;
  fetchNextPage: () => void;
};

export const useIntersectionObserver = ({
                                          threshold = 0.5,
                                          hasNextPage,
                                          fetchNextPage,
                                        }: TUseIntersectionObserverProps) => {

  const [target, setTarget] = useState<Element | null>(null);

  const observerCallback: IntersectionObserverCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
  }, [fetchNextPage, hasNextPage]);

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(observerCallback, { threshold });

    observer.observe(target);

    return () => observer.unobserve(target);

  }, [observerCallback, threshold, target]);

  return { setTarget };
};
