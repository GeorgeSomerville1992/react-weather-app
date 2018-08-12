import React, { Component } from 'react';
import { apiEndpoint } from './utils/api';
import WeatherContent from './components/weather-content/index';
import helper from './utils/helpers';
import WeatherNavigation from './components/weather-navigation/index';
import { Container, Header, Content, Footer } from './styles';

class App extends Component {

  state = {
    isFetching: false,
    error: null,
    chosenCity: 'London',
    weatherContent: helper.getNextFiveDays(),
  }

  componentDidMount() {
    this.getWeather();
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextState.chosenCity !== this.state.chosenCity) {
      this.getWeather(nextState.chosenCity)
    }
  }

  handleCityChange = (city) => () => {
    this.setState(() => ({
      chosenCity: city
    }));
  }

  handleSelectApiDataSource = () => {
    this.getWeather('London')
  }

  handleGetWeatherFromCsvFile = csvFile => {
    this.setState(() => ({
      isFetching: false,
      weatherContent: helper.filterData(helper.getNextFiveDays(), csvFile)
    }));
  }

  getWeather() {
    this.setState({
      isFetching: true,
    }, () => {
      apiEndpoint(this.state.chosenCity).getWeather.then(response => {
        this.setState(() => ({
          isFetching: false,
          weatherContent: helper.filterData(helper.getNextFiveDays(), response.data)
        }));
      }).catch(error => {
        this.setState(prevState => ({
          isFetching: false,
          error: error,
        }));
      }).then(() => {
        this.setState({
          isFetching: false,
        })
      });
    });
  }

  render() {
    const { isFetching, chosenCity, weatherContent } = this.state

    return (
      <Container>
        <Header>
          { isFetching ? 'Loading....' : chosenCity }
        </Header>
        <Content>
          { !isFetching && <WeatherContent days={weatherContent} />}
        </Content>
        <Footer>
          <WeatherNavigation
            handleCityChange={this.handleCityChange}
            handleGetWeatherFromCsvFile={this.handleGetWeatherFromCsvFile}
            handleSelectApiDataSource={this.handleSelectApiDataSource}
            />
        </Footer>
      </Container>
    );
  }
}

export default App;
