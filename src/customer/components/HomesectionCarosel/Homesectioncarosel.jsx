import React from "react";
import AliceCarousel from "react-alice-carousel";
import Homesectioncard from "../Homesectioncard/Homesectioncard";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';  
import { mens_kurta } from '../../../Data/Menskurtha'



const Homesectioncarosel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.4 },
  };
  // const items = [1,1,1,1,1,1,1,1,1,1,1,].map((item) => <Homesectioncard />);
  const items = mens_kurta.slice(0,10).map((item) => <Homesectioncard product={item}/>);
  return (
    <div className=" px-4 lg:px-8 border ">
      <div className=" relative p-5 " >
      <AliceCarousel
        items={items}
        disableButtonsControls
        // autoPlay
        // autoPlayInterval={1000}
        infinite
        responsive={responsive}
        disableDotsControls
      />
      <Button variant="contined" className="z-10 bg-white " sx={{position:'absolute',top:'8rem', right:'0rem',
         transform:"translateX(51%) rotate(90deg)",bgcolor:"white", }}>
        <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)",color:"black"}}/>
      </Button>
      <Button variant="contined" className="z-10 bg-white " sx={{position:'absolute',top:'8rem', left:'0rem',
         transform:"translateX(50%) rotate(-90deg)",bgcolor:"white", }}>
      <KeyboardArrowRightIcon sx={{transform:"rotate(-90deg)",color:"black"}}/>
      </Button>
    </div>
    </div>
  );
};

export default Homesectioncarosel;
