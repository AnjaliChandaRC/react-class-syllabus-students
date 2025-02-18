import React, { useState } from 'react'

const FormValidation = () => {

    const formData = ({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [formValue, setFormValue] = useState(formData)

    const handleClick = (e) => {
        e.preventDefault()
        console.log(formValue, "akjsdnasdbd")
    }
    return (
        <form action="" className='flex justify-center items-center min-h-screen flex-col'>
            <h2 className='pb-5 text-3xl font-bold'>Form Validation</h2>
            <div>
                <input onChange={(e) => setFormValue({ ...formValue, name: e.target.value })} value={formValue.name} type="text" placeholder='Name' className='border-2 border-black rounded-lg px-2 py-2 w-[350px] sm:w-[500px]' />
            </div>
            <div>
                <input onChange={(e) => setFormValue({ ...formValue, email: e.target.value })} value={formValue.email} type="email" placeholder='Email' className='border-2 border-black rounded-lg px-2 mt-3 py-2 w-[350px] sm:w-[500px]' />
            </div>
            <div>
                <div>
                    <input onChange={(e) => setFormValue({ ...formValue, password: e.target.value })} value={formValue.password} type="password" placeholder='Password' className='border-2 border-black rounded-lg px-2 mt-3 py-2 w-[350px] sm:w-[500px]' />
                </div>
            </div>
            <div>
                <input onChange={(e) => setFormValue({ ...formValue, confirmPassword: e.target.value })} value={formValue.confirmPassword} type="password" placeholder='Confirm Password' className='border-2 border-black rounded-lg px-2 mt-3 py-2 w-[350px] sm:w-[500px]' />
            </div>
            <div>
                <button onClick={handleClick} className='bg-black text-white px-10 py-2 mt-5 rounded-lg'>Submit</button>
            </div>
        </form>
    )
}

export default FormValidation