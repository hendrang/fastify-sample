import { FastifyInstance } from 'fastify';
import { WeatherForecastController } from '../../controllers/WeatherForecastController';
import { weatherForecastRoute } from '../../swagger/weather';  // Import the swagger metadata

export default async function weatherRoutes(app: FastifyInstance) {
  app.get(
    '/',
    {
      schema: weatherForecastRoute.schema,  // Use the schema from the swagger metadata
    } as any, // Use 'any' to bypass the type error (temporary solution, you can refine types later)
    WeatherForecastController.getForecast  // Using the controller for the business logic
  );
}