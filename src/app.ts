// src/app.ts
import Fastify from 'fastify';
import swagger from './plugins/swagger';
import weatherRoutes from './routes/v1/weather';

export async function buildApp() {
  const app = Fastify({ logger: true });

  // Register plugins
  await app.register(swagger);

  // Register routes
  await app.register(weatherRoutes, { prefix: '/v1/weather' });

  return app;
}

export async function startServer() {
  const app = await buildApp();
  const port = parseInt(process.env.PORT || '3000', 10);
  await app.listen({ port });
  console.log(`🚀 Server listening on http://localhost:${port}`);
}
