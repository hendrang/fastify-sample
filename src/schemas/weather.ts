export const weatherForecastSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      date: { type: 'string', format: 'date' },
      temperatureC: { type: 'number' },
      summary: { type: 'string' }
    },
    required: ['date', 'temperatureC', 'summary']
  }
};

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  summary: string;
}