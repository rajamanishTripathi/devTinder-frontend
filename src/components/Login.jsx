import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import {BASE_URL} from '../utils/constants';
import { useNavigate } from 'react-router';

const Login = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [isloggedInForm,setIsLoggedInForm] = useState(false);
    const [emailId,setEmailId] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
          try {
              const res = await axios.post(BASE_URL+"/login",
                {
                  emailId,
                  password
              },
              {withCredentials:true}
              );
           //   console.log(res.data); 
              dispatch(addUser(res.data));
              navigate("/");
             }
           catch (err) {
            setError(err?.response?.data || "Something went wrong");
            
          }
    };

  return (
    <div className='flex justify-center my-10'>
      <div className="card card-dash bg-base-300 w-96">
        <div className="card-body">
            <h2 className="card-title flex justify-center">{isloggedInForm ? 'Login':'Sign Up'}</h2>
            <div>
                   {!isloggedInForm && <>
                    <div className='label'>
                        <span className='label-text'>First Name</span>
                    </div>
                    <label className="input validator">
                        <input type="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </label>
                    <div className="validator-hint hidden">Enter First Name</div>

                    <div className='label'>
                        <span className='label-text'>Last Name</span>
                    </div>
                    <label className="input validator">
                       
                        <input type="email" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </label>
                    <div className="validator-hint hidden">Enter Last Name</div>
                     </>}

                    <div className='label'>
                        <span className='label-text'>Email ID</span>
                    </div>
                    <label className="input validator">
                       
                        <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)}  placeholder="mail@site.com" required />
                    </label>
                    <div className="validator-hint hidden">Enter valid email address</div>



                    <div className='label mt-2'>
                        <span className='label-text'>Password</span>
                    </div>
                    <label className="input validator">
                        <input
                           // type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                        />
                    </label>
                
                  </div>
                <p className='text-red-500'>{error}</p>
                  <div className="card-actions flex justify-center my-5">
                      <button className="btn btn-primary" onClick={handleLogin}>{isloggedInForm ? "Login" : "Sign Up"}</button>
                  </div>
                <p className='m-auto cursor-pointer'
                 onClick={() => setIsLoggedInForm(value => !value)}
                 >{isloggedInForm ? "New User?  Sign Up":"Existing User?   Login"}</p>
            </div>
      </div>
    </div>
  )
}

export default Login
