import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Carouser() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="google_512.png"
          alt="Google"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="facebook_512.png"
          alt="Facebook"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="instagram_512.png"
          alt="Instagram"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="linkedin_512.png"
          alt="LinkedIn"
        />
      </Carousel.Item>
    </Carousel>
  );
}
