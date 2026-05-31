import express from 'express';
import compression from 'compression';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import { fileURLToPath } from 'url';

import { ENV } from './config/env.js';
import connectDB from './config/mongodb.js';
import { securityMiddlewares } from './middlewares/security.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
import logger from './logs/winston.js';

import userRouter from './routes/userRoutes.js';
import aiRouter from './routes/aiRoutes.js';
import studioRouter from './routes/studioRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Security Middlewares & Parsers
app.use(securityMiddlewares);
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(compression());

// Connect DB
await connectDB();

// Swagger Documentation
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api/user', userRouter);
app.use('/api/ai', aiRouter);
app.use('/api/studio', studioRouter);

// Health check endpoints
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', database: 'connected' });
});

app.get('/ready', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Ready to accept requests' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('ScribbleAI API is running...');
});

// Handle unhandled routes
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

// Graceful Shutdown
const server = app.listen(ENV.PORT, () => {
  logger.info(`Server is running on port ${ENV.PORT}`);
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    logger.info('HTTP server closed');
  });
});
