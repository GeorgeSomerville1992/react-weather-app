import React from 'react';
import { Row } from './styles';
import { array } from 'prop-types';
import WeatherWeekDayCard from '../common/weather-weekday-card';
import WeatherTimeCard from '../common/weather-time-card';
import { WeatherContentContainer } from './styles';

function WeatherContent(props) {
  const renderTimes = times => {
    return times.map((time) => {
      return (
        <WeatherTimeCard currentTime={time.dt} currentTemp={time.main.temp} />
      )
    })
  }

  const renderDays = days => {
    return days.map((day) => {
      return (
        <Row>
          <WeatherWeekDayCard currentDay={day.currentDay}/>
          {renderTimes(day.times)}
        </Row>
      )
    })
  }

  return (
    <WeatherContentContainer>
      {renderDays(props.days)}
    </WeatherContentContainer>
  );
}

WeatherContent.propTypes = {
  days: array.isRequired,
}

export default WeatherContent;
