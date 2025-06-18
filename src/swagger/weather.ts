import { weatherForecastSchema } from '../schemas/weather';

export const weatherForecastRoute = {
  schema: {
    description: 'Get weather forecast',
    tags: ['Weather'],
    response: {
      200: weatherForecastSchema,  // Linking to the schema
    }
  }
};