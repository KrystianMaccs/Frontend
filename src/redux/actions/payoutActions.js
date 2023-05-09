import React from "react";
import Axios from "axios";
import { toastr } from "react-redux-toastr";

import {
  PAYOUT_LOADING,
  CHARGE_LIST_LOADED,
  CHARGE_LIST_LOAD_FAILED,
  CHARGE_ADD_FAILED,
  CHARGE_ADDED,
  CHARGE_REMOVE_FAILED,
  CHARGE_REMOVED,
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
} from "./types";

export const loadCharges = () => (dispatch, getState) => {
  dispatch({ type: PAYOUT_LOADING });
  Axios.get("/api/v1/payouts/charges/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CHARGE_LIST_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: CHARGE_LIST_LOAD_FAILED,
        payload: err.response,
      });
    });
};
export const loadCharge = (dispatch, getState) => {
  dispatch({ type: PAYOUT_LOADING });
  Axios.get("/api/v1/payouts/charges/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CHARGE_LIST_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: CHARGE_LIST_LOAD_FAILED,
        payload: err.response,
      });
    });
};
export const deleteCharge = (id) => (dispatch, getState) => {
  dispatch({ type: PAYOUT_LOADING });
  Axios.delete(`/api/v1/payouts/charges/${id}/`, tokenConfig(getState))
    .then((res) => {
      loadCharge(dispatch, getState);
      dispatch({
        type: CHARGE_REMOVED,
      });
      return toastr.success("Remove Charge", "Charge Removed successfully");
    })
    .catch((err) => {
      dispatch({
        type: CHARGE_REMOVE_FAILED,
        payload: err.response.data,
      });
      return toastr.error(" Remove Charge", "Charge not Removed");
    });
};

export const editCharge = (body, id) => (dispatch, getState) => {
  dispatch({ type: PAYOUT_LOADING });
  Axios.patch(`/api/v1/payouts/charges/${id}/`, body, tokenConfig(getState))
    .then((res) => {
      loadCharge(dispatch, getState);
      dispatch({
        type: CHARGE_UPDATED,
        payload: res.data,
      });

      return toastr.success(" Edit Charge", "Charge successfully updated");
    })
    .catch((err) => {
      dispatch({
        type: CHARGE_UPDATE_FAILED,
        payload: err.response.data,
      });
      return toastr.error(" Edit Charge", "Charge not updated");
    });
};

export const addCharge = (body) => (dispatch, getState) => {
  dispatch({ type: PAYOUT_LOADING });
  Axios.post(`/api/v1/payouts/charges/`, body, tokenConfig(getState))
    .then((res) => {
      loadCharge(dispatch, getState);
      dispatch({
        type: CHARGE_ADDED,
        payload: res.data,
      });

      return toastr.success(" Add Charge", "Charge successfully Added");
    })
    .catch((err) => {
      dispatch({
        type: CHARGE_ADD_FAILED,
        payload: err.response.data,
      });
      return toastr.error(" Add Charge", "Charge not Added");
    });
};

