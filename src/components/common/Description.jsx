import React from 'react'

const Description = ({ title, titleTwo, titleThree, customClass }) => {
  return (
    <div>
      <p className={`${customClass} text-3xl font-bold text-red-700`}>{title} <span className='text-green-600'>{titleTwo}</span> <span className='text-yellow-400'>{titleThree}</span></p>
    </div>
  )
}

export default Description