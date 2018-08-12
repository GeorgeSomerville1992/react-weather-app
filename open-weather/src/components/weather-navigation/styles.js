import styled from 'styled-components';
import { platformSize } from '../../utils/theme';

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 20px;

  @media (max-width: ${platformSize.phone}px) {
    flex-direction: column;
  }
`

export const Title = styled.div`
  padding-bottom: 20px;
`

export const Container = styled.div`

`
