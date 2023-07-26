import express from 'express';
import productsRouter from './routes/products.router.js';
import loggerRouter from './routes/loggers.router.js';
import errorHandler from './middlewares/error.js';
import attachLogger from './middlewares/logger.js';


const app = express();

app.use(express.json());

app.use(attachLogger);

app.use('/api/products', productsRouter);
app.use('/', loggerRouter);

app.use(errorHandler);

app.listen(8080, () => console.log("Listening 8080"));