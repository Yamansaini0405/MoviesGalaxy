import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { AppContext } from '../context/MovieContext';
import { useNavigate} from 'react-router-dom';
import { useContext } from 'react';

function Login() {
    const info = useContext(AppContext);
    const [input, setData] = useState("")
    const [pass, setPass] = useState("")
    const handleInput = (e) => {
        setData(e.target.value)
    }
    const handlePass = (e) => {
        setPass(e.target.value)
    }
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        setData("")
        setPass("")
        navigate("/");
        info.setLoading(true)
        
        
    }
  return (
    <div className=' w-full h-[100vh] bg-color flex justify-center items-center'>
        
        <div className="loin-container bg-white  w-[80%] md:w-[23%] h-[62vh]  rounded-lg ">
            <div className="heading font-[500] text-[1.8rem] flex justify-center items-center mt-4">
                Log in with
            </div>
            <div className="options flex justify-center items-center gap-6 px-2 mt-4 mb-2">
                <div className="google border border-black text-lg  py-2 w-[45%] flex justify-center items-center rounded-lg">
                <FcGoogle className='text-2xl'/> &nbsp; Google
                </div>
                <div className="apple border border-black  text-lg  py-2 w-[45%] flex justify-center items-center rounded-lg">
                <FaApple className='text-2xl'/>&nbsp; Apple
                </div>
            </div>
            <div className="or flex justify-center items-center ">
                <hr className='w-[40%] mt-[0.3rem] border-0 h-[1px] bg-color'/>
                <p className='mx-2 text-xl'>or</p>
                <hr className='w-[40%] mt-[0.3rem] border-0 h-[1px] bg-color'/>
            </div>
            <form onSubmit={ handleSubmit}>
            <div className="inputs flex justify-center items-center flex-col ">
                <input required type="email" placeholder='Email address' value={input} onChange={handleInput} className='border py-2 px-4 w-[90%] text-lg my-4'/>
                <input required type="password" placeholder='Password' value={pass} onChange={handlePass} className='border py-2 px-4 w-[90%] text-lg '/>
                
            </div>
            <p className='text-blue-900 font-[600] ml-5 '>Forgot Password?</p>
            <div className="login-btn flex justify-center items-center mt-6 mb-1 ">
                
                <button  type='submit' className='bg-color text-white w-[90%] py-2 text-xl rounded-lg'>Login</button>
            </div>
            </form>
            <div className="signup-option w-[90%] flex justify-center items-center">
                <p className='md:ml-[-20%]'>Don't have account? <span className='text-blue-900 font-[500]'>Sign Up</span></p>
            </div>

        </div>
    </div>
  )
}

export default Login