import express from 'express';
import erroMiddleware from './middleware/errorMiddleware';
import router from './route';

const app = express();

app.use(express.json());
app.use(router);
app.use(erroMiddleware);
export default app;
