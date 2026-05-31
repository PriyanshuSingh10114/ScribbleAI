import request from 'supertest';
import express from 'express';
import compression from 'compression';

// Create a small app instance for testing health check without connecting to DB
const app = express();
app.use(express.json());
app.use(compression());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', database: 'connected' });
});

app.get('/ready', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Ready to accept requests' });
});

describe('Health & Readiness Checks', () => {
  it('should return 200 OK for /health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('ok');
  });

  it('should return 200 OK for /ready', async () => {
    const res = await request(app).get('/ready');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('ok');
  });
});
