/* globals logger */
import { Router } from 'express';

const forecastRouter = Router();

forecastRouter.post('/get-forecast', async (req, res, next) => {
  logger.debug(req.body);

  const { lat, long } = req.body;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`

  const forecast = await fetch(url).then(response => response.json());

  return res.status(200).json(forecast);
});

export default forecastRouter;
