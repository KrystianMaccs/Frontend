import Axios from "axios";
import { toastr } from "react-redux-toastr";
import {
  SONG_LOADING,
  SONG_UPLOADED,
  SONG_UPLOAD_FAILED,
  ALBUM_LOADED,
  ALBUM_LOAD_FAILED,
  ACCESS_LOADED_FAILED,
  ACCESS_LOADED,
  SONG_LOADED,
  SONG_LOAD_FAILED,
  SUBSCRIPTION_LOADED,
  SUBSCRIPTION_LOAD_FAILED,
  SUBSCRIPTION_CREATE_FAILED,
  SUBSCRIPTION_CREATED,
  MY_SUBSCRIPTION_LOAD_FAILED,
  MY_SUBSCRIPTION_LOADED,
  ADD_SONG_TO_SUBSCRIPTION,
  ADD_SONG_TO_SUBSCRIPTION_FAILED,
  ADDING_BENEFICIARY_FAILED,
  ADDED_A_BENEFICIARY,
  GENRE_LOADED,
  GENRE_LOAD_FAILED,
  LABEL_LOAD_FAILED,
  LABEL_LOADED,
  LABEL_CREATED_FAILED,
  LABEL_CREATED,
  LABEL_DELETED,
  LABEL_DELETE_FAILED,
  LABEL_UPDATE_FAILED,
  LABEL_UPDATED,
  SONG_DELETED,
  SONG_DELETE_FAILED,
  BENEFICIARY_DELETE_FAILED,
  BENEFICIARY_DELETED,
  BENEFICIARY_UPDATE_FAILED,
  BENEFICIARY_UPDATED,
  SONG_UPDATE_FAILED,
  SONG_UPDATED,
  SONG_SALES_FAILED,
  SONG_SALES_SUCCESS,
  SONG_REDISTRIBUTED,
  SONG_REDISTRIBUTE_FAILED,
  SONG_STATUS_LOADED,
  SONG_STATUS_FAILED,
  SONG_LINK_FAILED,
  SONG_LINK_LOADED,
} from "./types";
import { loadUse } from "../actions/authActions";

export const redistributeSong = (body) => (dispatch, getState) => {
  dispatch({ type: SONG_LOADING });
  Axios.post(`/api/v1/subscriptions/redistribute/`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SONG_REDISTRIBUTED,
        payload: res.data,
      });
      return toastr.success(
        "Song Redistribution",
        "Your song has been redistributed"
      );
    })
    .catch((err) => {
      dispatch({ type: SONG_REDISTRIBUTE_FAILED, payload: err });
      return toastr.error(
        "Song Redistribution",
        "Your Song has not been redistributed"
      );
    });
};
export const songStatus = (body) => (dispatch, getState) => {
  dispatch({ type: SONG_LOADING });
  Axios.post(`/api/v1/songs/distribution/status/`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SONG_STATUS_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SONG_STATUS_FAILED,
        payload: err,
      });
    });
};

export const songLink = (body) => (dispatch, getState) => {
  dispatch({ type: SONG_LOADING });
  Axios.post(`/api/v1/songs/links/`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SONG_LINK_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SONG_LINK_FAILED,
        payload: err,
      });
    });
};

export const loadAccess = (dispatch, getState) => {
  dispatch({ type: SONG_LOADING });
  Axios.get(`/api/v1/songs/access/available/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ACCESS_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ACCESS_LOADED_FAILED, payload: err });
    });
};

export const loadSubscription = (dispatch, getState) => {
  dispatch({ type: SONG_LOADING });
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

export const songSales = (id) => (dispatch, getState) => {
  dispatch({ type: SONG_LOADING });
  Axios.get(`/api/v1/payouts/songsales/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SONG_SALES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SONG_SALES_FAILED,
        payload: err,
      });
    });
};

