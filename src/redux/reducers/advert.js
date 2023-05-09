import {
  ADVERT_LOADING,
  ADVERT_PLAN_LOADING,
  CREATED_ADVERT,
  CREATED_ADVERT_PLAN,
  ADVERT_DELETED,
  ADVERT_EDITED,
  ADVERT_PLAN_DELETED,
  ADVERT_FAILED,
  ADVERT_PLAN_EDITED,
  ADVERT_PLAN_FAILED,
  ADVERT_LOADED,
  ADVERT_PLAN_LOADED,
  ADVERT_PUBLISHED,
} from "../actions/types";

const initialState = {
  isLoading: false,
  plan: {},
  advert: {},
  publish:{}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADVERT_PLAN_LOADING:
    case ADVERT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ADVERT_PLAN_FAILED:
    case ADVERT_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case ADVERT_PLAN_LOADED:
      return {
        ...state,
        isLoading: false,
        plan: action.payload,
      };
    case ADVERT_PUBLISHED:
      return {
        ...state,
        isLoading: false,
        publish: action.payload
      };
    case ADVERT_LOADED:
      return {
        ...state,
        isLoading: false,
        advert: action.payload,
      };
    case ADVERT_PLAN_DELETED:
    case ADVERT_DELETED:
      return {
        ...state,
        isLoading: false,
      };
    case ADVERT_EDITED:
    case CREATED_ADVERT:
    case ADVERT_PLAN_EDITED:
    case CREATED_ADVERT_PLAN:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
