type LogLevel = 'info' | 'warn' | 'error' | 'debug';

const colors = {
  reset: '\x1b[0m',
  info: '\x1b[36m', // Cyan
  warn: '\x1b[33m', // Yellow
  error: '\x1b[31m', // Red
  debug: '\x1b[35m', // Magenta
  dim: '\x1b[2m',
  bold: '\x1b[1m',
};

function formatMessage(level: LogLevel, message: string, meta?: unknown): string {
  const timestamp = new Date().toISOString();
  const color = colors[level];
  const tag = `[${level.toUpperCase()}]`.padEnd(7);
  return `${colors.dim}${timestamp}${colors.reset} ${color}${colors.bold}${tag}${colors.reset} ${message}`;
}

export const logger = {
  info: (message: string, meta?: unknown) => {
    console.log(formatMessage('info', message), meta !== undefined ? meta : '');
  },
  warn: (message: string, meta?: unknown) => {
    console.warn(formatMessage('warn', message), meta !== undefined ? meta : '');
  },
  error: (message: string, meta?: unknown) => {
    console.error(formatMessage('error', message), meta !== undefined ? meta : '');
  },
  debug: (message: string, meta?: unknown) => {
    if (process.env.NODE_ENV !== 'production') {
      console.debug(formatMessage('debug', message), meta !== undefined ? meta : '');
    }
  },
};
