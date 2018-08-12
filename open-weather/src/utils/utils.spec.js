import helper from './helpers';

const fixture = {
  list: [
    {
      dt: 1531774800,
      main: {
        temp : 293.05
      }
    },
    {
      dt: 1531785600,
      main: {
        temp : 293.05
      }
    },
    {
      dt: 1531796400,
      main: {
        temp : 293.05
      }
    },
  ]
}

describe('Basic Utils tests', () => {
  it('FilterData', () => {
    const bucket = helper.getNextFiveDays()

    expect(helper.filterData(bucket, fixture)).toMatchSnapshot()
  })
})