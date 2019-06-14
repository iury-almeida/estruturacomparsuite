'use strict';

import Path from 'path';

let config_api = {
  env: process.env.NODE_ENV,
  root: Path.normalize(Path.join(__dirname, '/../../..')),
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 6000,

  mysql: {
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
    host: process.env.MYSQL_HOST,
    pool: {
      min: process.env.MYSQL_POOL_MIN || 1,
      max: process.env.MYSQL_POOL_MAX || 5,
      idle: process.env.MYSQL_POOL_IDLE || 10000
    },
    write: {
      host: process.env.MYSQL_WRITE_HOST
    },
    read: [
      { host: process.env.MYSQL_READ_HOST_1 },
      { host: process.env.MYSQL_READ_HOST_2 },
      { host: process.env.MYSQL_READ_HOST_3 },
      { host: process.env.MYSQL_READ_HOST_4 },
      { host: process.env.MYSQL_READ_HOST_5 }
    ]
  },
  sentry: {
    dsn: process.env.SENTRY_DSN
  }
};

export default config_api;
