import React from 'react';
import { func } from 'prop-types';
import { Container, Navigation, Title } from './styles';
import { CITIES } from '../../utils/constants';
import Button from '@material-ui/core/Button';
import CSVReader from "react-csv-reader";

function WeatherNavigation(props) {
  const renderNavigation = () => {
    return CITIES.map((city) => {
      return (
        <Button onClick={props.handleCityChange(city)}>
          {city}
        </Button>
      )
    })
  }

  return (
    <Container>
      <Title> Select a City </Title>
      <Navigation>
        {renderNavigation()}
      </Navigation>
      <Title> Select a Data Source </Title>
      <Navigation>
        <CSVReader
          label="csv"
          onFileLoaded={props.handleGetWeatherFromCsvFile}
        />
        <Button onClick={props.handleSelectApiDataSource}>
          API
        </Button>
      </Navigation>
    </Container>
  )
}

WeatherNavigation.propTypes = {
  handleGetWeatherFromCsvFile: func.isRequired,
  handleSelectApiDataSource: func.isRequired,
  handleCityChange: func.isRequired,
}

export default WeatherNavigation;
