import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, USERLOGO } from '../utils/constants'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName} = user;
          dispatch(addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          }));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });

      return () => unsubscribe();
}, [])

  const handleSignOut = () => {
    signOut(auth).then(() =>{
    }).catch(() => {
      navigate("/error")
    })
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
        <img className="w-44"
            src = {LOGO}
            alt='Logo'
        />

        {user &&<div className="flex p-2">
        <img className="w-12 h-12 mr-5"
            src={USERLOGO}
            alt='User Logo'
        />
        <button onClick={() => {handleSignOut()}} className="font-bold text-white">Sign Out</button>
        </div>}
    </div>
  )
}

export default Header