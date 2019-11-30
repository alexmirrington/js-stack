import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { MongoError } from 'mongodb';

dotenv.config();

const {
    MONGO_USERNAME: usr,
    MONGO_PASSWORD: pwd,
    MONGO_HOST: host,
    MONGO_PORT: port,
    MONGO_DATABASE: db
} = process.env;

mongoose.connect(
    `mongodb://${usr}:${pwd}@${host}:${port}/${db}?authSource=admin`,
    { useNewUrlParser: true, useUnifiedTopology: true},
    (err: MongoError) => {
        if (err) throw err;
        console.log(`Connected to database ${host}:${port}/${db}`);
    }
).catch((err) => {
    console.log(`Failed to connect to database ${host}:${port}/${db}`);
    console.error(err);
});

const app: Application = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript!');
});

export default app;
