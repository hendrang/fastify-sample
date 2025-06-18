import { WeatherForecast } from '../schemas/weather';

export class WeatherForecastController {
  static async getForecast() {
    const forecast: WeatherForecast[] = [
      {
        date: '2025-06-18',
        temperatureC: 25,
        summary: 'Sunny'
      },
      {
        date: '2025-06-19',
        temperatureC: 28,
        summary: 'Hot'
      },
    ];

    return forecast;
  }
}