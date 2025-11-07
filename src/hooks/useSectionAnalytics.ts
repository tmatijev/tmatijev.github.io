import { useEffect } from 'react';
import { pageview } from '../utils/analytics';

type UseSectionAnalyticsOptions = {
  threshold?: number;
};

export const useSectionAnalytics = (
  sectionIds: string[],
  { threshold = 0.6 }: UseSectionAnalyticsOptions = {}
) => {
  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (!seen.has(id)) {
              seen.add(id);
              pageview(`#${id}`);
            }
          }
        });
      },
      { threshold }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, threshold]);
};


