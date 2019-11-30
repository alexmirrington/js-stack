import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes';

// Load environment
dotenv.config();
const {
    MONGO_USERNAME: usr,
    MONGO_PASSWORD: pwd,
    MONGO_HOST: host,
    MONGO_PORT: port,
    MONGO_DATABASE: db
} = process.env;

// Connect to database
mongoose.connect(
    `mongodb://${usr}:${pwd}@${host}:${port}/${db}?authSource=admin`,
    { useNewUrlParser: true, useUnifiedTopology: true},
    err => {
        if (err) throw err;
        console.log(`Connected to database ${host}:${port}/${db}`);
    }
).catch(err => {
    console.log(`Failed to connect to database ${host}:${port}/${db}`);
    console.error(err);
});

// Express configuration
const app = express();
app.set('port', process.env.PORT || 3000);
app.use('/', routes);

export default app;
