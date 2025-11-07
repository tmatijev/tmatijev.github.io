export const pageview = (path: string, title?: string) => {
  // @ts-ignore
  window.gtag?.('event', 'page_view', {
    page_title: title || document.title,
    page_location: location.href,
    page_path: path,
  });
};

export const event = (name: string, params?: Record<string, string | number | boolean>) => {
  // @ts-ignore
  window.gtag?.('event', name, params || {});
};


