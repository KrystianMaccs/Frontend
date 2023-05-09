import React from "react";
import { Col, Container, Row } from "reactstrap";
import Basic from "./components/Basic";

const classes = [];
const styles = [];
const class1 = "pricing-card pricing-card--primary";
const class2 = "pricing-card pricing-card--danger";
const class3 = "pricing-card pricing-card--warning";
const style1 = {
  background: "linear-gradient(45deg, #ee0979, #ff6a00)",
  color: "#fff",
  fontWeight: "lighter",
  boxShadow: "-1px 1px 19px black",
};
const style2 = {
  background: "linear-gradient(45deg, #000428, #004e92)",
  color: "#fff",
  fontWeight: "lighter",
  boxShadow: "-1px 1px 19px black",
};
const style3 = {
  background: "linear-gradient(45deg, #43a047, #1de9b6)",
  color: "#fff",
  fontWeight: "lighter",
  boxShadow: "-1px 1px 19px black",
};
const style4 = {
  background: "linear-gradient(45deg, #000000, #e74c3c)",
  color: "#fff",
  fontWeight: "lighter",
  boxShadow: "-1px 1px 19px black",
};
classes.push(class1);
classes.push(class2);
classes.push(class3);
styles.push(style4);
styles.push(style1);
styles.push(style2);
//styles.push(style3);
const SubscriptionList = ({ subscription, user }) => (
  <Container>
    <Row>
      <Col md={12}></Col>
    </Row>
    <Row dir="ltr">
      {subscription
        ? subscription.map((s, i) => {
            return (
              <Basic
                s={s}
                classes={classes[Math.floor(Math.random() * classes.length)]}
                styles={styles[Math.floor(Math.random() * styles.length)]}
                user={user}
              />
            );
          })
        : null}
    </Row>
  </Container>
);

export default SubscriptionList;
