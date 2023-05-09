import {
  AUTH_ERROR,
  AUTH_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  DASHBOARD_LOADING,
  DASHBOARD_LOADED,
  DASHBOARD_FAILED,
  USER_LOADING,
  USER_LOADED,
  CHANGE_USER_PASSWORD_FAILED,
  UPDATE_PROFILE_PICTURE_FAILED,
  UPDATE_PROFILE_PICTURE,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  CHANGE_USER_PASSWORD_SUCCESS,
  SET_PASSWORD,
  SET_PASSWORD_FAILED,
  UPDATE_USER,
  UPDATE_USER_FAILED,
  SENT_EMAIL,
  SENDING_EMAIL_FAILED,
  VERIFY_FAILED,
  VERIFIED,
  OTP_VERIFIED,
  OTP_VERIFY_FAILED,
  RESEND_OTP,
  RESEND_OTP_FAILED,
  UPLOAD_FAILED,
  UPLOADED,
  ALBUM_LOADED,
  ALBUM_LOAD_FAILED,
  COUNTRIES_FAILED,
  COUNTRIES_LOADED,
  LOAD_COUNTRIES,
} from "../actions/types";
const initialState = {
  isLoading: false,
  user: {},
  isAuthenticated: false,
  dashboard: {},
  dashboardLoading: false,
  image: "",
  token: localStorage.getItem("GoAuthToken"),
  currentUser: localStorage.getItem("GoCurrentUser"),
  tokenPresent: localStorage.getItem("GoAuthToken") !== null,
  album: null,
  regStatus: null,
  passStatus: null,
  updateStatus: null,
  resetStatus: null,
  changepassStatus: null,
  bvnStatus: null,
  otpStatus: null,
  resendStatus: null,
  uploadStatus: null,
  countries: [],
};

const saveCurrentUser = (data) => {
  const currentUser = data.is_staff ? "staff" : "artiste";

  localStorage.setItem("GoCurrentUser", currentUser);
  return currentUser;
};
const data = [];
export const getCountry = (x) => {
  for (let i = 0; i < x.length; i++) {
    const element = {
      value: x[i].country_code,
      label: x[i].country_name,
    };
    data.push(element);
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
    case LOAD_COUNTRIES:
      return {
        ...state,
        isLoading: true,
      };
    case COUNTRIES_LOADED:
      getCountry(action.payload.results);
      return {
        ...state,
        isLoading: false,
        countries: data,
      };
    case COUNTRIES_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case DASHBOARD_LOADING:
      return {
        ...state,
        dashboardLoading: true,
      };
    case DASHBOARD_LOADED:
      return {
        ...state,
        dashboardLoading: false,
        dashboard: action.payload,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuthenticated: true,
        currentUser: saveCurrentUser(action.payload),
      };
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case SET_PASSWORD:
      return {
        ...state,
        isLoading: false,
        passStatus: action.status,
      };
    case SET_PASSWORD_FAILED:
      return {
        ...state,
        isLoading: false,
        passStatus: action.status,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        regStatus: action.status,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        updateStatus: action.status,
      };
    case UPDATE_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        updateStatus: action.status,
      };
    case CHANGE_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        changepassStatus: action.status,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("GoAuthToken", action.payload.token);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.artist || action.payload.staff,
        token: action.payload.token,
      };
    case UPDATE_PROFILE_PICTURE:
      let user = state.user ? { ...state.user } : null;
      if (user) {
        user["avatar"] = { ...action.payload };
      }
      return {
        ...state,
        user: user,
        isLoading: false,
      };
    case DASHBOARD_FAILED:
      return {
        ...state,
        dashboardLoading: false,
      };
    case UPDATE_PROFILE_PICTURE_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case CHANGE_USER_PASSWORD_FAILED:
      return {
        ...state,
        isLoading: false,
        changepassStatus: action.status,
      };
    case REGISTER_FAILED:
      localStorage.removeItem("GoAuthToken");
      return {
        ...state,
        isLoading: false,
        regStatus: action.status,
        user: null,
        dashboard: null,
      };
    case LOGOUT_SUCCESS:
    case AUTH_ERROR:
      localStorage.removeItem("GoAuthToken");
      return {
        ...state,
        user: null,
        dashboard: null,
        isLoading: false,
        isAuthenticated: false,
      };
    case LOGIN_FAILED:
      localStorage.removeItem("GoAuthToken");
      return {
        ...state,
        user: null,
        dashboard: null,
        isLoading: false,
        isAuthenticated: false,
      };

    case SENT_EMAIL:
      return {
        ...state,
        isLoading: false,
        resetStatus: action.status,
      };
    case SENDING_EMAIL_FAILED:
      return {
        ...state,
        isLoading: false,
        resetStatus: action.status,
      };
    case VERIFIED:
      return {
        ...state,
        isLoading: false,
        bvnStatus: action.status,
      };
    case VERIFY_FAILED:
      return {
        ...state,
        isLoading: false,
        bvnStatus: action.status,
      };
    case OTP_VERIFIED:
      localStorage.removeItem("phone");
      return {
        ...state,
        isLoading: false,
        otpStatus: action.status,
      };
    case OTP_VERIFY_FAILED:
      return {
        ...state,
        isLoading: false,
        otpStatus: action.status,
      };
    case RESEND_OTP:
      return {
        ...state,
        isLoading: false,
        resendStatus: action.status,
      };
    case RESEND_OTP_FAILED:
      return {
        ...state,
        isLoading: false,
        resendStatus: action.status,
      };
    case UPLOADED:
      return {
        ...state,
        isLoading: false,
        uploadStatus: action.status,
      };
    case UPLOAD_FAILED:
      return {
        ...state,
        isLoading: false,
        uploadStatus: action.status,
      };
    case ALBUM_LOADED:
      return {
        ...state,
        isLoading: false,
        album: action.payload,
      };
    case ALBUM_LOAD_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
