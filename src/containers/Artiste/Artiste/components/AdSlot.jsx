import React, { useState, useEffect } from "react";
import { Col, Card, CardBody, Media } from "reactstrap";

//import PropTypes from "prop-types";

const Royalties = ({ publish }) => {
  let [item, setItem] = useState(null);
  useEffect(() => {
    if (publish.results) {
      setItem(
        publish.results[Math.floor(Math.random() * publish.results.length)]
      );
    }

  })
  const random = () => {
    if (publish.results > 0) {
      setItem(
        publish.results[Math.floor(Math.random() * publish.results.length)]
      );
    }
  };
  setInterval(random, 40000);
  return (
    <Col md={12} xl={12} lg={12} sm={12} xs={12} style={{}}>
      {item ? (
        <Card style={{ position: "relative", alignItems:"center" }}>

          <Media style={{ position: "relative" }}>

            <a href={item.link} style={{ maxHeight: "120px", justifyContent: "center", maxWidth: "360px" }}>
              <img src={item.file} alt={"well it works"} style={{ maxHeight: "120px", justifyContent: "center", maxWidth: "360px" }} />
            </a>

          </Media>

        </Card>
      ) : null}
    </Col>

  );
}

export default Royalties;
