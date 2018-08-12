import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, configure } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('./utils/api', () => {
  return {
    apiEndpoint: jest.fn(() => {
      return {
        getWeather: Promise.resolve({
          data: {
            list: [
              {
                dt: 1531872000,
                main: {
                  temp : 293.05
                }
              },
              {
                dt: 1531882800,
                main: {
                  temp : 293.05
                }
              },
              {
                dt: 1531893600,
                main: {
                  temp : 293.05
                }
              },
            ]
          }
        }),
      }
    })
  }
})

jest.mock('./utils/helpers', () => {
  return {
    getNextFiveDays: jest.fn(() => {
      return [
        {
          currentDay: 'Monday',
          times: []
        },
        {
          currentDay: 'Tuesday',
          times: [
              {
                dt: 1531785600,
                main: {
                  temp: 293.05,
                },
              },
              {
                dt: 1531796400,
                main: {
                  temp: 293.05,
                },
              },
            ],
        },
        {
          currentDay: 'Wednesday',
          times: []
        },
        {
          currentDay: 'Thursday',
          times: []
        },
        {
          currentDay: 'Friday',
          times: []
        }
      ]
    }),
    convertTodegreesCelsius: jest.fn(() => {
      return 33
    })
  }
})


describe('Weather app tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders loading the table without mock data', async () => {
    const app = await mount(<App />);
    await app.instance().componentDidMount();
    expect(app.debug()).toMatchSnapshot();
  })

  it('renders with correct initial state', () => {
    const wrapper = shallow(<App/>);
    const status = wrapper.state();

    expect(wrapper.state().isFetching).toBe(true);
    expect(wrapper.state().error).toBe(null);
    expect(wrapper.state().chosenCity).toBe('London');
    expect(wrapper.state().weatherContent).toHaveLength(5);
  })

  it('handles the getWeather function correctly on mount', () => {
    const getWeatherSpy = jest.fn();
    const wrapper = shallow(<App />);
    wrapper.instance().getWeather = getWeatherSpy;
    wrapper.instance().componentDidMount();
    expect(getWeatherSpy).toHaveBeenCalled();
  })

  it('handles get weather request from api correctly and filters the data', async () => {
    const wrapper = shallow(<App />)
    await wrapper.instance().componentDidMount();
    expect(wrapper.state().weatherContent[1].times).toHaveLength(2);
  })

  it('correctly changes the country to get weather upon function call', async () => {
    const wrapper = shallow(<App />)
    await wrapper.instance().componentDidMount();
    expect(wrapper.state().chosenCity).toBe('London');
    wrapper.instance().handleCityChange('Liverpool')();
    expect(wrapper.state().chosenCity).toBe('Liverpool');
  })
})