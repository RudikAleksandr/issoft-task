import { FC, ReactElement, ReactNode } from 'react';
import { StyledSpinner, StyledSpinnerContainer, StyledWrapper } from './SpinnerLoader.css';

type Props = {
  isLoading: boolean;
  children: ReactNode | ReactNode[];
};
const SpinnerLoader: FC<Props> = (({ isLoading, children }: Props): ReactElement => (
  <StyledWrapper>
    {children}
    {isLoading && (
      <StyledSpinnerContainer>
        <StyledSpinner animation="border" variant="secondary" />
      </StyledSpinnerContainer>
    )}
  </StyledWrapper>
));

export default SpinnerLoader;
