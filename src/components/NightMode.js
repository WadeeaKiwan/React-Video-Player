import StyledNightMode from "./styles/StyledNightMode";

const NightMode = ({nightModeHandler, nightMode}) => {
  return (
    <StyledNightMode>
      <span>NightMode: </span>
      <label className="switch">
        <input type="checkbox" checked={nightMode} onChange={nightModeHandler} />
        <span className="slider round" />
      </label>
    </StyledNightMode>
  )
}

export default NightMode;
