import React from 'react'

const TextReverseSplit = () => {
    const abc = (text) => {
        const value = text.split('')
        console.log(value)
        for (var i = value.length - 1; i >= 0; i--) {
            console.log(value[i])
        }

    }
    abc("radialcode")
    return (
        <div></div>
    )
}

export default TextReverseSplit