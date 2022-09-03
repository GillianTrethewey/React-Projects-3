import React from "react";
import Hotel from "./Hotel";

const renderHotel = (hotel) => {
  return <Hotel key={hotel.id} hotel={hotel} />;
};

const HotelsList = (props) => {
  if (!props.hotels) {
    return null;
  }

  const hotelListElements = props.hotels.map(renderHotel);
  return <ul className="hotels-list">{hotelListElements}</ul>;
};

export default HotelsList;
