import React, { useEffect, useState } from 'react'

const LearnParams = () => {
    const [value, setValue] = useState()
    const clickHandler = () => {
        setValue()
        console.log("dfghjkfghjklfghjklghj")
    }
    useEffect(() => {
        console.log("fghjk")
    }, [value])
    
    return (
        <>
            <button onClick={clickHandler}>Submit</button>
        </>
    )
}

export default LearnParams