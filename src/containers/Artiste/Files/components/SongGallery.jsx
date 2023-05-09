import React, { Component } from "react";
import { Col } from "reactstrap";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

class MyGallery extends Component {
  render() {
    return (
      <Col md={12} xl={6} lg={6} sm={12} xs={12}>
        <ImageGallery items={images} />
      </Col>
    );
  }
}

export default MyGallery;
