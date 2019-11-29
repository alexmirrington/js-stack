import app from './app';

const port = app.get('port')
const server = app.listen(port, () => console.log(`Server running on port ${port}`));

export default server;