'use strict';

import './config/environment';
import Express from 'express';
import Dotenv from 'dotenv';

Dotenv.config({ path: '.env-development' });

const Server = Express();

Server.get('/', (req, res) => res.send(new Date()));

Server.use(Express.urlencoded({ extended: false }));

Server.listen(process.env.API_PORT, () =>
  console.log(`Aplicação rodando na porta ${process.env.API_PORT}!`)
);
