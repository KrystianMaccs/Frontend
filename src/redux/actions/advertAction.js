import Axios from "axios";
import { toastr } from "react-redux-toastr";
import {
  ADVERT_LOADING,
  ADVERT_PLAN_LOADING,
  CREATED_ADVERT,
  ADVERT_DELETED,
  ADVERT_EDITED,
  ADVERT_PLAN_DELETED,
  ADVERT_FAILED,
  ADVERT_PLAN_EDITED,
  ADVERT_PLAN_FAILED,
  ADVERT_LOADED,
  ADVERT_PLAN_LOADED,
  ADVERT_PUBLISHED,
  CREATED_ADVERT_PLAN,
} from "./types";

export const loadPlan = () => (dispatch, getState) => {
  dispatch({ type: ADVERT_PLAN_LOADING });
  Axios.get(`/api/v1/adverts/admin/plans/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADVERT_PLAN_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ADVERT_PLAN_FAILED, payload: err });
    });
};
export const plan = (dispatch, getState) => {
  dispatch({ type: ADVERT_PLAN_LOADING });
  Axios.get(`/api/v1/adverts/admin/plans/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADVERT_PLAN_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ADVERT_PLAN_FAILED, payload: err });
    });
};

export const loadAdvert = (dispatch, getState) => {
  dispatch({ type: ADVERT_LOADING });
  Axios.get(`/api/v1/adverts/admin/all-adverts/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADVERT_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ADVERT_FAILED, payload: err });
    });
};
export const advert = () => (dispatch, getState) => {
  dispatch({ type: ADVERT_LOADING });
  Axios.get(`/api/v1/adverts/admin/all-adverts/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADVERT_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ADVERT_FAILED, payload: err });
    });
};

export const publish = () => (dispatch, getState) => {
  dispatch({ type: ADVERT_LOADING });
  Axios.get(`/api/v1/adverts/publish/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADVERT_PUBLISHED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ADVERT_FAILED, payload: err });
    });
};

export const addPlan = (body) => (dispatch, getState) => {
  dispatch({ type: ADVERT_PLAN_LOADING });
  Axios.post(`/api/v1/adverts/admin/plans/`, body, tokenConfig(getState))
    .then((res) => {
      plan(dispatch, getState);
      dispatch({
        type: CREATED_ADVERT_PLAN,
        payload: res.data,
      });

      return toastr.success(
        " Add Avert Plan",
        "Advert Plan successfully Added"
      );
    })
    .catch((err) => {
      dispatch({
        type: ADVERT_PLAN_FAILED,
        payload: err.response.data,
      });
      return toastr.error(
        "Add Advert Plan",
        "Advert Plan was not added Successfully"
      );
    });
};

export const addAdvert = (body) => (dispatch, getState) => {
  dispatch({ type: ADVERT_LOADING });
  Axios.post(`/api/v1/adverts/admin/all-adverts/`, body, tokenConfig(getState))
    .then((res) => {
      loadAdvert(dispatch, getState);
      dispatch({
        type: CREATED_ADVERT,
        payload: res.data,
      });

      return toastr.success(" Add Avert", "Advert successfully Added");
    })
    .catch((err) => {
      dispatch({
        type: ADVERT_FAILED,
        payload: err.response.data,
      });
      return toastr.error("Add Advert", "Advert was not added Successfully");
    });
};

export const editPlan = (body, id) => (dispatch, getState) => {
  dispatch({ type: ADVERT_PLAN_LOADING });
  Axios.patch(
    `/api/v1/adverts/admin/plans/details/${id}/`,
    body,
    tokenConfig(getState)
  )
    .then((res) => {
      plan(dispatch, getState);
      dispatch({
        type: ADVERT_PLAN_EDITED,
        payload: res.data,
      });

      return toastr.success(
        " Edit Advert Plan",
        "Advert Plan successfully Updated"
      );
    })
    .catch((err) => {
      dispatch({
        type: ADVERT_PLAN_FAILED,
        payload: err.response.data,
      });
      return toastr.error(
        " Edit Advert Plan",
        "Advert Plan was not updated Successfully"
      );
    });
};

export const editAdvert = (body, id) => (dispatch, getState) => {
  dispatch({ type: ADVERT_LOADING });
  Axios.patch(
    `/api/v1/adverts/admin/adverts/${id}/`,
    body,
    tokenConfig(getState)
  )
    .then((res) => {
      loadAdvert(dispatch, getState);
      dispatch({
        type: ADVERT_EDITED,
        payload: res.data,
      });

      return toastr.success(" Edit Advert", "Advert Plan successfully Updated");
    })
    .catch((err) => {
      dispatch({
        type: ADVERT_FAILED,
        payload: err.response.data,
      });
      return toastr.error(
        " Edit Advert",
        "Advert Plan was not updated Successfully"
      );
    });
};

export const deletePlan = (id) => (dispatch, getState) => {
  dispatch({ type: ADVERT_PLAN_LOADING });
  Axios.delete(
    `/api/v1/adverts/admin/plans/details/${id}/`,
    tokenConfig(getState)
  )
    .then((res) => {
      plan(dispatch, getState);
      dispatch({
        type: ADVERT_PLAN_DELETED,
      });
      return toastr.success(
        "Remove Advert Plan",
        "Advert Plan Removed successfully"
      );
    })
    .catch((err) => {
      dispatch({
        type: ADVERT_PLAN_FAILED,
        payload: err.response.data,
      });
      return toastr.error(
        "Deleted Advert Plan",
        "Advert Plan was not deleted Successfully"
      );
    });
};
export const deleteAdvert = (id) => (dispatch, getState) => {
  dispatch({ type: ADVERT_LOADING });
  Axios.delete(`/api/v1/adverts/admin/adverts/${id}/`, tokenConfig(getState))
    .then((res) => {
      loadAdvert(dispatch, getState);
      dispatch({
        type: ADVERT_DELETED,
      });
      return toastr.success(
        "Remove Advert Plan",
        "Advert Plan Removed successfully"
      );
    })
    .catch((err) => {
      dispatch({
        type: ADVERT_FAILED,
        payload: err.response.data,
      });
      return toastr.error(
        "Deleted Advert Plan",
        "Advert Plan was not deleted Successfully"
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
