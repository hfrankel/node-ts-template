import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
// e.g. import userRoutes from './routes/user.routes';

const app: Application = express();

// Middlewares
app.use(helmet()); // Increase HTTP Header Security [blog.bitsrc.io](https://blog.bitsrc.io/5-express-middleware-libraries-every-developer-should-know-94e2728f7503)
app.use(cors()); // Enable CORS [blog.bitsrc.io](https://blog.bitsrc.io/5-express-middleware-libraries-every-developer-should-know-94e2728f7503)
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Routes
// e.g. app.use('/api/users', userRoutes);

// Default route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, welcome to the backend!');
});

export default app;
