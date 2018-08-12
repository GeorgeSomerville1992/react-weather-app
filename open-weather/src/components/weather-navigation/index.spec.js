import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import WeatherNavigation from './index'

describe('<WeatherNavigation>', () => {
  it('renders structure', () => {
    const tree = renderer.create(
      <WeatherNavigation
        handeGetWeatherFromCsvFile={jest.fn()}
        handleSelectApiDataSource={jest.fn()}
        handleCityChange={jest.fn()} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})