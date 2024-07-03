import React, { useState } from 'react';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';

const LoginSignup = () => {
  const [isLoginSelected, setIsLoginSelected] = useState(true);

  return (
    <div id="login" className='flex flex-col items-center justify-center min-h-screen '>
      <div className='inline-flex'>
        <button
          className={`btn bg-gray-100 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${isLoginSelected ? 'bg-gray-500' : 'bg-indigo-100'}`}
          onClick={() => setIsLoginSelected(true)}
        >
          Login
        </button>
        <button
          className={`btn bg-gray-100 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r ${!isLoginSelected ? 'bg-gray-500' : 'bg-indigo-100'}`}
          onClick={() => setIsLoginSelected(false)}
        >
          Register
        </button>
      </div>
      <div className='mt-6 w-full flex justify-center p-0'>
        <div className='w-full max-w-md'>
          {isLoginSelected ? <LoginComponent /> : <RegisterComponent />}
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;