import { useToasts } from "react-toast-notifications";

export const ToasterNotification = ({ content, type }) => {
  const { addToast } = useToasts();
  return addToast(content, {
    appearance: type,
    autoDismiss: true,
  });
};
