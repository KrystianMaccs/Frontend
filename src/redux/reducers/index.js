import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import themeReducer from "./themeReducer";
import rtlReducer from "./rtlReducer";
import sidebarReducer from "./sidebarReducer";
import cryptoTableReducer from "./cryptoTableReducer";
import newOrderTableReducer from "./newOrderTableReducer";
import customizerReducer from "./customizerReducer";
import todoReducer from "./todoReducer";
import songs from "./songs";
import auth from "./auth";
import errors from "./errors";
import beneficiary from "./beneficiary";
import payout from "./payout";
import admin from "./admin";
import advert from "./advert";

export default combineReducers({
  theme: themeReducer,
  rtl: rtlReducer,
  sidebar: sidebarReducer,
  cryptoTableReducer,
  newOrderTableReducer,
  customizerReducer,
  todoReducer,
  auth,
  form: formReducer,
  toastr: toastrReducer,
  errors,
  songs,
  beneficiary,
  payout,
  admin,
  advert,
});
