import actionTypes from "../actions/actionTypes";

const userReducer = (
  user = {
    isAuthenticated: false,
    user: {},
  },
  action
) => {
  let newUser;

  switch (action.type) {
    case actionTypes.registerUser:
      newUser = {
        isAuthenticated: false,
        user: action.user,
      };
      break;
    case actionTypes.loginUser:
      newUser = {
        isAuthenticated: true,
        user: action.user,
      };
      break;
    default:
      newUser = user;
  }

  return newUser;
};

export default userReducer;
