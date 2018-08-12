import React from 'react';
import { string } from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { WeekDayCellCard } from './styles';

function WeatherWeekDayCard(props) {
  return (
    <WeekDayCellCard>
      <CardMedia
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom component="h4">
          {props.currentDay}
        </Typography>
      </CardContent>
    </WeekDayCellCard>
  )
}

WeatherWeekDayCard.propTypes = {
  currentDay: string.isRequired,
}

export default WeatherWeekDayCard