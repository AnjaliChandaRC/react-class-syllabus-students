import { useState } from "react"

const Validation = () => {

    const formData = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [value, setValue] = useState(formData)

    const handleClick = (e) => {
        e.preventDefault()
        console.log("value", value)
    }
    
    return (
        <form action="" className='flex justify-center items-center min-h-screen flex-col'>
            <h2 className='pb-5 text-3xl font-bold'>Form Validation</h2>
            <div>
                <input onChange={(e) => setValue({ ...value, name: e.target.value })} type="text" placeholder='Name' className='border-2 border-black rounded-lg px-2 py-2 w-[500px]' />
            </div>
            <div>
                <input onChange={(e) => setValue({ ...value, email: e.target.value })} type="email" placeholder='Email' className='border-2 border-black rounded-lg px-2 mt-3 py-2 w-[500px]' />
            </div>
            <div>
                <input onChange={(e) => setValue({ ...value, password: e.target.value })} type="password" placeholder='Password' className='border-2 border-black rounded-lg px-2 mt-3 py-2 w-[500px]' />
            </div>
            <div>
                <input onChange={(e) => setValue({ ...value, confirmPassword: e.target.value })} type="password" placeholder='Confirm Password' className='border-2 border-black rounded-lg px-2 mt-3 py-2 w-[500px]' />
            </div>
            <div>
                <button onClick={(e) => handleClick(e)} className='bg-black text-white px-10 py-2 mt-5 rounded-lg'>Submit</button>
            </div>
        </form>
    )
}

export default Validation