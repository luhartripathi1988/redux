export const add = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "Add",
      payload: amount
    });
  };
};

export const sub = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "Sub",
      payload: amount
    });
  };
};
