import {
  SONG_LOADING,
  ALBUM_LOADED,
  ALBUM_LOAD_FAILED,
  ACCESS_LOADED,
  ACCESS_LOADED_FAILED,
  SONG_LOADED,
  SONG_LOAD_FAILED,
  SUBSCRIPTION_LOAD_FAILED,
  SUBSCRIPTION_LOADED,
  MY_SUBSCRIPTION_LOADED,
  MY_SUBSCRIPTION_LOAD_FAILED,
  ADD_SONG_TO_SUBSCRIPTION,
  ADD_SONG_TO_SUBSCRIPTION_FAILED,
  ADDING_BENEFICIARY_FAILED,
  ADDED_A_BENEFICIARY,
  GENRE_LOAD_FAILED,
  GENRE_LOADED,
  SONG_UPLOADED,
  SONG_UPLOAD_FAILED,
  LABEL_CREATED,
  LABEL_CREATED_FAILED,
  LABEL_LOADED,
  LABEL_LOAD_FAILED,
  LABEL_DELETED,
  LABEL_DELETE_FAILED,
  LABEL_UPDATED,
  LABEL_UPDATE_FAILED,
  SONG_DELETED,
  SONG_DELETE_FAILED,
  BENEFICIARY_UPDATED,
  BENEFICIARY_UPDATE_FAILED,
  BENEFICIARY_DELETED,
  BENEFICIARY_DELETE_FAILED,
  SONG_UPDATE_FAILED,
  SONG_UPDATED,
  SONG_SALES_SUCCESS,
  SONG_SALES_FAILED,
  SONG_REDISTRIBUTED,
  SONG_REDISTRIBUTE_FAILED,
  SONG_LINK_FAILED,
  SONG_LINK_LOADED,
  SONG_STATUS_LOADED,
  SONG_STATUS_FAILED,
} from "../actions/types";

const initialState = {
  isLoading: false,
  album: {},
  albumNo: 0,
  access: {},
  song: {},
  songNo: 0,
  subscription: {},
  mySubscription: {},
  recentUpload: {},
  label: {},
  song_sales: {},
  link: {},
  lLoad: false,
  status: {},
  sLoad: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SONG_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SONG_REDISTRIBUTED:
    case SONG_REDISTRIBUTE_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case SONG_LINK_LOADED:
      return {
        ...state,
        isLoading: false,
        link: action.payload,
        lLoad: true,
      };
    case SONG_STATUS_LOADED:
      return {
        ...state,
        isLoading: false,
        status: action.payload,
        sLoad: true,
      };
    case SONG_STATUS_FAILED:
    case SONG_LINK_FAILED:
      return {
        ...state,
        isLoading: false,
        lLoad: false,
        sLoad: false,
      };
    case ALBUM_LOADED:
      return {
        ...state,
        isLoading: false,
        album: action.payload,
        albumNo: action.payload.count,
      };
    case LABEL_LOADED:
      return {
        ...state,
        isLoading: false,
        label: action.payload,
      };
    case ALBUM_LOAD_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case ACCESS_LOADED:
      return {
        ...state,
        isLoading: false,
        access: action.payload,
      };
    case SONG_LOADED:
      return {
        ...state,
        isLoading: false,
        song: action.payload,
        songNo: action.payload.count,
      };
    case ACCESS_LOADED_FAILED:
    case SONG_LOAD_FAILED:
    case SUBSCRIPTION_LOAD_FAILED:
    case MY_SUBSCRIPTION_LOAD_FAILED:
    case ADD_SONG_TO_SUBSCRIPTION_FAILED:
    case ADDING_BENEFICIARY_FAILED:
    case GENRE_LOAD_FAILED:
    case SONG_UPLOAD_FAILED:
    case LABEL_CREATED_FAILED:
    case LABEL_LOAD_FAILED:
    case LABEL_DELETE_FAILED:
    case SONG_DELETE_FAILED:
    case LABEL_UPDATE_FAILED:
    case BENEFICIARY_UPDATE_FAILED:
    case BENEFICIARY_DELETE_FAILED:
    case SONG_UPDATE_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case SUBSCRIPTION_LOADED:
      return {
        ...state,
        isLoading: false,
        subscription: action.payload,
      };
    case SONG_UPLOADED:
      return {
        ...state,
        isLoading: false,
        recentUpload: action.payload,
      };
    case GENRE_LOADED:
      return {
        ...state,
        isLoading: false,
        genres: action.payload,
      };
    case MY_SUBSCRIPTION_LOADED:
      return {
        ...state,
        isLoading: false,
        mySubscription: action.payload,
      };
    case LABEL_CREATED:
      return {
        ...state,
        isLoading: false,
      };
    case LABEL_DELETED:
    case SONG_DELETED:
      return {
        ...state,
        isLoading: false,
      };
    case LABEL_UPDATED:
      return {
        ...state,
        isLoading: false,
      };
    case SONG_SALES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        song_sales: action.payload,
      };
    case ADD_SONG_TO_SUBSCRIPTION:
    case ADDED_A_BENEFICIARY:
    case BENEFICIARY_UPDATED:
    case BENEFICIARY_DELETED:
    case SONG_UPDATED:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
