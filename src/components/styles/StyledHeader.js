import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: ${props => props.theme.color};
  background: ${props => props.theme.bgColor};

  h1 {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding-left: 20px;
    font-style: italic;
  }
`;

export default StyledHeader;
