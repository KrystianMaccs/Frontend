import { toastr } from "react-redux-toastr";
import Axios from "axios";
import {
  ADMIN_LOADING,
  ARTISTE_LOADED,
  ARTISTE_LOAD_FAIL,
  ARTISTE_DELETED,
  ARTISTE_DELETE_FAILED,
  ARTISTE_DEACTIVATED,
  ARTISTE_DEACTIVATE_FAILED,
  SUBSCRIPTION_LOADED,
  SUBSCRIPTION_LOAD_FAILED,
  PACKAGE_FAILED,
  PACKAGE_EDITED,
  PACKAGE_DELETED,
  CREATING_PACKAGE,
  PACKAGE_CREATED,
} from "./types";

export const loadArtiste = (url = null) => (dispatch, getState) => {
  dispatch({ type: ADMIN_LOADING });
  Axios.get(url || `/api/v1/systemcontrol/artists/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ARTISTE_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ARTISTE_LOAD_FAIL, payload: err.response });
    });
};
export const loadpackage = () => (dispatch, getState) => {
  dispatch({ type: ADMIN_LOADING });
  Axios.get(`/api/v1/subscriptions/package/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SUBSCRIPTION_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: SUBSCRIPTION_LOAD_FAILED, payload: err });
    });
};
export const loadPackage = (dispatch, getState) => {
  dispatch({ type: ADMIN_LOADING });
  Axios.get(`/api/v1/subscriptions/package/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SUBSCRIPTION_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: SUBSCRIPTION_LOAD_FAILED, payload: err });
    });
};
export const loadArtist = (dispatch, getState) => {
  dispatch({ type: ADMIN_LOADING });
  Axios.get(`/api/v1/systemcontrol/artists/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ARTISTE_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ARTISTE_LOAD_FAIL, payload: err });
    });
};

export const deleteArtiste = (id) => (dispatch, getState) => {
  dispatch({ type: ADMIN_LOADING });
  Axios.delete(
    `/api/v1/systemcontrol/artist/control/${id}/`,
    tokenConfig(getState)
  )
    .then((res) => {
      loadArtist(dispatch, getState);
      dispatch({
        type: ARTISTE_DELETED,
        payload: res.data,
      });
      return toastr.success(
        "Remove Artiste",
        "Artiste was removed Successfully"
      );
    })
    .catch((err) => {
      dispatch({ type: ARTISTE_DELETE_FAILED, payload: err });
      return toastr.error(
        "Remove Artiste",
        "Artiste was not removed Successfully"
      );
    });
};

export const deactivateArtiste = (id) => (dispatch, getState) => {
  dispatch({ type: ADMIN_LOADING });
  Axios.get(
    `/api/v1/systemcontrol/artist/disable/${id}/`,
    tokenConfig(getState)
  )
    .then((res) => {
      loadArtist(dispatch, getState);
      dispatch({
        type: ARTISTE_DEACTIVATED,
        payload: res.data,
      });
      return toastr.success(
        "Deactivate Artiste",
        "Artiste was deactivated Successfully"
      );
    })
    .catch((err) => {
      dispatch({ type: ARTISTE_DEACTIVATE_FAILED, payload: err });
      return toastr.error(
        "Deactivate Artiste",
        "Artiste was not deactivated Successfully"
      );
    });
};
export const addPackage = (body) => (dispatch, getState) => {
  dispatch({ type: CREATING_PACKAGE });
  Axios.post(`/api/v1/subscriptions/package/`, body, tokenConfig(getState))
    .then((res) => {
      loadPackage(dispatch, getState);
      dispatch({
        type: PACKAGE_CREATED,
        payload: res.data,
      });

      return toastr.success(" Add Package", "Package successfully Added");
    })
    .catch((err) => {
      dispatch({
        type: PACKAGE_FAILED,
        payload: err.response.data,
      });
      return toastr.error("Add Package", "Package was not added Successfully");
    });
};
export const editPackage = (body, id) => (dispatch, getState) => {
  dispatch({ type: CREATING_PACKAGE });
  Axios.patch(
    `/api/v1/subscriptions/package/${id}/`,
    body,
    tokenConfig(getState)
  )
    .then((res) => {
      loadPackage(dispatch, getState);
      dispatch({
        type: PACKAGE_EDITED,
        payload: res.data,
      });

      return toastr.success(" Add Package", "Package successfully Updated");
    })
    .catch((err) => {
      dispatch({
        type: PACKAGE_FAILED,
        payload: err.response.data,
      });
      return toastr.error(
        "Add Package",
        "Package was not updated Successfully"
      );
    });
};
export const deletePackage = (id) => (dispatch, getState) => {
  dispatch({ type: CREATING_PACKAGE });
  Axios.delete(`/api/v1/subscriptions/package/${id}/`, tokenConfig(getState))
    .then((res) => {
      loadPackage(dispatch, getState);
      dispatch({
        type: PACKAGE_DELETED,
      });
      return toastr.success("Remove Charge", "Charge Removed successfully");
    })
    .catch((err) => {
      dispatch({
        type: PACKAGE_FAILED,
        payload: err.response.data,
      });
      return toastr.error(
        "Deleted Package",
        "Package was not deleted Successfully"
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
