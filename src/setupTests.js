// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

global.TEST_DATE = {
  month: 'April',
  day: '13',
  year: '2016',
  dayOfWeek: 'Wednesday'
};

global.TEST_HOURLY_FORECAST = [
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
];

global.TEST_DAILY_FORECAST = [
  {
    "dt": 1639587600,
    "sunrise": 1639573291,
    "sunset": 1639608577,
    "moonrise": 1639600740,
    "moonset": 1639561620,
    "moon_phase": 0.4,
    "temp": {
        "day": 61.88,
        "min": 59.45,
        "max": 67.44,
        "night": 62.29,
        "eve": 65.55,
        "morn": 60.08
    },
    "feels_like": {
        "day": 62.01,
        "night": 61.84,
        "eve": 65.37,
        "morn": 60.21
    },
    "pressure": 1023,
    "humidity": 90,
    "dew_point": 58.89,
    "wind_speed": 17.49,
    "wind_deg": 167,
    "wind_gust": 39.19,
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "clouds": 95,
    "pop": 0,
    "uvi": 1.14
  },
  {
      "dt": 1639674000,
      "sunrise": 1639659728,
      "sunset": 1639694996,
      "moonrise": 1639689060,
      "moonset": 1639651440,
      "moon_phase": 0.43,
      "temp": {
          "day": 67.51,
          "min": 59.95,
          "max": 70.12,
          "night": 60.66,
          "eve": 65.91,
          "morn": 62.67
      },
      "feels_like": {
          "day": 67.44,
          "night": 60.89,
          "eve": 66.49,
          "morn": 62.73
      },
      "pressure": 1018,
      "humidity": 74,
      "dew_point": 58.82,
      "wind_speed": 17,
      "wind_deg": 186,
      "wind_gust": 38.9,
      "weather": [
          {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10d"
          }
      ],
      "clouds": 100,
      "pop": 1,
      "rain": 9.37,
      "uvi": 1.56
  },
  {
      "dt": 1639760400,
      "sunrise": 1639746164,
      "sunset": 1639781417,
      "moonrise": 1639777620,
      "moonset": 1639741320,
      "moon_phase": 0.46,
      "temp": {
          "day": 68.61,
          "min": 60.93,
          "max": 71.47,
          "night": 64.65,
          "eve": 67.51,
          "morn": 61.95
      },
      "feels_like": {
          "day": 69.03,
          "night": 64.87,
          "eve": 67.77,
          "morn": 62.46
      },
      "pressure": 1019,
      "humidity": 82,
      "dew_point": 62.76,
      "wind_speed": 12.5,
      "wind_deg": 199,
      "wind_gust": 29.86,
      "weather": [
          {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10d"
          }
      ],
      "clouds": 100,
      "pop": 1,
      "rain": 6.75,
      "uvi": 1.01
  },
];

global.TEST_CURRENT_FORECAST = {
  "dt": 1639622024,
  "sunrise": 1639573291,
  "sunset": 1639608577,
  "temp": 62.15,
  "feels_like": 61.68,
  "pressure": 1019,
  "humidity": 77,
  "dew_point": 54.86,
  "uvi": 0,
  "clouds": 90,
  "visibility": 10000,
  "wind_speed": 14.97,
  "wind_deg": 160,
  "wind_gust": 23.02,
  "weather": [
      {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
      }
  ]
};

global.TEST_TODAY = {
    "dt": 1639587600,
    "sunrise": 1639573291,
    "sunset": 1639608577,
    "moonrise": 1639600740,
    "moonset": 1639561620,
    "moon_phase": 0.4,
    "temp": {
        "day": 61.88,
        "min": 59.45,
        "max": 67.44,
        "night": 62.29,
        "eve": 65.55,
        "morn": 60.08
    },
    "feels_like": {
        "day": 62.01,
        "night": 61.84,
        "eve": 65.37,
        "morn": 60.21
    },
    "pressure": 1023,
    "humidity": 90,
    "dew_point": 58.89,
    "wind_speed": 17.49,
    "wind_deg": 167,
    "wind_gust": 39.19,
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "clouds": 95,
    "pop": 0,
    "uvi": 1.14
};
