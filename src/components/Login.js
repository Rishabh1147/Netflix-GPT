import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div className="">
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_small.jpg" alt="Backdrop"/>
        </div>

        <form className=" w-1/4 absolute p-12 bg-black my-40 mx-auto left-0 right-0 text-white  rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm && <input type="text" placeholder='Full Name' 
                className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>}

            <input type="text" placeholder='Email or mobile number' 
                className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>

            <input type="password" placeholder='Password' 
                className="p-4 my-4 w-full bg-gray-700  rounded-lg"/>

            <button 
                className="p-4 my-6 bg-red-700 w-full rounded-lg">
                {isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now": 
                "Already have an account? Sign In"}</p>
        </form>

    </div>
  )
}

export default Login