import React from "react";
import { BasicNotification } from "../../shared/components/Notification";
import { getAlert, getTitle } from "./alert";

let notification = null;

export const notify = (val, type, info) => {
  let title = getTitle(val);
  let alert = getAlert(val, type, info);

  notification.notice({
    content: <BasicNotification title={title} message={alert} />,
    duration: 6,
    closable: true,
    style: { top: 0, left: "calc(100vw - 100%)" },
    className: "right-up ltr-support",
  });
};
