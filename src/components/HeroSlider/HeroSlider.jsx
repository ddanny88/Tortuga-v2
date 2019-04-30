import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './hero.css';

const HeroSlider = () => {
    return (
        <div className="Hero">
        <Carousel 
         interval={ 5000 }
         stopOnHover={ false }
         showStatus={ false } 
         showThumbs= { false } 
         infiniteLoop={ true } 
         autoPlay={ true } 
         swipeable={ true }
         showArrows={ false }
         showIndicators={ false }
        >
             <div>
                 <img src="https://s3.us-east-2.amazonaws.com/tortuga-slider/thewinefine.png" alt="first"/>
                
             </div>
             <div>
                 <img src="https://s3.us-east-2.amazonaws.com/tortuga-slider/finishLiquor.png" alt="second" />
                
             </div>
             <div>
                 <img src="https://s3.us-east-2.amazonaws.com/tortuga-slider/finishGin.png" alt="second" />
                
             </div>
         </Carousel>
         </div>
    )
}

export default HeroSlider;


/**
 * React Responsive Carousel
 * https://www.npmjs.com/package/react-responsive-carousel
 * 
 */