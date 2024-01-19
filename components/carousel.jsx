import React from "react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReactImageMagnify from "react-image-magnify";

const carousel = ({ images }) => {
  const [active_img, Setactive_img] = useState(null);
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={80}
        className="productCarousel"
      >
        {images?.map((img, i) => (
          <img key={i} src={img.img}/>
          
        ))}
        
      </Carousel>
      
    </div>
  );
};

export default carousel;
