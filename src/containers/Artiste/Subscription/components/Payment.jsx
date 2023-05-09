import React from "react";
import {
  usePaystackPayment,
  PaystackButton,
  PaystackConsumer,
} from "react-paystack";

const config = {
  email: "ak@gmail.com",
  amount: 300,
  publicKey: "pk_test_d745bdcc21a79cdc8f5761eb978e0dbb764ed857",
  secretKey: "sk_test_5f80f53c13c689d3de83ea84805aa1f5f435aae5",
};

const PaystackHookExample = () => {
  const initializePayment = usePaystackPayment(config);
  
  return (
    <div>
      <button
        onClick={() => {
          initializePayment();
        }}
      >
        Paystack
      </button>
    </div>
  );
};

const Payment = () => {
  const componentProps = {
    ...config,
    text: "Make Payment",
    onSuccess: () => null,
    onClose: () => null,
  };

  return (
    <>
      {/*  <PaystackHookExample /> */}
      <PaystackButton {...componentProps} />
      <PaystackConsumer {...componentProps}>
        {({ initializePayment }) => (
          <button onClck={() => initializePayment}>Pay me</button>
        )}
      </PaystackConsumer>
    </>
  );
};
export default Payment;
