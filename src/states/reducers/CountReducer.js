const reducer = (state = 0, action) => {
  if (action.type === "add") {
    return state + action.payLoad;
  } else if (action.type === "sub") {
    return state - action.payLoad;
  } else {
    return state;
  }
};

export default reducer;