export const loadSong = (dispatch, getState) => {
  Axios.get(`/api/v1/songs/all/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SONG_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: SONG_LOAD_FAILED, payload: err });
    });
};

export const loadGenre = (dispatch, getState) => {
  Axios.get(`/api/v1/songs/genres/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GENRE_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GENRE_LOAD_FAILED, payload: err });
    });
};
export const loadLabel = (dispatch, getState) => {
  Axios.get(`/api/v1/songs/labels/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LABEL_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: LABEL_LOAD_FAILED, payload: err });
    });
};

export const loadAlbum = () => (dispatch, getState) => {
  dispatch({ type: SONG_LOADING });
  Axios.get(`/api/v1/songs/albums/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ALBUM_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: ALBUM_LOAD_FAILED, payload: err });
    });

  loadSong(dispatch, getState);
  loadAccess(dispatch, getState);
  loadSubscription(dispatch, getState);
  loadGenre(dispatch, getState);
  loadMySubscription(dispatch, getState);
  loadLabel(dispatch, getState);
};
export const loadMySubscription = (dispatch, getState) => {
  dispatch({ type: SONG_LOADING });
  Axios.get(`/api/v1/subscriptions/artist/`, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: MY_SUBSCRIPTION_LOADED, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: MY_SUBSCRIPTION_LOAD_FAILED, payload: err })
    );
};

export const songUpload = (data, id) => (dispatch, getState) => {
  dispatch({ type: SONG_LOADING });
  Axios.post(`/api/v1/songs/new/${id}/`, data, tokenConfig(getState), {
    timeout: 120000,
  })
    .then((res) => {
      dispatch({
        type: SONG_UPLOADED,
        payload: res.data,
      });
      loadSong(dispatch, getState);
      loadUse(dispatch, getState);
      return toastr.success(
        "Song Upload Success",
        "You can view Royalty for the song"
      );
    })
    .catch((err) => {
      dispatch({
        type: SONG_UPLOAD_FAILED,
        payload: err.response.data || "",
        status: err.response.status || "",
      });
      return toastr.error("Song Upload Failed", "Check your file formats");
    });
};

export const createLabel = (body) => (dispatch, getState) => {
  dispatch({ type: SONG_LOADING });
  Axios.post(`/api/v1/songs/labels/`, body, tokenConfig(getState))
    .then((res) => {
      loadLabel(dispatch, getState);
      dispatch({
        type: LABEL_CREATED,
        payload: res.data,
      });
      return toastr.success("Create Label", "Label Created Successfully");
    })
    .catch((err) => {
      dispatch({ type: LABEL_CREATED_FAILED, payload: err });
      return toastr.error("Create Label", "Label Not Created");
    });
};

export const deleteLabel = (id) => (dispatch, getState) => {
  dispatch({ type: SONG_LOADING });
  Axios.delete(`/api/v1/songs/labels/${id}/`, tokenConfig(getState))
    .then((res) => {
      loadLabel(dispatch, getState);
      dispatch({
        type: LABEL_DELETED,
        payload: res.data,
      });
      return toastr.success("Delete Label", "Label Deleted Successfully");
    })
    .catch((err) => {
      dispatch({ type: LABEL_DELETE_FAILED, payload: err });
      return toastr.error("Delete Label", "Label Not Deleted");
    });
};

export const editLabel = (body, id) => (dispatch, getState) => {
  dispatch({ type: SONG_LOADING });
  Axios.patch(`/api/v1/songs/labels/${id}/`, body, tokenConfig(getState))
    .then((res) => {
      loadLabel(dispatch, getState);
      dispatch({
        type: LABEL_UPDATED,
        payload: res.data,
      });
      return toastr.success("Edit Label", "Label Edited Successfully");
    })
    .catch((err) => {
      dispatch({ type: LABEL_UPDATE_FAILED, payload: err });
      return toastr.error("Edit Label", "Label Not Edited");
    });
};

export const deleteSong = (id) => (dispatch, getState) => {
  dispatch({ type: SONG_LOADING });
  Axios.delete(`/api/v1/songs/details/${id}/`, tokenConfig(getState))
    .then((res) => {
      loadSong(dispatch, getState);
      dispatch({
        type: SONG_DELETED,
        payload: res.data,
      });
      return toastr.success("Delete Song", "Song Deleted Successfully");
    })
    .catch((err) => {
      dispatch({ type: SONG_DELETE_FAILED, payload: err });
      return toastr.error("Delete Song", "Song Not Deleted");
    });
};

