import React from "react";
import Homesectioncard from "../Homesectioncard/Homesectioncard";
import { mens_kurta } from "../../../Data/mens_kurta";
import './Homesectioncarosel.css';

const Homesectioncarosel = () => {
  const items = mens_kurta.map((item, index) => (
    <div key={index} style={{ minWidth: '200px', margin: '0 10px' }}>
      {/* Pass product data to Homesectioncard */}
      <Homesectioncard product={item} />
    </div>
  ));

  return (
    <div className="px-4 lg:px-8 border border-black">
      <div className="relative p-5">
        {/* Scrollable container */}
        <div
          style={{
            display: "flex",
            overflowX: "auto",  // Enables horizontal scrolling
            scrollbarWidth: "none",  // Hides scrollbar in Firefox
            WebkitOverflowScrolling: "touch",  // Adds smooth scrolling on mobile
            gap: "16px", // Add spacing between items
          }}
          className="hide-scrollbar"  // Class to hide scrollbar in most browsers
        >
          {items}
        </div>
      </div>
    </div>
  );
};

export default Homesectioncarosel;
