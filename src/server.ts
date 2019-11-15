import express, { Application, Request, Response, NextFunction} from 'express';

const server: Application = express();
const port: number = 5000

server.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello, world!');
})

server.listen(port, () => console.log(`Server running on port ${port}`));