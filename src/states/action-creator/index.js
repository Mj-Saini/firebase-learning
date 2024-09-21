export const add = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payLoad: amount,
    });
  };
};
export const subtract = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "sub",
      payLoad: amount,
    });
  };
};
