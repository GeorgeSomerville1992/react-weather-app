import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import WeatherWeekDayCard from './weather-weekday-card';

describe('<WeatherWeekDayCard>', () => {
  it('renders structure', () => {
    const tree = renderer.create(
      <WeatherWeekDayCard
        currentDay={'Sunday'}
      />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})