import moment from 'moment'

export default {
  getNextFiveDays: () => {
    const nextFiveDays = []
    const startDate = moment()

    for(let i = startDate.day(); i <= startDate.day() + 5; i+=1) {
      nextFiveDays.push(
        {
          currentDay: startDate.day(i).format('dddd'),
          times: []
        }
      )
    }
    return nextFiveDays
  },

  filterData: (bucket, weatherContent) => {
    return bucket.map(day => {
      weatherContent.list.forEach(time => {
        if (day.currentDay === moment.unix(time.dt).format('dddd')) {
          day.times.push(time)
        }
      })
      return day
    })
  },

  convertTodegreesCelsius: (value) => {
    return Math.round(value - 273.15)
  }
}