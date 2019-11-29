import express, { Application, Request, Response, NextFunction} from 'express';

// TODO: Retrieve from .env
const port: number = 5000;
const app: Application = express();

app.set('port', port);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello, TypeScript!');
});

export default app