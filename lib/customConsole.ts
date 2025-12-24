// lib/customcustomeConsole.ts

// Determine if dev mode is enabled based on the environment variable.
// For Next.js, client-side environment variables must be prefixed with NEXT_PUBLIC_.
// Ensure your .env file has a variable like NEXT_PUBLIC_DEV_MODE=true or DEV_MODE=true
// and handle both cases for flexibility.
const isDevMode =
  process.env.NEXT_PUBLIC_DEV_MODE === 'true' || process.env.DEV_MODE === 'true';

type ConsoleMethod = (...args: any[]) => void;

interface CustomConsole {
  log: ConsoleMethod;
  warn: ConsoleMethod;
  error: ConsoleMethod;
  info: ConsoleMethod;
  debug: ConsoleMethod;
  // Add other console methods as needed
}

const customConsole: CustomConsole = {
  log: (...args: any[]) => {
    if (isDevMode) {
      console.log('[DEV LOG]', ...args);
    }
  },
  warn: (...args: any[]) => {
    if (isDevMode) {
      console.warn('[DEV WARN]', ...args);
    }
  },
  error: (...args: any[]) => {
    if (isDevMode) {
      console.error('[DEV ERROR]', ...args);
    }
  },
  info: (...args: any[]) => {
    if (isDevMode) {
      console.info('[DEV INFO]', ...args);
    }
  },
  debug: (...args: any[]) => {
    if (isDevMode) {
      console.debug('[DEV DEBUG]', ...args);
    }
  },
  // Implement other methods similarly
};

export default customConsole;