const isProduction = process.env.NODE_ENV === 'production';

export const logger = {
  log: (...args: any[]) => {
    if (!isProduction) {
      console.log('[LOG]', ...args);
    }
  },
  error: (...args: any[]) => {
    console.error('[ERROR]', ...args);
    // Here you could integrate Sentry or other error tracking
  },
  warn: (...args: any[]) => {
    if (!isProduction) {
      console.warn('[WARN]', ...args);
    }
  },
};
