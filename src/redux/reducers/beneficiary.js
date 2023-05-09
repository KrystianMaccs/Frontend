import {
  AUTH_LOADING,
  ROYALTY_LINK_VERIFIED,
  ROYALTY_LINK_INVALID,
  ROYALTY_AUTHENTICATED,
  ROYALTY_AUTHENTICATION_FAILED,
  ROYALTY_BANK_VERIFICATION_FAILED,
  ROYALTY_BANK_VERIFIED,
  ROYALTY_PROFILE_UPDATED,
  ROYALTY_PROFILE_UPDATE_FAILED,
  GO_BACK_INITIATED,
  BENEFIT_LOADED,
  BENEFIT_LOAD_FAILED,
} from "../actions/types";
const initialState = {
  loading: false,
  beneficiary: {},
  benefit: {},
  token: "",
  isAuthenticated: false,
  isComplete: false,
  isVerified: false,
  engaged: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
        engaged: true,
      };
    case ROYALTY_LINK_INVALID:
    case ROYALTY_AUTHENTICATION_FAILED:
    case ROYALTY_PROFILE_UPDATE_FAILED:
    case ROYALTY_BANK_VERIFICATION_FAILED:
    case BENEFIT_LOAD_FAILED:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        isComplete: false,
        isVerified: false,
        engaged: false,
      };
    case ROYALTY_LINK_VERIFIED:
      return {
        ...state,
        loading: false,
        beneficiary: action.payload,
        engaged: true,
        isAuthenticated: true,
      };
    case ROYALTY_AUTHENTICATED:
      localStorage.setItem("BenefitToken", action.payload.token);
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        beneficiary: action.payload.royalty,
        isComplete: true,
       // isVerified: action.payload.royalty.profile.is_verified ? true : false,
        isAuthenticated: true,
        engaged: true,
      };
    case ROYALTY_PROFILE_UPDATED:
      return {
        ...state,
        loading: false,
        engaged: true,
      };
    case ROYALTY_BANK_VERIFIED:
      return {
        ...state,
        loading: false,
        engaged: true,
      };
    case BENEFIT_LOADED:
      return {
        ...state,
        loading: false,
        benefit: action.payload,
        engaged: true,
      };
    case GO_BACK_INITIATED:
      return {
        ...state,
        title: "Royalty Registration",
        extra:
          "Check your email for the Royalty message to start your registration",
      };
    default:
      return state;
  }
}
