import React from 'react';
import { auth, provider } from './firebase';

const Login = () => {
    const signIn = ()=>{
        auth.signInWithPopup(provider).catch(error => alert(error.message))
    }
    return (
        <div className="grid place-items-center">
            <img className='w-64 h-64 object-contain'  src='https://www.pngarts.com/files/10/Facebook-Logo-PNG-Image-Background.png'
                 alt='login' />
                <h1 onClick={signIn} className='p-5 mt-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>
        </div>
    );
};

export default Login;