import {
  ADMIN_LOADING,
  ARTISTE_LOADED,
  ARTISTE_LOAD_FAIL,
  ARTISTE_DELETED,
  ARTISTE_DELETE_FAILED,
  ARTISTE_DEACTIVATED,
  ARTISTE_DEACTIVATE_FAILED,
  PACKAGE_CREATED,
  PACKAGE_DELETED,
  PACKAGE_EDITED,
  PACKAGE_FAILED,
  CREATING_PACKAGE,
} from "../actions/types";

const initialState = {
  isLoading: false,
  artiste: {},
  artisteNo: 0,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADMIN_LOADING:
    case CREATING_PACKAGE:
      return {
        ...state,
        isLoading: true,
      };
    case ARTISTE_LOAD_FAIL:
    case ARTISTE_DELETE_FAILED:
    case ARTISTE_DEACTIVATE_FAILED:
    case PACKAGE_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case ARTISTE_LOADED:
      return {
        ...state,
        isLoading: false,
        artiste: action.payload,
        artisteNo: action.payload.count,
      };
    case ARTISTE_DELETED:
    case ARTISTE_DEACTIVATED:
      return {
        ...state,
        isLoading: false,
      };
    case PACKAGE_CREATED:
    case PACKAGE_EDITED:
    case PACKAGE_DELETED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
