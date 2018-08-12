import styled from 'styled-components';
import { platformSize } from '../../utils/theme';

export const WeatherContentContainer = styled.div`
  @media (max-width: ${platformSize.phone}px) {
    width: 100%;
    overflow: scroll;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${platformSize.phone}px) {
    flex-direction: column;
  }
`