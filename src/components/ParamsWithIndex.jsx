import React from 'react'
import { HEADER_LIST } from '../utils/Helper'
import { useNavigate } from 'react-router-dom'

const ParamsWithIndex = () => {

    const navigate = useNavigate()
    const handleClick = (title) => (
        navigate(`?value-${title}`)
    )

    return (
        <div>
            {HEADER_LIST.map((obj, index) => (
                <div key={index}>
                    <h2 onClick={() => handleClick(obj.title)}>{obj.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default ParamsWithIndex