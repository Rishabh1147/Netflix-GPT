import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateForm } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';

import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { BACKDROP } from '../utils/constants';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();

    const email = useRef();
    const password = useRef();
    const name = useRef();

    const handleClick = () => {
        const message = validateForm(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current?.value || '',
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                        }));

                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ":" + errorMessage);
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {

                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current?.value || '',
                    }).then(() => {

                    }).catch((error) => {
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ":" + errorMessage);
                });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div className="">
            <Header />
            <div className="absolute">
                <img src= {BACKDROP} alt="Backdrop" />
            </div>

            <form onSubmit={(evt) => { evt.preventDefault() }} className=" w-1/4 absolute p-12 bg-black my-40 mx-auto left-0 right-0 text-white  rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {
                    !isSignInForm && <input ref={name} type="text" placeholder='Full Name'
                        className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
                }

                <input ref={email} type="text" placeholder='Email'
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg"
                />

                <input ref={password} type="password" placeholder='Password'
                    className="p-4 my-4 w-full bg-gray-700  rounded-lg"
                />


                <p className='text-red-500'>{errorMessage}</p>

                <button
                    className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>


                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" :
                    "Already have an account? Sign In"}
                </p>
            </form>

        </div>
    )
}

export default Login