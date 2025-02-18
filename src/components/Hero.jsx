import React from 'react'
import { CARDS_LIST } from '../utils/Helper'
import Description from './common/Description'

const Hero = () => {
  return (
    <>
      <h2 className='text-3xl font-bold pt-10 pb-5'>Print Data With Map</h2>
      <div className='sm:flex justify-between'>
        {CARDS_LIST.map((obj, index) => (
          <div key={index} className={`${index === 1 ? "pt-10" : ""}`}>
            <h2 className='text-xl font-bold'>{index + 1}</h2>
            <h2>{obj.heading}</h2>
            <p>{obj.description}</p>
            <span>{obj.icon}</span>
            {obj.content.map((val, i) => (
              <div key={i}>
                <p>{val.list}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <h2 className='text-3xl font-bold pt-10 pb-5'>Props</h2>
      <Description title={"lorem text"} titleTwo={"Title Two"} titleThree={"Title Three"} customClass="text-gray-500" />
    </>
  )
}

export default Hero

