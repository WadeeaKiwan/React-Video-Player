import styled from 'styled-components';

const StyledPlayerWrapper = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.bgColor};

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export default StyledPlayerWrapper;