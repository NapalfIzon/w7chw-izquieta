import axios from "axios";
import jwtDecode from "jwt-decode";
import { registerUserAction } from "../actions/actionCreators";

const registerUserThunk = (user) => async (dispatch) => {
  const response = await axios.post(
    process.env.REACT_APP_API_ENDPOINT + "/users/register",
    user
  );

  if (response.status === 201) {
    const token = response.data.token;
    const user = jwtDecode(token);
    dispatch(registerUserAction(user));
  } // TODO preguntar por status diferentes al 201 (ya que está designado así al crear al usuario)
};

const loginUserThunk = (user) => async (dispatch) => {};

export default { registerUserThunk, loginUserThunk };
