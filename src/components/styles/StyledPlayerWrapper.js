import styled from 'styled-components';

const StyledPlayerWrapper = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`;

export default StyledPlayerWrapper;