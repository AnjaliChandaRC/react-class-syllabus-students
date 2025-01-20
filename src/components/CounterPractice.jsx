import React, { useState } from 'react'
import CountUp from 'react-countup'
import ReactVisibilitySensor from 'react-visibility-sensor'

const CounterPractice = () => {
    const [count, setCount] = useState(false)
    const countData = [
        {
            title: "Title One",
            value: "%"
        },
        {
            title: "Title Two",
            value: "+"
        },
        {
            title: "Title Three",
            value: "%"
        },
        {
            title: "Title Four",
            value: "+"
        },
    ]

    function onVisible(value) {
        if (value) {
            setCount(true)
        }
    }
    return (
        <div>
            {countData.map((obj, index) => (
                <p key={index}>
                    <ReactVisibilitySensor onChange={onVisible}>
                        <CountUp start={0} end={index === 0 ? count ? 100 : 0 : index === 1 ? count ? 50 : 0 : index === 2 ? count ? 40 : 0 : ""}>

                        </CountUp>
                    </ReactVisibilitySensor>
                    <span>{obj.title}</span>
                    <span>{obj.value}</span>
                </p>
            ))}
        </div>
    )
}

export default CounterPractice