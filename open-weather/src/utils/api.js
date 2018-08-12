import axios from 'axios';
import { API_KEY } from './constants';

export const apiEndpoint = (chosenCity) => {
  const key = API_KEY
  const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${chosenCity},uk&mode=json&APPID=${API_KEY}`

  return {
    getWeather: new Promise((resolve, reject) => {
      axios.get(apiUrl).then((response) => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

