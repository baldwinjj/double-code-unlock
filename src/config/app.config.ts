export default () => ({
  environment: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 27017,
    database: process.env.DATABASE_NAME,
  },
  unlockTimespan: parseInt(process.env.UNLOCK_TIMESPAN, 10) || 120000, // default 2 minutes
});
