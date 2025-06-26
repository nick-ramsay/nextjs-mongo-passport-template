'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { sha256 } from 'js-sha256';
import API from './utils/API';
import { checkAuthStatus } from './shared-functions/shared-functions';
import GithubLogo from "./images/GitHub_Lockup_Light.png";

export default function Home() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    checkAuthStatus(loading, setLoading, setUser)
  }, [])


  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await API.login(email, password)
      //console.log(response.user);
      setUser(response.user);
      window.location.href = '/home';
      return { success: true }
    } catch (error: any) {
      return { success: false, message: error.response?.data?.message || 'Login failed' }
    }
  }


  return (
    <div className="grid items-center justify-center h-screen">
      <div className="grid-col-1 m-5 p-5 bg-gray-700 max-w-m min-w-sm focus-green rounded text-center">
        <h1 className="text-md font-bold mb-5">Next.js Mongo Passport Template</h1>
        <div className='mt-3'>
          <input placeholder="Enter email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className='mt-3'>
          <input placeholder="Enter password" type="password" onChange={(e) => setPassword(sha256(e.target.value))}></input>
          <div className='mt-5'>
            <button onClick={() => handleLogin(email, password)}>Login</button>
          </div>
        </div>
        <div className='mt-5'>
          <a href="./create-account-request">Create an Account</a>
        </div>
        <div className='mt-1'>
          <a href="./reset-password-request">Reset Password</a>
        </div>
      </div>
      <div className="grid-col-1 m-5 p-5 max-w-m min-w-sm align-center">
          <a target="_blank" href="http://www.github.com/nick-ramsay/nextjs-mongo-passport-template">
            <Image
            className='justify-self-center'
              src={GithubLogo}
              width={80}
              alt="Picture of the author"
            />
          </a>
       
      </div>
    </div>
  );
}