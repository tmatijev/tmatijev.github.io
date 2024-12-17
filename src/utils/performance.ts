export const measurePerformance = {
  markStart: (label: string) => {
    if (process.env.NODE_ENV === 'development') {
      performance.mark(`${label}-start`);
    }
  },

  markEnd: (label: string) => {
    if (process.env.NODE_ENV === 'development') {
      performance.mark(`${label}-end`);
      performance.measure(label, `${label}-start`, `${label}-end`);
      
      const measurements = performance.getEntriesByName(label);
      console.log(`${label} took ${measurements[0].duration.toFixed(2)}ms`);
    }
  },

  clearMarks: (label: string) => {
    if (process.env.NODE_ENV === 'development') {
      performance.clearMarks(`${label}-start`);
      performance.clearMarks(`${label}-end`);
      performance.clearMeasures(label);
    }
  }
}; 