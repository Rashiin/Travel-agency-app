import React, { useState } from 'react';
import HeadTitle from '../HeadTitle/HeadTitle';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allValue, setAllValue] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    const newValue = { email, password };
    setAllValue([...allValue, newValue]);
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <HeadTitle />
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Enter Your Password & Email for Login
              </h2>
              <form onSubmit={formSubmit}>
                <div className="mb-4">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Your Password here ..."
                    className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:ring-lime-300"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email here ..."
                    className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:ring-lime-300"
                  />
                </div>
                <div className="flex justify-between mb-4">
                  <div>
                    <input type="checkbox" />
                    <label className="ml-2">I'm Not a Robot</label>
                  </div>
                  <div>
                    <span className="text-lime-500">I Forgot my Password</span>
                  </div>
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                  Sign In
                </button>
              </form>
              <p className="mt-4">
                Don't Have an Account?{' '}
                <Link to="/register" className="text-lime-500 font-semibold">
                  Sign Up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-6 px-4">
        {allValue.map((currentValue, index) => {
          const { email, password } = currentValue;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 mt-4"
            >
              <h1 className="text-lg font-semibold mb-2">Send Successfully</h1>
              <h3>
                Email:
                <p className="text-gray-700">{email}</p>
              </h3>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Login;