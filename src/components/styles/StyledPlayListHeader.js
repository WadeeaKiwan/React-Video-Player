import styled from "styled-components";

const StyledPlayListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 0.8em;
  color: #f0f0f0;
  background: #696969;

  div {
    background: #353535;
    padding: 5px;
    border-radius: 5px;
    width: 15%;
    text-align: center;
  }
`;

export default StyledPlayListHeader;
