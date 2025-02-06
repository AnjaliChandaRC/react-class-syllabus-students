import React, { useState } from 'react'
import { ACCORDION_LIST } from "../utils/Helper"
import { useParams } from 'react-router-dom'

const CustomAccordion = () => {
    const [value, setValue] = useState()
    const clickHandler = (index) => {
        setValue(value === index ? "" : index)
    }

    // Using useParams with params
    const { title } = useParams()

    return (
        <>
            {title ? <h2>{title}</h2> : "Text"}
            {ACCORDION_LIST.map((obj, index) => (
                <div key={index} className={`${value === index ? "border-red-800" : "border-black"} mx-5 sm:mx-10 border-2 mt-5 rounded-xl p-5`}>
                    <div className='flex justify-between cursor-pointer' onClick={() => clickHandler(index)}>
                        <h2 className='text-xl font-bold text-red-700'>{index + 1} {obj.questions}</h2>
                        <p className={`${value === index ? "rotate-180" : ""} font-bold text-xl`}>^</p>
                    </div>
                    <div className={`${value === index ? "h-auto" : "max-h-0"} overflow-hidden transition-all ease-in-out duration-1000`}>
                        <p className='text-lg font-medium ps-4 pt-3'>{obj.answer}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CustomAccordion