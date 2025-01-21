import React from 'react'
import { useLocation } from 'react-router-dom'
import Slider from "react-slick";

const Footer = () => {
  const path = useLocation().pathname
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div>
      <h2 className='text-3xl font-bold py-10'>Change bg color with UseLocation</h2>
      <div className={`${path === "/" ? "bg-black" : "bg-green-600"} w-[350px] h-[300px]`}>
      </div>

      <h2 className='text-3xl font-bold text-center py-10'>Slider</h2>
      <Slider {...settings} className='overflow-hidden pb-10'>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
}

export default Footer