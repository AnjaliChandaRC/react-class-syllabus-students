import React from 'react'

const Description = ({ text, style }) => {
  return (
    <div>
      <p className={`${style} text-xl font-bold`}>{text}</p>
    </div>
  )
}

export default Description