import React from "react";
import { Card, CardBody, Col } from "reactstrap";

import Carousel from "../../../../../shared/components/carousel/CarouselMultiply";
import Slide1 from "../../../../../shared/img/1.jpg";
import Slide2 from "../../../../../shared/img/2.jpg";
import Slide3 from "../../../../../shared/img/3.jpg";
import Slide4 from "../../../../../shared/img/4.jpg";
/* const Slide1 = `${process.env.PUBLIC_URL}/img/1.png`;
const Slide2 = `${process.env.PUBLIC_URL}/img/2.png`;
const Slide3 = `${process.env.PUBLIC_URL}/img/3.png`;
const Slide4 = `${process.env.PUBLIC_URL}/img/4.png`; */

const MusicCarousel = ({ t }) => (
  <Col sm={12} md={12} lg={6} xl={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text"></h5>
        </div>
        <Carousel>
         {/*  <div>
            <img src={Slide1} alt="slide" />
          </div> */}
         { <div>
            <img src={Slide2} alt="slide" width="100px" />
          </div>}
          {/* <div>
            <img src={Slide3} alt="slide" />
          </div> */}
          <div>
            <img src={Slide4} alt="slide" />
          </div>
        {/*   <div>
            <img src={Slide1} alt="slide" />
          </div> */}
         { <div>
            <img src={Slide2} alt="slide" />
          </div>}
         {/*  <div>
            <img src={Slide3} alt="slide" />
          </div> */}
          <div>
            <img src={Slide4} alt="slide" />
          </div>
        </Carousel>
      </CardBody>
    </Card>
  </Col>
);

export default MusicCarousel;
