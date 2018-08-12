## Weather app

### Instructions

- Run npm install and then start to load the app. App should boot up on port 3000
- Can run the tests by running npm run test

### Configuration

- Create react app for simplicity
- Jest & enzyme used for snapshot and unit tests
- Moment used to calculate the dates
- Axios used for handling basic requests
- Material UI for creating out the box components, very useful for the card layout
- Styled components used for when I needed to add the own styles.
- React-csv-reader for reading CSV files.

### Architecture

- Base Container with two main components, WeatherContent and navigation. Weather content renders the weekday and time cells.
- The main business logic here was the filtering of the data to be correctly aligned with weekdays. I've extracted this out into the helper file, Utils to make it more testable.
- Styled components for separate concerns between styling and logic and I feel they semantically read better.

### Todo
- Tidy up styles
- Add lifecycle unit tests?
- Mock CSV file