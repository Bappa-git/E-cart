import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imge } from './OwlImage';


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
        <img src={imge[0].url} alt="" width={{width:'100%'}} />
      </div>
      <div>
      <img src={imge[1].url} alt="" width={{width:'100%'}}/>
      </div>
      <div>
      <img src={imge[2].url} alt="" width={{width:'100%'}}/>
      </div>
      <div>
      <img src={imge[3].url} alt="" width={{width:'100%'}}/>
      </div>
      <div>
      <img src={imge[4].url} alt="" width={{width:'100%'}}/>
      </div>
    </Slider>
  )
}

export default Owldemo1