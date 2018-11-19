const LightReducer = (state = "on", action) => {
    if (action.type === "SWITCH") {
      return state === "on" ? "off" : "on";
    }
    return state;
  };
  export default LightReducer;