export const editSong = (body, id) => (dispatch, getState) => {
  dispatch({ type: SONG_LOADING });
  Axios.patch(`/api/v1/songs/details/${id}/`, body, tokenConfig(getState))
    .then((res) => {
      loadSong(dispatch, getState);
      dispatch({
        type: SONG_UPDATED,
        payload: res.data,
      });
      return toastr.success("Edit Song", "Song Edited Successfully");
    })
    .catch((err) => {
      dispatch({ type: SONG_UPDATE_FAILED, payload: err.response.data });
      return toastr.error("Edit Song", "Song Not Edited");
    });
};

export const createSubscription = (artist, offer, reference) => (
  dispatch,
  getState
) => {
  const body = {
    artist,
    reference,
  };
  body["package"] = offer;
  dispatch({ type: SONG_LOADING });
  Axios.post(`/api/v1/subscriptions/artist/`, body, tokenConfig(getState))
    .then((res) => {
      loadMySubscription(dispatch, getState);
      dispatch({
        type: SUBSCRIPTION_CREATED,
        payload: res.data,
      });
      return toastr.success(
        "Subscription Creation Success",
        "You can now add Songs to this Subscription"
      );
    })
    .catch((err) => {
      dispatch({
        type: SUBSCRIPTION_CREATE_FAILED,
        payload: err.response.data,
      });
      return toastr.error("Subscription Creation Failed", "Error");
    });
};
export const addSongToSubsriptions = (artist, plan, song) => (
  dispatch,
  getState
) => {
  const body = {
    artist,
    song,
    plan,
  };
  dispatch({ type: SONG_LOADING });
  Axios.post(`/api/v1/subscriptions/song/add/`, body, tokenConfig(getState))
    .then((res) => {
      loadMySubscription(dispatch, getState);
      loadSong(dispatch, getState);
      dispatch({
        type: ADD_SONG_TO_SUBSCRIPTION,
        payload: res.data,
      });
      return toastr.success(
        "Add Song to Subscription Success",
        "Your song has been successfully added to your subscription"
      );
    })
    .catch((err) => {
      dispatch({
        type: ADD_SONG_TO_SUBSCRIPTION_FAILED,
        payload: err.response.data,
      });
      return toastr.error(
        "Add Song to Subscription Failed",
        err.response.data[0]
      );
    });
};
export const addBeneficiary = (value) => (dispatch, getState) => {
  dispatch({ type: SONG_LOADING });
  Axios.post(`/api/v1/songs/royalty/add/`, value, tokenConfig(getState))
    .then((res) => {
      loadSong(dispatch, getState);
      dispatch({
        type: ADDED_A_BENEFICIARY,
        payload: res.data,
      });
      return toastr.success(
        "Adding Beneficiary to Song",
        "Notify your Beneficiary to check his/her mail"
      );
    })
    .catch((err) => {
      dispatch({
        type: ADDING_BENEFICIARY_FAILED,
        payload: err.response.data,
      });
      return toastr.error(
        "Adding Beneficiary to Song Failed",
        err.response.data[0]
      );
    });
};

export const editBeneficiary = (body, id) => (dispatch, getState) => {
  dispatch({ type: SONG_LOADING });
  Axios.patch(
    `/api/v1/songs/royalty/details/${id}/`,
    body,
    tokenConfig(getState)
  )
    .then((res) => {
      loadSong(dispatch, getState);
      dispatch({
        type: BENEFICIARY_UPDATED,
        payload: res.data,
      });
      return toastr.success(
        "Update Beneficiary",
        "Notify your Beneficiary to check his/her mail"
      );
    })
    .catch((err) => {
      dispatch({
        type: BENEFICIARY_UPDATE_FAILED,
        payload: err.response.data,
      });
      return toastr.error("Updating Beneficiary Failed", err.response.data[0]);
    });
};
export const deleteBeneficiary = (id) => (dispatch, getState) => {
  dispatch({ type: SONG_LOADING });
  Axios.delete(`/api/v1/songs/royalty/details/${id}/`, tokenConfig(getState))
    .then((res) => {
      loadSong(dispatch, getState);
      dispatch({
        type: BENEFICIARY_DELETED,
        payload: res.data,
      });
      return toastr.success(
        "Delete Beneficiary",
        "Beneficiary no longer have access to payouts"
      );
    })
    .catch((err) => {
      dispatch({
        type: BENEFICIARY_DELETE_FAILED,
        payload: err.response.data,
      });
      return toastr.error("Updating Beneficiary Failed", err.response.data[0]);
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
