const instialstate = 0;
export const reducer = (state = instialstate, action) => {
  switch (action.type) {
    case "Add":
      return state + action.payload;
    case "Sub":
      return state - action.payload;
    default:
      return state;
  }
};
export default reducer;
