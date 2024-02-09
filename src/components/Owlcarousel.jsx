import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { items } from './Data';


const Owldemo1 = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
      };
  return (
    <Slider {...settings}>
      <div>
        <img src="./images/Owlimg1.webp" alt="" width={{width:'100%'}} />
      </div>
      <div>
      <img src="./images/Owlimg2.webp" alt="" width={{width:'100%'}}/>
      </div>
      <div>
      <img src="./images/Owlimg3.webp" alt="" width={{width:'100%'}}/>
      </div>
      <div>
      <img src="./images/Owlimg4.webp" alt="" width={{width:'100%'}}/>
      </div>
      <div>
      <img src="./images/Owlimg5.webp" alt="" width={{width:'100%'}}/>
      </div>
    
    </Slider>
  )
}

export default Owldemo1