import { useState } from "react"
import swal from 'sweetalert';

const Validation = () => {

    const formData = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [value, setValue] = useState(formData)
    const [error, setError] = useState(false)
    const [password, setPassword] = useState(false)

    const regex = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/

    const handleClick = (e) => {
        e.preventDefault()
        setError(true)
        if (
            value.name !== "" &&
            value.email !== "" &&
            value.password !== "" &&
            value.confirmPassword !== "" &&
            regex.test(value.email)
        ) {
            setError(false)
            setValue(formData)
            console.log("value", value)
            swal({
                title: "Form Submitted Successfully",
                icon: "warning",
                dangerMode: true,
            })
        }
    }

    return (
        <form action="" className='flex justify-center items-center min-h-screen flex-col'>
            <h2 className='pb-5 text-3xl font-bold'>Form Validation</h2>
            <div>
                <input onChange={(e) => setValue({ ...value, name: e.target.value })} value={value.name} type="text" placeholder='Name' className='border-2 border-black rounded-lg px-2 py-2 w-[500px]' />
                <p className="text-red-500">{error && value.name === "" ? "Name is Required" : ""}</p>
            </div>
            <div>
                <div>
                    <input onChange={(e) => setValue({ ...value, email: e.target.value })} value={value.email} type="email" placeholder='Email' className='border-2 border-black rounded-lg px-2 mt-3 py-2 w-[500px]' />
                </div>
                {
                    error && value.email === "" ?
                        <p className="text-red-500">Email Is Required</p> : error && regex.test(value.email) === false ? <p className="text-red-500">Email Not Valid</p> : ""
                }
            </div>
            <div>
                <div>
                    <input onChange={(e) => setValue({ ...value, password: e.target.value })} value={value.password} type={password ? "text" : "password"} placeholder='Password' className='border-2 border-black rounded-lg px-2 mt-3 py-2 w-[500px]' />
                    <p onClick={() => setPassword(!password)}>{password ? "Show" : "Hide"}</p>
                </div>
                <p className="text-red-500">{error && value.password === "" ? "Password is Required" : ""}</p>
            </div>
            <div>
                <input onChange={(e) => setValue({ ...value, confirmPassword: e.target.value })} value={value.confirmPassword} type="password" placeholder='Confirm Password' className='border-2 border-black rounded-lg px-2 mt-3 py-2 w-[500px]' />
                <p className="text-red-500">{error && value.confirmPassword === "" ? "Confirm Password is Required" : ""}</p>
            </div>
            <div>
                <button onClick={(e) => handleClick(e)} className='bg-black text-white px-10 py-2 mt-5 rounded-lg'>Submit</button>
            </div>
        </form>
    )
}

export default Validation