import React, { useState } from 'react'
import { SIDEBAR_DATA } from '../utils/Helper';

const Sidebar = () => {

    const [sidebar, setSidebar] = useState()

    const handleClick = (e) => {
        e.preventDefault()
        setSidebar(!sidebar)
    }

    return (
        <div>
            {sidebar ? "" : <div onClick={() => setSidebar(!sidebar)} className='bg-black opacity-50 fixed top-0 left-0 w-full h-full'></div>}

            <div className='ps-4 pt-3 absolute'>
                <button onClick={() => setSidebar(!sidebar)} className='md:hidden text-xl font-bold'>Toggle</button>
            </div>
            <div className={`${sidebar ? "left-[-300px]" : "left-0"} bg-black w-[240px] min-h-screen py-11 px-7 flex justify-between flex-col absolute md:relative`}>
                <div>
                    <button onClick={() => setSidebar(!sidebar)} className='md:hidden text-white absolute top-[15px] text-xl font-bold'>Cross</button>
                    <div className='pt-8'>
                        {
                            SIDEBAR_DATA.map((obj, index) => (
                                <a onClick={(handleClick)} href={obj.url} key={index} className='flex gap-4 mt-8'>
                                    <h2 className='text-white'>{obj.text}</h2>
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className='grid'>
                    <a href="#help" onClick={() => setSidebar(!sidebar)} className='text-sm text-white opacity-60'>Help</a>
                    <a href="#contact-us" onClick={() => setSidebar(!sidebar)} className='text-sm text-white opacity-60 mt-4'>Contact Us</a>
                    <a href="#log-out" onClick={() => setSidebar(!sidebar)} className='text-sm text-white opacity-60 mt-4'>Log Out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar