import log4js from 'log4js';

const level = process.env.NODE_ENV !== 'production'
  ? 'DEBUG'
  : 'INFO';

log4js.configure({
  replaceLog: true,
  appenders: {
    console: {
      type: 'console',
      layout: {
        type: 'pattern',
        pattern: '%[[%d{yyyy-MM-dd hh:mm:ss}] [%p] -%] %m',
      },
    },
  },
  categories: { default: { appenders: ['console'], level } },
});

const logger = log4js.getLogger('console');
export default logger;
