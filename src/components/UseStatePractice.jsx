import React, { useState } from 'react'
import ImageOne from "../assets/images/png/image-one.png"

const UseStatePractice = () => {
    const [value, setValue] = useState(0)

    return (
        <div className='my-10'>
            <h2 className='text-2xl font-bold'>UseState</h2>
            <p>{value}</p>
            <button onClick={() => setValue(value + 1)}>Click</button>
            <img src={ImageOne} alt="image-one" />
        </div>
    )
}

export default UseStatePractice