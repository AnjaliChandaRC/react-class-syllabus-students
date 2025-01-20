import React from 'react'
import { CARDS_LIST } from '../utils/Helper'
import Description from './common/Description'

const Hero = () => {
  return (
    <>
      <div className='sm:flex justify-between'>
        {CARDS_LIST.map((obj, index) => (
          <div key={index} className={`${index === 1 ? "pt-20" : ""}`}>
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
      <Description text="lorem text" style="text-red-400" />
    </>
  )
}

export default Hero

