import React from 'react';
import renderer from 'react-test-renderer';
import HourlyPanel from '../../../components/weather/HourlyPanel';

const testForecast = [
  {
      "dt": 1639620000,
      "temp": 62.29,
      "feels_like": 61.75,
      "pressure": 1019,
      "humidity": 75,
      "dew_point": 54.28,
      "uvi": 0,
      "clouds": 83,
      "visibility": 10000,
      "wind_speed": 17.49,
      "wind_deg": 167,
      "wind_gust": 38.74,
      "weather": [
          {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
          }
      ],
      "pop": 0
  },
  {
      "dt": 1639623600,
      "temp": 62.15,
      "feels_like": 61.68,
      "pressure": 1019,
      "humidity": 77,
      "dew_point": 54.86,
      "uvi": 0,
      "clouds": 90,
      "visibility": 10000,
      "wind_speed": 16.69,
      "wind_deg": 173,
      "wind_gust": 39.19,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
          }
      ],
      "pop": 0
  },
  {
      "dt": 1639627200,
      "temp": 62.24,
      "feels_like": 61.74,
      "pressure": 1019,
      "humidity": 76,
      "dew_point": 54.59,
      "uvi": 0,
      "clouds": 83,
      "visibility": 10000,
      "wind_speed": 15.19,
      "wind_deg": 178,
      "wind_gust": 38.61,
      "weather": [
          {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
          }
      ],
      "pop": 0
  },
  {
      "dt": 1639630800,
      "temp": 62.29,
      "feels_like": 61.84,
      "pressure": 1019,
      "humidity": 77,
      "dew_point": 55,
      "uvi": 0,
      "clouds": 74,
      "visibility": 10000,
      "wind_speed": 15.14,
      "wind_deg": 178,
      "wind_gust": 38.43,
      "weather": [
          {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
          }
      ],
      "pop": 0
  },
  {
      "dt": 1639634400,
      "temp": 62.71,
      "feels_like": 62.35,
      "pressure": 1018,
      "humidity": 78,
      "dew_point": 55.76,
      "uvi": 0,
      "clouds": 71,
      "visibility": 10000,
      "wind_speed": 15.5,
      "wind_deg": 177,
      "wind_gust": 37.71,
      "weather": [
          {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
          }
      ],
      "pop": 0
  },
  {
      "dt": 1639638000,
      "temp": 62.4,
      "feels_like": 62.15,
      "pressure": 1018,
      "humidity": 81,
      "dew_point": 56.5,
      "uvi": 0,
      "clouds": 96,
      "visibility": 10000,
      "wind_speed": 15.73,
      "wind_deg": 181,
      "wind_gust": 38.83,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
          }
      ],
      "pop": 0
  },
  {
      "dt": 1639641600,
      "temp": 62.46,
      "feels_like": 62.35,
      "pressure": 1018,
      "humidity": 84,
      "dew_point": 57.61,
      "uvi": 0,
      "clouds": 99,
      "visibility": 10000,
      "wind_speed": 16.55,
      "wind_deg": 185,
      "wind_gust": 38.9,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
          }
      ],
      "pop": 0
  },
  {
      "dt": 1639645200,
      "temp": 62.47,
      "feels_like": 62.46,
      "pressure": 1018,
      "humidity": 86,
      "dew_point": 58.26,
      "uvi": 0,
      "clouds": 99,
      "visibility": 10000,
      "wind_speed": 16.15,
      "wind_deg": 187,
      "wind_gust": 38.68,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
          }
      ],
      "pop": 0
  },
  {
      "dt": 1639648800,
      "temp": 62.53,
      "feels_like": 62.56,
      "pressure": 1017,
      "humidity": 87,
      "dew_point": 58.68,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 15.93,
      "wind_deg": 187,
      "wind_gust": 38.86,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
          }
      ],
      "pop": 0
  },
  {
      "dt": 1639652400,
      "temp": 62.67,
      "feels_like": 62.73,
      "pressure": 1017,
      "humidity": 87,
      "dew_point": 58.73,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 15.88,
      "wind_deg": 186,
      "wind_gust": 38.77,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
          }
      ],
      "pop": 0
  },
  {
      "dt": 1639656000,
      "temp": 63.55,
      "feels_like": 63.55,
      "pressure": 1017,
      "humidity": 84,
      "dew_point": 58.62,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 16.37,
      "wind_deg": 185,
      "wind_gust": 38.43,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
          }
      ],
      "pop": 0
  },
  {
      "dt": 1639659600,
      "temp": 64.17,
      "feels_like": 64.09,
      "pressure": 1017,
      "humidity": 81,
      "dew_point": 58.33,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 17,
      "wind_deg": 186,
      "wind_gust": 38.74,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
          }
      ],
      "pop": 0
  },
  {
      "dt": 1639663200,
      "temp": 64.8,
      "feels_like": 64.69,
      "pressure": 1017,
      "humidity": 79,
      "dew_point": 58.14,
      "uvi": 0.1,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 16.93,
      "wind_deg": 187,
      "wind_gust": 38.48,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
          }
      ],
      "pop": 0.01
  },
  {
      "dt": 1639666800,
      "temp": 65.53,
      "feels_like": 65.41,
      "pressure": 1018,
      "humidity": 77,
      "dew_point": 58.14,
      "uvi": 0.37,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 16.53,
      "wind_deg": 190,
      "wind_gust": 37.76,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
          }
      ],
      "pop": 0.06
  },
  {
      "dt": 1639670400,
      "temp": 66.49,
      "feels_like": 66.36,
      "pressure": 1018,
      "humidity": 75,
      "dew_point": 58.35,
      "uvi": 0.92,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 15.88,
      "wind_deg": 194,
      "wind_gust": 36.48,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
          }
      ],
      "pop": 0.13
  },
  {
      "dt": 1639674000,
      "temp": 67.51,
      "feels_like": 67.44,
      "pressure": 1018,
      "humidity": 74,
      "dew_point": 58.82,
      "uvi": 1.37,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 15.68,
      "wind_deg": 199,
      "wind_gust": 35.01,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
          }
      ],
      "pop": 0.28,
      "rain": {
          "1h": 0.12
      }
  },
  {
      "dt": 1639677600,
      "temp": 69.48,
      "feels_like": 69.46,
      "pressure": 1017,
      "humidity": 71,
      "dew_point": 59.68,
      "uvi": 1.56,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 15.37,
      "wind_deg": 209,
      "wind_gust": 32.06,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
          }
      ],
      "pop": 0.38,
      "rain": {
          "1h": 0.25
      }
  },
  {
      "dt": 1639681200,
      "temp": 70.12,
      "feels_like": 70.21,
      "pressure": 1017,
      "humidity": 72,
      "dew_point": 60.71,
      "uvi": 0.56,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 14.29,
      "wind_deg": 216,
      "wind_gust": 28.77,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
          }
      ],
      "pop": 0.79,
      "rain": {
          "1h": 0.55
      }
  },
  {
      "dt": 1639684800,
      "temp": 70,
      "feels_like": 70.12,
      "pressure": 1016,
      "humidity": 73,
      "dew_point": 60.98,
      "uvi": 0.38,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 13.02,
      "wind_deg": 211,
      "wind_gust": 25.86,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
          }
      ],
      "pop": 0.74,
      "rain": {
          "1h": 0.35
      }
  },
  {
      "dt": 1639688400,
      "temp": 69.58,
      "feels_like": 69.82,
      "pressure": 1016,
      "humidity": 76,
      "dew_point": 61.77,
      "uvi": 0.19,
      "clouds": 100,
      "visibility": 9654,
      "wind_speed": 10.33,
      "wind_deg": 206,
      "wind_gust": 23.78,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
          }
      ],
      "pop": 0.74,
      "rain": {
          "1h": 0.61
      }
  },
  {
      "dt": 1639692000,
      "temp": 67.95,
      "feels_like": 68.34,
      "pressure": 1016,
      "humidity": 83,
      "dew_point": 62.65,
      "uvi": 0.01,
      "clouds": 100,
      "visibility": 7378,
      "wind_speed": 8.14,
      "wind_deg": 222,
      "wind_gust": 20.85,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
          }
      ],
      "pop": 0.83,
      "rain": {
          "1h": 0.99
      }
  },
  {
      "dt": 1639695600,
      "temp": 65.91,
      "feels_like": 66.49,
      "pressure": 1017,
      "humidity": 91,
      "dew_point": 63.14,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 6.49,
      "wind_deg": 259,
      "wind_gust": 17.72,
      "weather": [
          {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10n"
          }
      ],
      "pop": 0.92,
      "rain": {
          "1h": 1.2
      }
  },
  {
      "dt": 1639699200,
      "temp": 63.19,
      "feels_like": 63.63,
      "pressure": 1018,
      "humidity": 94,
      "dew_point": 61.3,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 7.31,
      "wind_deg": 317,
      "wind_gust": 13.44,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
          }
      ],
      "pop": 1,
      "rain": {
          "1h": 0.97
      }
  },
  {
      "dt": 1639702800,
      "temp": 60.66,
      "feels_like": 60.8,
      "pressure": 1018,
      "humidity": 93,
      "dew_point": 58.46,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 7.87,
      "wind_deg": 346,
      "wind_gust": 12.35,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
          }
      ],
      "pop": 0.97,
      "rain": {
          "1h": 0.57
      }
  },
  {
      "dt": 1639706400,
      "temp": 60.1,
      "feels_like": 60.13,
      "pressure": 1019,
      "humidity": 92,
      "dew_point": 57.79,
      "uvi": 0,
      "clouds": 100,
      "visibility": 9045,
      "wind_speed": 6.71,
      "wind_deg": 5,
      "wind_gust": 10.74,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
          }
      ],
      "pop": 0.97,
      "rain": {
          "1h": 0.77
      }
  },
  {
      "dt": 1639710000,
      "temp": 59.95,
      "feels_like": 60.03,
      "pressure": 1019,
      "humidity": 93,
      "dew_point": 57.79,
      "uvi": 0,
      "clouds": 100,
      "visibility": 9246,
      "wind_speed": 5.37,
      "wind_deg": 19,
      "wind_gust": 8.05,
      "weather": [
          {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10n"
          }
      ],
      "pop": 0.97,
      "rain": {
          "1h": 1.02
      }
  },
  {
      "dt": 1639713600,
      "temp": 60.13,
      "feels_like": 60.26,
      "pressure": 1018,
      "humidity": 94,
      "dew_point": 58.28,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 4.36,
      "wind_deg": 47,
      "wind_gust": 6.6,
      "weather": [
          {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10n"
          }
      ],
      "pop": 0.97,
      "rain": {
          "1h": 1.02
      }
  },
  {
      "dt": 1639717200,
      "temp": 60.66,
      "feels_like": 60.89,
      "pressure": 1018,
      "humidity": 95,
      "dew_point": 59.07,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 3.27,
      "wind_deg": 75,
      "wind_gust": 5.64,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
          }
      ],
      "pop": 1,
      "rain": {
          "1h": 0.95
      }
  },
  {
      "dt": 1639720800,
      "temp": 60.93,
      "feels_like": 61.18,
      "pressure": 1018,
      "humidity": 95,
      "dew_point": 59.49,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 3.83,
      "wind_deg": 84,
      "wind_gust": 6.8,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
          }
      ],
      "pop": 1,
      "rain": {
          "1h": 0.23
      }
  },
  {
      "dt": 1639724400,
      "temp": 61.34,
      "feels_like": 61.68,
      "pressure": 1018,
      "humidity": 96,
      "dew_point": 60.13,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 2.98,
      "wind_deg": 93,
      "wind_gust": 8.23,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
          }
      ],
      "pop": 1,
      "rain": {
          "1h": 0.17
      }
  },
  {
      "dt": 1639728000,
      "temp": 61.66,
      "feels_like": 62.1,
      "pressure": 1018,
      "humidity": 97,
      "dew_point": 60.76,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 1.34,
      "wind_deg": 83,
      "wind_gust": 9.55,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
          }
      ],
      "pop": 1,
      "rain": {
          "1h": 0.96
      }
  },
  {
      "dt": 1639731600,
      "temp": 61.45,
      "feels_like": 61.9,
      "pressure": 1018,
      "humidity": 98,
      "dew_point": 60.75,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 2.21,
      "wind_deg": 97,
      "wind_gust": 10.67,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
          }
      ],
      "pop": 0.99,
      "rain": {
          "1h": 0.87
      }
  },
  {
      "dt": 1639735200,
      "temp": 61.65,
      "feels_like": 62.11,
      "pressure": 1018,
      "humidity": 98,
      "dew_point": 61.16,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 2.62,
      "wind_deg": 147,
      "wind_gust": 13.29,
      "weather": [
          {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10n"
          }
      ],
      "pop": 0.99,
      "rain": {
          "1h": 1.23
      }
  },
  {
      "dt": 1639738800,
      "temp": 61.95,
      "feels_like": 62.46,
      "pressure": 1018,
      "humidity": 98,
      "dew_point": 61.47,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 3.74,
      "wind_deg": 176,
      "wind_gust": 15.3,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
          }
      ],
      "pop": 1,
      "rain": {
          "1h": 0.82
      }
  },
  {
      "dt": 1639742400,
      "temp": 62.35,
      "feels_like": 62.89,
      "pressure": 1018,
      "humidity": 98,
      "dew_point": 61.68,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 5.03,
      "wind_deg": 183,
      "wind_gust": 20.24,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
          }
      ],
      "pop": 0.99,
      "rain": {
          "1h": 0.79
      }
  },
  {
      "dt": 1639746000,
      "temp": 62.56,
      "feels_like": 63.09,
      "pressure": 1019,
      "humidity": 97,
      "dew_point": 61.68,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 6.49,
      "wind_deg": 186,
      "wind_gust": 23.55,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
          }
      ],
      "pop": 0.85,
      "rain": {
          "1h": 0.56
      }
  },
  {
      "dt": 1639749600,
      "temp": 63.23,
      "feels_like": 63.68,
      "pressure": 1019,
      "humidity": 94,
      "dew_point": 61.57,
      "uvi": 0.03,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 7.99,
      "wind_deg": 187,
      "wind_gust": 25.55,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
          }
      ],
      "pop": 0.81,
      "rain": {
          "1h": 0.53
      }
  },
  {
      "dt": 1639753200,
      "temp": 64.78,
      "feels_like": 65.19,
      "pressure": 1019,
      "humidity": 90,
      "dew_point": 61.83,
      "uvi": 0.11,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 10.25,
      "wind_deg": 188,
      "wind_gust": 27.02,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
          }
      ],
      "pop": 0.8,
      "rain": {
          "1h": 0.4
      }
  },
  {
      "dt": 1639756800,
      "temp": 66.81,
      "feels_like": 67.24,
      "pressure": 1019,
      "humidity": 86,
      "dew_point": 62.42,
      "uvi": 0.48,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 11.7,
      "wind_deg": 194,
      "wind_gust": 27.11,
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
          }
      ],
      "pop": 0.8,
      "rain": {
          "1h": 0.19
      }
  },
  {
      "dt": 1639760400,
      "temp": 68.61,
      "feels_like": 69.03,
      "pressure": 1019,
      "humidity": 82,
      "dew_point": 62.76,
      "uvi": 0.71,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 12.5,
      "wind_deg": 199,
      "wind_gust": 24.58,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
          }
      ],
      "pop": 0.72
  },
  {
      "dt": 1639764000,
      "temp": 69.67,
      "feels_like": 70.05,
      "pressure": 1018,
      "humidity": 79,
      "dew_point": 62.92,
      "uvi": 0.81,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 12.39,
      "wind_deg": 204,
      "wind_gust": 22.3,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
          }
      ],
      "pop": 0.72
  },
  {
      "dt": 1639767600,
      "temp": 70.84,
      "feels_like": 71.2,
      "pressure": 1017,
      "humidity": 76,
      "dew_point": 62.73,
      "uvi": 1.01,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 12.03,
      "wind_deg": 205,
      "wind_gust": 19.95,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
          }
      ],
      "pop": 0.2
  },
  {
      "dt": 1639771200,
      "temp": 71.47,
      "feels_like": 71.8,
      "pressure": 1016,
      "humidity": 74,
      "dew_point": 62.58,
      "uvi": 0.69,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 11.05,
      "wind_deg": 201,
      "wind_gust": 19.35,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
          }
      ],
      "pop": 0.18
  },
  {
      "dt": 1639774800,
      "temp": 71.33,
      "feels_like": 71.6,
      "pressure": 1016,
      "humidity": 73,
      "dew_point": 62.4,
      "uvi": 0.34,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 10.54,
      "wind_deg": 199,
      "wind_gust": 19.33,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
          }
      ],
      "pop": 0.1
  },
  {
      "dt": 1639778400,
      "temp": 69.91,
      "feels_like": 70.18,
      "pressure": 1016,
      "humidity": 76,
      "dew_point": 62.06,
      "uvi": 0.1,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 9.35,
      "wind_deg": 192,
      "wind_gust": 18.99,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
          }
      ],
      "pop": 0.1
  },
  {
      "dt": 1639782000,
      "temp": 67.51,
      "feels_like": 67.77,
      "pressure": 1016,
      "humidity": 81,
      "dew_point": 61.52,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 7.74,
      "wind_deg": 188,
      "wind_gust": 18.72,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
          }
      ],
      "pop": 0.07
  },
  {
      "dt": 1639785600,
      "temp": 66.29,
      "feels_like": 66.52,
      "pressure": 1016,
      "humidity": 83,
      "dew_point": 60.96,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 7.31,
      "wind_deg": 181,
      "wind_gust": 20.04,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
          }
      ],
      "pop": 0.02
  },
  {
      "dt": 1639789200,
      "temp": 65.41,
      "feels_like": 65.55,
      "pressure": 1016,
      "humidity": 83,
      "dew_point": 60.19,
      "uvi": 0,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 7.27,
      "wind_deg": 179,
      "wind_gust": 21.9,
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
          }
      ],
      "pop": 0
  }
]

test('properly renders with no forecast data', () => {
  const hourly = renderer.create(
    <HourlyPanel />
  ).toJSON();

  expect(hourly).toMatchSnapshot();
});

test('properly renders with forecast data', () => {
  const hourly = renderer.create(
    <HourlyPanel forecast={testForecast} />
  ).toJSON();

  expect(hourly).toMatchSnapshot();
});

