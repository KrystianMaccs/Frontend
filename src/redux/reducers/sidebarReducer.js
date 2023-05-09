import {
  CHANGE_SIDEBAR_VISIBILITY,
  CHANGE_MOBILE_SIDEBAR_VISIBILITY,
  SET_ACTIVE
} from "../actions/sidebarActions";

const initialState = {
  show: false,
  collapse: false,
  active: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_SIDEBAR_VISIBILITY:
      return { ...state, collapse: !state.collapse };
    case CHANGE_MOBILE_SIDEBAR_VISIBILITY:
      return { ...state, show: !state.show };
    case SET_ACTIVE:
      return { ...state, active: action.payload };
    default:
      return state;
  }
}
