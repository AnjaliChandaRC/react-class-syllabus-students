import React from 'react'
import { useSearchParams } from 'react-router-dom'

const UseSearchParamsPractice = () => {

    const [value, setValue] = useSearchParams()

    return (
        <div>
            <h2>Heading: {value.get("abc")}</h2>
            <button onClick={() => setValue({ abc: "Value" })}>Click Me</button>
        </div>
    )
}

export default UseSearchParamsPractice