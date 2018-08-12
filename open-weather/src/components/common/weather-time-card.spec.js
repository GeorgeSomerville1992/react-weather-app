import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import WeatherTimeCard from './weather-time-card';

describe('<WeatherTimeCard>', () => {
  it('renders structure', () => {
    const tree = renderer.create(
      <WeatherTimeCard
        currentTemp={310}
        currentTime={198456}
      />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})