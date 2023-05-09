import { GET_ERRORS } from "../actions/types";

const initialState = {
  msg: null,
  status: null,
  id: null,
  isLoading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        msg: action.payload.email[0],
        status: action.status,
        id: action.id,
      };
    default:
      return state;
  }
}
