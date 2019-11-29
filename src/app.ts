import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript!');
});

export default app;
