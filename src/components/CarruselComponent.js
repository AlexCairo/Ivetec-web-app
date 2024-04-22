import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgIVETEC1 from "../img/IVETECimg1.jpeg";
import imgIVETEC2 from "../img/IVETECimg2.jpeg";
import imgIVETEC7 from "../img/IVETECimg7.jpeg";
import "../styles/Carrusel.css";


export default class Fade extends Component {
    render() {
      const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className = "carrusel-principal">
          <Slider {...settings}>
            <div className = "container-imagen">
              <img src={imgIVETEC1} alt = "img.png"/>
            </div>
            <div className = "container-imagen">
              <img src={imgIVETEC2} alt = "img.png"/>
            </div>
            <div className = "container-imagen">
              <img src={imgIVETEC7} alt = "img.png"/>
            </div>
          </Slider>
        </div>
      );
    }
  }