import fp from 'fastify-plugin';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';

export default fp(async function (fastify) {
  await fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Fastify API',
        version: '1.0.0'
      }
    }
  });

  await fastify.register(fastifySwaggerUI, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false
    }
  });

  fastify.addHook('onReady', async () => {
    await fastify.swagger();
  });
});
