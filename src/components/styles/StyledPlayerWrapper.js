import styled from 'styled-components';

const StyledPlayerWrapper = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.bgColor};
  transition: background-color 0.5s ease-in-out;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export default StyledPlayerWrapper;