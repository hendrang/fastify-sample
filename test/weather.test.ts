import { buildApp } from '../src/app';
import { afterAll, beforeAll, describe, expect, it } from '@jest/globals';
import { FastifyInstance } from 'fastify';

let app: FastifyInstance;

beforeAll(async () => {
  app = await buildApp();
});

afterAll(async () => {
  await app.close();
});

describe('GET /v1/weather', () => {
  it('should return weather data', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/v1/weather'
    });
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.json())).toBe(true);
  });
});
