import {
  PAYOUT_LOADING,
  CHARGE_LIST_LOAD_FAILED,
  CHARGE_LIST_LOADED,
  CHARGE_ADDED,
  CHARGE_ADD_FAILED,
  CHARGE_REMOVED,
  CHARGE_REMOVE_FAILED,
  PAYOUT_FOUND,
  PAYOUT_NOT_FOUND,
  TRIGGERED_SUCCESSFULLY,
  TRIGGER_UNSUCCESSFUL,
  CASH_OUT_INITIALIZATION_FAILED,
  CASH_OUT_INITIALIZED_SUCCESSFULLY,
  GET_HISTORY_SUCCESSFULL,
  GET_HISTORY_UNSUCCESSFUL,
  GOT_FAILED_PAYOUT,
  FAILED_PAYOUT_FAILED,
  CHARGE_UPDATED,
  CHARGE_UPDATE_FAILED,
  MANUAL_PAYMENT_FAILED,
  MANUAL_PAYMENT_SUCCESS
} from "../actions/types";
const initialState = {
  isLoading: false,
  list: null,
  history: null,
  failedList: null,
  charges: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case PAYOUT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CHARGE_LIST_LOAD_FAILED:
    case CHARGE_ADD_FAILED:
    case CHARGE_REMOVE_FAILED:
    case PAYOUT_NOT_FOUND:
    case TRIGGER_UNSUCCESSFUL:
    case CASH_OUT_INITIALIZATION_FAILED:
    case GET_HISTORY_UNSUCCESSFUL:
    case FAILED_PAYOUT_FAILED:
    case CHARGE_UPDATE_FAILED:
      case MANUAL_PAYMENT_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case MANUAL_PAYMENT_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case CHARGE_REMOVED:
      return {
        ...state,
        isLoading: false,
      };
    case CHARGE_LIST_LOADED:
      return {
        ...state,
        isLoading: false,
        charges: action.payload,
      };
    case CASH_OUT_INITIALIZED_SUCCESSFULLY:
      return {
        ...state,
        isLoading: false,
      };
    case CHARGE_ADDED:
    case CHARGE_UPDATED:
      return {
        ...state,
        isLoading: false,
      };
    case GET_HISTORY_SUCCESSFULL:
      return {
        ...state,
        isLoading: false,
        history: action.payload,
      };
    case TRIGGERED_SUCCESSFULLY:
      return {
        ...state,
        isLoading: false,
      };
    case PAYOUT_FOUND:
      return {
        ...state,
        isLoading: false,
        list: action.payload.data,
      };
    case GOT_FAILED_PAYOUT:
      return {
        ...state,
        isLoading: false,
        failedList: action.payload,
      };
    default:
      return state;
  }
}
