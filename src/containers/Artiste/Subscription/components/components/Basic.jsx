import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import { usePaystackPayment } from "react-paystack";
import { connect } from "react-redux";
import { createSubscription } from "../../../../../redux/actions/songActions";
import CurrencyNgnIcon from "mdi-react/CurrencyUsdCircleIcon";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "T-shirt",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button
        type="submit"
        disabled={!stripe}
        className="pricing-card__button"
        color="primary"
      >
        Pay
      </Button>
    </form>
  );
};

const Basic = ({ classes, styles, s, user, createSubscription }) => {
  const stripePromise = loadStripe("pk_test_51IjjhCKVJpjSXxYpL4pJsJCfwbvrBhEekm0n2ACycWcbTPMdJhRwrVOtmk07DMyd0Brpck5IHJqkp271RH8JYvJg00wg1vKuJG");
  
  const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
      event.preventDefault();
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "T-shirt",
              },
              unit_amount: s.price,
            },
            quantity: 1,
          },
        ],
      });
    };

    return (
      <form onSubmit={handleSubmit}>
        <CardElement />
        <Button
          type="submit"
          disabled={!stripe}
          className="pricing-card__button"
          color="primary"
        >
          Pay
        </Button>
      </form>
    );
  };

 /*  const config = {
    email: user.email,
    amount: s.price * 100,
    publicKey: process.env.REACT_APP_LIVE,
    firstname: user.first_name,
    lastname: user.last_name,
    currency: "NGN",
  };
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    createSubscription(
      user.id,
      s.id,
      reference.reference
    );

  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.

  };
  const ClickAction = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <Button
          className="pricing-card__button"
          color="primary"
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Add a Distribution Plan
        </Button>
      </div>
    );
  }; */

  return (
    <Col md={6} xl={4} sm={12}>
      <Card>
        <CardBody className={classes} style={styles}>
          <div className="pricing-card__body">
            <h1 className="pricing-card__plan">{s.title}</h1>
            <hr />
            <p className="pricing-card__price">
              <CurrencyNgnIcon size={66} />
              {`${s.price}`}
            </p>
            <p className="pricing-card__feature">
              {s.tracks_count} {s.tracks_count === 1 ? "Song" : "Songs"}
            </p>
            <p className="pricing-card__feature">200mb</p>
            <p className="pricing-card__feature">Yearly Update</p>
            <p className="pricing-card__feature">Free Support</p>
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
            {/*   <ClickAction /> */}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default connect((state) => ({}), { createSubscription })(Basic);
