import bodyParser from 'body-parser';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';

import schema from './graphql';
import { database } from '../config';

let port = 8080; // process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI || database, { useMongoClient: true });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));
app.use('/graphql', graphqlHTTP(() => ({ schema, pretty: true, graphiql: true })));

app.listen(port, () => console.info(`Express server running on: 127.0.0.1:${ port }`));