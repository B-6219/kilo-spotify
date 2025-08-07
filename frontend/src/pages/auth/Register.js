import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { register, clearErrors } from '../../actions/authActions';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, error, loading } = useSelector(state => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }

    if (error) {
      console.log(error);
      dispatch(clearErrors());
    }
  }, [isAuthenticated, error, dispatch, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password
    };
    dispatch(register(userData));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Sign up to Spotify</h2>
        
        <form onSubmit={submitHandler} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              What should we call you?
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <p className="mt-2 text-gray-400 text-sm">
              This appears on your profile.
            </p>
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>By clicking on sign-up, you agree to Spotify's Terms and Conditions of Use.</p>
            <p className="mt-2">To learn more about how Spotify collects, uses, shares and protects your personal data, please see Spotify's Privacy Policy.</p>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 transition disabled:opacity-50"
          >
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Have an account?{' '}
            <Link to="/login" className="text-green-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;