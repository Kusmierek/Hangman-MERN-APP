import React from 'react';

const Login = () => {
  return (
    <div className="login relative flex flex-col justify-centerS overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-300 underline">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" />
          </div>
          <div className="mb-2">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" />
          </div>
          <div className="mt-6">
            <button className="form-button">Login</button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {' '}
          Don't have an account?{' '}
          <a href="#" className="font-medium text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
