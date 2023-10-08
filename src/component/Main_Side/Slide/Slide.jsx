import './Slide.css'
import { Slide_Data } from '../../../Images/Images'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class Slide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="Slides_Container">
        <Slider {...settings}>
          {
            Slide_Data.map(slide => (
              <div className="slide_container" key={slide.id}>
                <div className="slide_image_container">
                  <img src={slide.cover} alt="" className="slide_image_container_src" />
                  <div className="slide_content">
                    <span className='slide_category'>{slide.category}</span>
                    <h3 className="slide_title">{slide.title}</h3>
                    <h5 className="slide_description">{slide.desc}</h5>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}

