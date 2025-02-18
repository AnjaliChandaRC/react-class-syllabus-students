import React, { useEffect } from 'react'
import { gsap } from "gsap";

const GsapPractice = () => {
    useEffect(() => {
        gsap.from(".heading", {
            xPercent: 100
        })
        gsap.to(".description", {
            xPercent: 50,
            duration: 2,
            delay: 2,
            yoyo: true,
            repeat: -1,
        })
        gsap.fromTo(".box1", {
            xPercent: 0
        }, {
            xPercent: 200,
            backgroundColor: "red",
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "bounce",
        })
        gsap.fromTo(".box2", {
            yPercent: 0
        }, {
            yPercent: 200,
            backgroundColor: "red",
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "elastic",
        })
    }, [])


    return (
        <div className='overflow-hidden'>
            <h2 className='text-3xl font-bold text-green-600 mt-10 heading'>Heading Two</h2>
            <p className='text-3xl font-bold text-red-500 mt-10 description bg-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci voluptatibus necessitatibus officia. Quisquam quam incidunt optio voluptates repellat aliquam corrupti veritatis magnam soluta numquam porro beatae sapiente adipisci, amet pariatur.</p>
            <div className='w-[300px] h-[300px] bg-black mt-10 box1'></div>
            <div className='w-[300px] h-[300px] bg-slate-500 my-10 mx-auto box2'></div>
        </div>
    )
}

export default GsapPractice