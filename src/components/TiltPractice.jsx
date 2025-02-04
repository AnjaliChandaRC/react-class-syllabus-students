import React from 'react'
import Tilt from 'react-parallax-tilt';


const TiltPractice = () => {
    return (
        <>
            <div className='w-[300px] h-[300px] mx-auto'>
                <h2 className='text-3xl font-bold pt-10 pb-5 text-center'>Tilt JS</h2>
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