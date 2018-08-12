import React from 'react';
import { number } from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import helper from '../../utils/helpers';
import { TimeCellCard } from './styles';

function WeatherTimeCard(props) {
  return (
    <TimeCellCard>
      <CardMedia
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography component="p">
          {moment.unix(props.currentTime).format('LT')}
        </Typography>
        <Typography component="p">
          {helper.convertTodegreesCelsius(props.currentTemp)} °C
        </Typography>
      </CardContent>
    </TimeCellCard>
  )
}

WeatherTimeCard.propTypes = {
  currentTemp: number.isRequired,
  currentTime: number.isRequired,
}

export default WeatherTimeCard