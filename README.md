# Weather App

This is a quick weather app that takes in a city and displays current conditions, an hourly forecast, and a seven-day future forecast.

To get started, you'll need to install deps and update some secrets in the `.env` file first - check out the `.env.example` file for what you'll need!

### Tools Used
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and leans on default tooling. I've added a few [Husky](https://github.com/typicode/husky) hooks to force test runs and dummy dotenv file generation before commits can be pushed to origin.

Place selection is handled by the [Google Places API](https://developers.google.com/maps/documentation/places/web-service/autocomplete). Forecast lookup is handled by the [OpenWeatherMap One Call API](https://openweathermap.org/api/one-call-api#parameter).

### Available Scripts
#### `npm start`
This builds the app in "production" mode, starts a simple server, and puts the link to that server in your clipboard.


#### `npm run start:dev`
This starts the React dev server and enables hot-reloads for quicker development.

#### `npm test`
This runs tests in "one off" mode.

#### `npm run test:watch`
This runs tests in "watch" mode. This allows tests to automatically re-run when any relevant files change.
