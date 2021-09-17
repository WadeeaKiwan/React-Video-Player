import styled from "styled-components";

const StyledPlayListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 0 0 10px 0;
  font-size: 1.2em;
  cursor: pointer;
  color: ${props => props.theme.color};

  .video-item-num {
    padding-right: 20px;
    border-right: 2px solid #565656;
  }

  .video-item-title {
    flex-grow: 1;
    padding: 0 20px 0 20px;
  }

  .video-item-duration {
    padding: 0px 10px;
    background: ${props => props.theme.color};
    color: ${props => props.theme.bgColor};
    border-radius: 5px;
  }
`;

export default StyledPlayListItem;
