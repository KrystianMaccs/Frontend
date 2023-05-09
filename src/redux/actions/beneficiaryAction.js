import Axios from "axios";
import { toastr } from "react-redux-toastr";
import {
  AUTH_LOADING,
  ROYALTY_LINK_VERIFIED,
  ROYALTY_LINK_INVALID,
  ROYALTY_AUTHENTICATED,
  ROYALTY_AUTHENTICATION_FAILED,
  ROYALTY_BANK_VERIFIED,
  ROYALTY_BANK_VERIFICATION_FAILED,
  GO_BACK_INITIATED,
  ROYALTY_PROFILE_UPDATED,
  ROYALTY_PROFILE_UPDATE_FAILED,
  BENEFIT_LOADED,
  BENEFIT_LOAD_FAILED,
} from "./types";

export const loadBenefit = (dispatch, getState) => {
  dispatch({ type: AUTH_LOADING });

  Axios.get(`/api/v1/payouts/royalty/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: BENEFIT_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: BENEFIT_LOAD_FAILED, payload: err });
    });
};

export const benefit = () => (dispatch, getState) => {
  dispatch({ type: AUTH_LOADING });
  Axios.get(`/api/v1/payouts/royalty/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: BENEFIT_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: BENEFIT_LOAD_FAILED, payload: err });
    });
};

export const verifyBenefit = (data) => (dispatch, getState) => {
  dispatch({ type: AUTH_LOADING });

  Axios.post("/api/v1/royalty/confirm/", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ROYALTY_LINK_VERIFIED,
        payload: res.data,
      });

      return toastr.success(
        "Royalty Valid",
        "Click on the button below to get your One Time Password"
      );
    })
    .catch((err) => {
      dispatch({
        type: ROYALTY_LINK_INVALID,
        payload: err.response.data,
      });
      return toastr.error("Royalty Invalid", err.response.data[0]);
    });
};

export const authenticateBenefit = (data) => (dispatch, getState) => {
  dispatch({ type: AUTH_LOADING });
  Axios.post("/api/v1/royalty/authenticate/", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ROYALTY_AUTHENTICATED,
        payload: res.data,
      });
      loadBenefit(dispatch, getState);

      return toastr.success("Royalty Authenticated", "Complete your Profile");
    })
    .catch((err) => {
      dispatch({
        type: ROYALTY_AUTHENTICATION_FAILED,
        payload: err.response,
      });
      return toastr.error("Royalty Invalid", err);
    });
};

export const updateBenefit = (data, id) => (dispatch, getState) => {
  dispatch({ type: AUTH_LOADING });
  Axios.patch(
    `/api/v1/royalty/account/update/${id}/`,
    data,
    tokenConfig(getState)
  )
    .then((res) => {
      dispatch({
        type: ROYALTY_PROFILE_UPDATED,
        payload: res.data,
      });
      loadBenefit(dispatch, getState);
      return toastr.success(
        "Royalty Profile Update Success",
        "Input and verify your bank details to complete your profile"
      );
    })
    .catch((err) => {
      dispatch({
        type: ROYALTY_PROFILE_UPDATE_FAILED,
        payload: err.response.data,
      });
      return toastr.error("Royalty Registration Failed", err.response.data[0]);
    });
};

export const bankBenefit = (data) => (dispatch, getState) => {
  dispatch({ type: AUTH_LOADING });
  Axios.post(`/api/v1/royalty/verify/`, data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ROYALTY_BANK_VERIFIED,
        payload: res.data,
      });
      loadBenefit(dispatch, getState);
      return toastr.success(
        "Bank Verification Success",
        "You have successfully completed your Royalty Registration"
      );
    })
    .catch((err) => {
      dispatch({
        type: ROYALTY_BANK_VERIFICATION_FAILED,
        payload: err.response.data,
      });
      return toastr.error("Bank Verification Failed", `${err.response.data[0]}, `);
    });
};
export const reverseBack = () => (dispatch) => {
  dispatch({ type: GO_BACK_INITIATED });
};
export const tokenConfig = (getState) => {
  const token = getState().beneficiary.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};
