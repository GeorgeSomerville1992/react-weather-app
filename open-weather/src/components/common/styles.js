import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { platformSize } from '../../utils/theme';

export const WeekDayCellCard = styled(Card)`
  width: 120px;

  @media (max-width: ${platformSize.desktop}px) {
    width: 100%;
  }
`

export const TimeCellCard = styled(Card)`
  width: 120px;

  @media (max-width: ${platformSize.desktop}px) {
    width: 100%;
  }
`