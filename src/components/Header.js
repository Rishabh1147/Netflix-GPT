import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGES, USERLOGO } from '../utils/constants'
import { toggelGPT } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const gpt = useSelector(store => store.gpt.showGPT);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
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

    // Unsubscribing when component will unmount
    return () => unsubscribe();
  }, [])

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch(() => {
      navigate("/error")
    })
  }

  const handelGPT = () => {
    dispatch(toggelGPT());
  }

  const handelLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }



  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-44"
        src={LOGO}
        alt='Logo'
      />

      {user && <div className="flex p-2">
        {
          gpt && <select className='p-2 m-2 bg-gray-900 text-white rounded-lg' onChange={handelLangChange}>
            {SUPPORTED_LANGUAGES.map((lang) => 
              (<option key={lang.identifier} value={lang.identifier}>{lang.language}</option>)
            )}
          </select>
        }

        {
          <button className="py-2 px-4 mx-4 my-2 bg-gray-900 text-white rounded-lg"
            onClick={handelGPT}>   
            {!gpt ? "GPT Search" : "Browse"}
          </button>
        }
        <img className="w-12 h-12 mr-5"
          src={USERLOGO}
          alt='User Logo'
        />
        <button onClick={() => { handleSignOut() }} className="font-bold text-white">Sign Out</button>
      </div>
      }
    </div>
  )
}

export default Header