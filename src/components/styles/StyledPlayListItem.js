import styled from "styled-components";

const StyledPlayListItem = styled.li`
  list-style-type: none;

  a {
      display: block;
      text-decoration: none;
      color: ${props => props.theme.color};
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 10px 10px;
      margin: 0 0 10px 0;
      font-size: 1.2em;
      cursor: pointer;
      border: ${props => props.active ? props.theme.borderItemActive : props.theme.borderItemInactive};
      border-radius: ${props => props.active ? "5px" : "0"};
    }

  .video-item-num {
    padding-right: 20px;
    border-right: 2px solid #565656;
  }

  .video-item-title {
    flex-grow: 1;
    padding: 0 20px 0 20px;
  }

  .video-item-duration {
    padding: 2px 10px 0 10px;
    background: ${props => props.theme.color};
    color: ${props => props.theme.bgColor};
    border-radius: 5px;
  }
`;

export default StyledPlayListItem;