export const payoutList = (month, year) => (dispatch, getState) => {
  dispatch({ type: PAYOUT_LOADING });
  Axios.get(`/api/v1/payouts/${year}/${month < 10 ? "0" + month : month}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: PAYOUT_FOUND,
        payload: res,
      });
      return toastr.success(
        " Payout List",
        `Payout List for ${month}/${year} found`
      );
    })
    .catch((err) => {
      dispatch({
        type: PAYOUT_NOT_FOUND,
        payload: err.response.data,
      });
      return toastr.error(
        " Payout List",
        `Payout List for ${month}/${year} not found`
      );
    });
};
export const trigger = (id) => (dispatch, getState) => {
  dispatch({ type: PAYOUT_LOADING });
  const body = {
    payout: id,
  };
  Axios.post(`/api/v1/payouts/trigger/`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: TRIGGERED_SUCCESSFULLY,
        payload: res,
      });
      return toastr.success(" Trigger Pull", `Trigger pulled successfully`);
    })
    .catch((err) => {
      dispatch({
        type: TRIGGER_UNSUCCESSFUL,
        payload: err.response.data,
      });
      return toastr.error(" Trigger Pull", "Trigger pulled unsuccessfull");
    });
};
export const cashOut = (id) => (dispatch, getState) => {
  dispatch({ type: PAYOUT_LOADING });
  const body = {
    payout: id,
  };
  Axios.post(`/api/v1/payouts/start/payment/`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CASH_OUT_INITIALIZED_SUCCESSFULLY,
        payload: res,
      });
      return toastr.success(" Payout Initialized", `Successfull`);
    })
    .catch((err) => {
      dispatch({
        type: CASH_OUT_INITIALIZATION_FAILED,
        payload: err.response.data,
      });
      return toastr.error(" Payout Initialized", "Unsuccessfull");
    });
};
export const payoutHistory = (year) => (dispatch, getState) => {
  dispatch({ type: PAYOUT_LOADING });
  Axios.get(`/api/v1/payouts/history/${year}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_HISTORY_SUCCESSFULL,
        payload: res.data,
      });
      return toastr.success(
        " Payout List",
        `Payout List History for ${year} found`
      );
    })
    .catch((err) => {
      dispatch({
        type: GET_HISTORY_UNSUCCESSFUL,
        payload: err,
      });
      return toastr.success(
        " Payout List",
        `Payout List History for ${year} not found`
      );
    });
};

export const getHistory = (year) => (dispatch, getState) => {
  dispatch({ type: PAYOUT_LOADING });
  Axios.get(`/api/v1/payouts/artist/${year}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_HISTORY_SUCCESSFULL,
        payload: res.data,
      });
      return toastr.success(
        " Payout List",
        `Payout List History for ${year} found`
      );
    })
    .catch((err) => {
      dispatch({
        type: GET_HISTORY_UNSUCCESSFUL,
        payload: err,
      });
      return toastr.success(
        " Payout List",
        `Payout List History for ${year} not found`
      );
    });
};

export const manualPayout = (type, body) => (dispatch, getState) => {
  dispatch({ type: PAYOUT_LOADING })
  let payout
  let artist_payout_id
  let royalty_payout_id
  Axios.get(`/api/v1/payouts/${body.year}/${body.month < 10 ? "0" + body.month : body.month}/`, tokenConfig(getState))
    .then(res => {
      payout = res.data.id
      Axios.get(
        `/api/v1/payouts/failed/${type.value}/${body.year}/${body.month < 10 ? `0${body.month}` : body.month}/`,
        tokenConfig(getState)
      )
        .then(res => {
          artist_payout_id = res.data.id
          royalty_payout_id = res.data.id
          const bod = {}

          bod['payout'] = res.data.results[0].id
          /*   if (type.id === "artist_payout_id") {
              bod.royalty_payout_id = "4e5e08f9-8b98-43cd-b54a-5b8fc55d5de9"
            }
            else {
              bod.artist_payout_id = "4e5e08f9-8b98-43cd-b54a-5b8fc55d5de9"
            } */
          Axios.post(`/api/v1/payouts/manual/payment/`, bod, tokenConfig(getState))
            .then(res => {
              toastr.success(" Manual Payment", `Manual Payment was Successful`);
              dispatch({ type: MANUAL_PAYMENT_SUCCESS, payload: res.data })
            })
            .catch(err => {
              toastr.error(
                "Manual Payment",
                `Manual Payment was not successful`
              );
              dispatch({ type: MANUAL_PAYMENT_FAILED, payload: err.response.data })
            })
        })

    })


}

export const payoutFailed = (type, month, year) => (dispatch, getState) => {
  dispatch({ type: PAYOUT_LOADING });

  Axios.get(
    `/api/v1/payouts/failed/${type}/${year}/${month < 10 ? `0${month}` : month}/`,
    tokenConfig(getState)
  )
    .then((res) => {
      dispatch({
        type: GOT_FAILED_PAYOUT,
        payload: res.data,
      });
      return toastr.success(" Failed List", `Failed List for ${year} found`);
    })
    .catch((err) => {
      dispatch({
        type: FAILED_PAYOUT_FAILED,
        payload: err,
      });
      return toastr.error(
        " Failed List",
        `Failed List for ${year} not found`
      );
    });
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
