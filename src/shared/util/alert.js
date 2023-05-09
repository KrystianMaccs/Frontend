export const getAlert = (val, type, info) => {
  switch (val) {
    case 200 || 201:
      return `${type} was successful, ${info ? info : null}`;
    case 400:
      return `${type} was not successful, ${info ? info : null}`;
    case 101:
      return `Incomplete field.Make sure all fields have been filled`;

    case 103:
      return `An OTP has been sent to your mobile number`;
    case 104:
      return `The OTP has been resent, check your phone for messages`;
    default:
      return null;
  }
};

export const getTitle = (val) => {
  switch (val) {
    case 200:
      return "SUCCESS";
    case 400:
      return "FAILED";
    case 101:
      return "FAILED";
    case 102:
      return "SUCCESS";
    case 104:
      return "SUCCESS";
    default:
      return null;
  }
};
