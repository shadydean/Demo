import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/Auth';

function RegisterComponent() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { dispatch } = useContext(AuthContext);

  const onSubmit = async (data) => {
    console.log(data);
    const response = await fetch("http://localhost:4321/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const res = await response.json();
    if (response.ok) {
      console.log("Signup Success");
      localStorage.setItem("token", res.token);
      dispatch({ type: 'LOGIN', payload: res.token });
      console.log(res);
    } else {
      console.log("something went wrong", res);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white bg-opacity-90 px-8 py-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 neon-text">Welcome!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-500">Password is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobilenumber">Phone</label>
            <input
              type="tel"
              id="mobilenumber"
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white"
              placeholder="(eg: +91 9876543210)"
              {...register("mobilenumber", { required: true })}
            />
            {errors.mobilenumber && <span className="text-red-500">Phone number is required</span>}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300 neon-text">Register</button>
        </form>
        <p className="mt-4 text-center text-gray-800">Already have an account? <a href="#" className="text-blue-500 hover:underline">Login</a></p>
      </div>
    </div>
  );
}

export default RegisterComponent;
