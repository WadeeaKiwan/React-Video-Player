import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.bgColor};

  h1 {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    padding: 20px 0 20px 10px;
    font-style: italic;
    margin: 0;
  }
`;

export default StyledHeader;
