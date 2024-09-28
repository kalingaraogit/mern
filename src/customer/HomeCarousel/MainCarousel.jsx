import React from 'react';
import { Md } from './Md';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const MainCarousel = () => {
    const items = Md.map((item)=><img
    className="cursor-pointer"
    src={item.image}
    alt=""
    role="presentation"
  />);
  return (
    <div>
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    </div>
  )
}

export default MainCarousel
