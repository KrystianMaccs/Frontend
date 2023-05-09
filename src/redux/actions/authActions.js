import React from "react";
import Axios from "axios";
import {
  AUTH_ERROR,
  USER_LOADED,
  LOGOUT_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  USER_LOADING,
  CHANGE_USER_PASSWORD_FAILED,
  CHANGE_USER_PASSWORD_SUCCESS,
  SET_PASSWORD_FAILED,
  SET_PASSWORD,
  SENT_EMAIL,
  SENDING_EMAIL_FAILED,
  UPDATE_USER,
  UPDATE_USER_FAILED,
  VERIFIED,
  VERIFY_FAILED,
  OTP_VERIFY_FAILED,
  OTP_VERIFIED,
  RESEND_OTP,
  RESEND_OTP_FAILED,
  UPLOADED,
  UPLOAD_FAILED,
  COUNTRIES_FAILED,
  COUNTRIES_LOADED,
  LOAD_COUNTRIES,
} from "./types";
import { toastr } from "react-redux-toastr";

export const loadCountries = () => (dispatch, getState) => {
  dispatch({ type: LOAD_COUNTRIES });
  Axios.get(`/api/v1/systemcontrol/countries/`, tokenConfig(getState))

    .then((res) => {
      dispatch({
        type: COUNTRIES_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: COUNTRIES_FAILED, payload: err });
    });
};

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  Axios.get(`/api/v1/accounts/user/`, tokenConfig(getState))

    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: AUTH_ERROR, payload: err });
    });
};
export const loadUse = (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  Axios.get(`/api/v1/accounts/user/`, tokenConfig(getState))

    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: AUTH_ERROR, payload: err });
    });
};

export const log_in = (values) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  Axios.post(`/api/v1/accounts/login/`, values)

    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
        status: res.status,
      });
      return toastr.success("Login", "Login Successful");
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAILED,
        payload: err.response,
      });
      return toastr.error("Login", "Login was not Successful");
    });
};
export const register = (values) => (dispatch) => {
  dispatch({ type: USER_LOADING });
  Axios.post("/api/v1/accounts/register/", values)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      return toastr.success(
        "Registration Success",
        "A mail has been sent to your email address"
      );
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAILED,
        payload: err.response.data,
        status: err.response.status,
      });
      return toastr.error(
        "Registration Failed",
        err.response.data.hasOwnProperty("email")
          ? "This email has been used"
          : err.response.data.hasOwnProperty("phone")
          ? "This phone number has been used  "
          : "Registration was not Successful"
      );
    });
};

export const change_password = (values) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  Axios.put(`/api/v1/accounts/change-password/`, values, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CHANGE_USER_PASSWORD_SUCCESS,
        payload: res.data,
        status: res.status,
      });
      return toastr.success(
        "Passowrd Change Success",
        "Password Change was Successful"
      );
    })
    .catch((err) => {
      dispatch({
        type: CHANGE_USER_PASSWORD_FAILED,
        payload: err.response.data,
        status: err.response.status,
      });
      return toastr.error(
        "Password Change Failed",
        "Password Change was not Successful"
      );
    });
};

export const reset_pass = (email) => (dispatch) => {
  dispatch({ type: USER_LOADING });
  const body = {
    email,
  };
  Axios.post(`/api/v1/accounts/reset/password/`, body)
    .then((res) => {
      dispatch({ type: SENT_EMAIL, payload: res.data, status: res.status });
      return toastr.success(
        "Email Confirmation Success",
        "A mail has been sent to your Email"
      );
    })
    .catch((err) => {
      dispatch({
        type: SENDING_EMAIL_FAILED,
        payload: err.response.data,
        status: err.response.status,
      });
      return toastr.error(
        "Email Confirmation Failed",
        "Check if your email is correct"
      );
    });
};

export const set_pass = (values) => (dispatch) => {
  dispatch({ type: USER_LOADING });

  Axios.post(`/api/v1/accounts/verify/`, values)
    .then((res) => {
      dispatch({
        type: SET_PASSWORD,
        status: res.status,
      });
      return toastr.success("Password Creation Success", "Login to Continue");
    })
    .catch((err) => {
      dispatch({
        type: SET_PASSWORD_FAILED,
        payload: err,
        status: err.response.status,
      });
      return toastr.error("Password Creation Failed", "Check your fields");
    });
};

export const update_profile = (values, id) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  Axios.put(`/api/v1/accounts/artist/${id}/`, values, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_USER,
        payload: res.data,
        status: res.status,
      });
      return toastr.success(
        "Profile Update Success",
        "Enjoy experience like never before"
      );
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_USER_FAILED,
        payload: err,
        status: err.response.status,
      });
      return toastr.error("Profile Update Failed", "Check your fields");
    });
};

export const bvn_verify = (values) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  Axios.post("/api/v1/accounts/verify/bvn/", values, tokenConfig(getState))
    .then((res) => {
      loadUse(dispatch, getState);
      dispatch({
        type: VERIFIED,
        status: res.status,
      });
      return toastr.success(
        "BVN Verification Success",
        "You have access to payouts"
      );
    })
    .catch((err) => {
      dispatch({
        type: VERIFY_FAILED,
        payload: err.response,
        status: err.response.status,
      });
      return toastr.error("BVN Verification Failed", "Check your fields");
    });
};

export const otp_verify = (otp, phone) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  const body = {
    phone,
    otp,
  };
  Axios.post(`/api/v1/accounts/otp/verify/`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: OTP_VERIFIED,
        status: res.status,
      });
      return toastr.success(
        "Phone Verification Success",
        "Complete your profile"
      );
    })
    .catch((err) => {
      dispatch({
        type: OTP_VERIFY_FAILED,
        payload: err.response,
        status: 400,
      });
      return toastr.error("Phone Verification Failed", "Invalid");
    });
};
export const resend_otp = (phone) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  const body = {
    phone,
    otp: "000000",
  };
  Axios.post(`/api/v1/accounts/otp/resend/`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: RESEND_OTP,
        status: res.status,
      });
      return toastr.success(
        "Otp Resend Success",
        "Your One Time Pin has been resent"
      );
    })
    .catch((err) => {
      dispatch({
        type: RESEND_OTP_FAILED,
        payload: err.response,
        status: err.response.status,
      });
      return toastr.error("Otp Resend Failed", "Check your Phone Number");
    });
};
export const upload = (file, id) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  const data = new FormData();
  data.append("image", file);

  Axios.put(`/api/v1/accounts/user/dp/${id}/`, data, tokenConfig(getState))
    .then((res) => {
      loadUse(dispatch, getState);
      dispatch({
        type: UPLOADED,
        status: res.status,
      });
      return toastr.success(
        "Profile Picture Upload Success",
        "Effect takes place after you reload your page"
      );
    })
    .catch((err) => {
      dispatch({
        type: UPLOAD_FAILED,
        payload: err.response,
        status: err.response.status,
      });
      return toastr.error(
        "Profile Picture Upload Failed",
        "Check your file formats"
      );
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
  return toastr.success("Logout", "Logout Successful");
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;
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
