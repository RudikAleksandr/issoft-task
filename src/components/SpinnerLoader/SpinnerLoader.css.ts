import { Spinner } from 'react-bootstrap';
import styled from '@emotion/styled';

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledSpinnerContainer = styled.div`
  z-index: 1000;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const StyledSpinner = styled(Spinner)`
  width: 7rem;
  height: 7rem;
  border-width: 0.6rem;
`;
