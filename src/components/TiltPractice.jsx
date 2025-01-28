import React from 'react'
import Tilt from 'react-parallax-tilt';


const TiltPractice = () => {
    return (
        <>
            <div className='w-[300px] h-[300px] mx-auto'>
                <Tilt>
                    <div style={{ height: '300px', width: '300px', backgroundColor: 'darkgreen' }}>
                        <h2 className='flex justify-center items-center'>React Parallax Tilt 👀</h2>
                    </div>
                </Tilt>
            </div>
        </>
    )
}

export default TiltPractice