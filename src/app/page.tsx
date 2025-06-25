'use client'

import React, { useState, useEffect } from 'react';
import { sha256 } from 'js-sha256';
import API from './utils/API';
import { checkAuthStatus } from './shared-functions/shared-functions';

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
      console.log("User Response: " + response.user);
      setUser(response.user);
      window.location.href = '/home';
      return { success: true }
    } catch (error: any) {
      return { success: false, message: error.response?.data?.message || 'Login failed' }
    }
  }


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Next.js Mongo Passport Template</h1>
        <input placeholder="Enter email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
        <input placeholder="Enter password" type="password" onChange={(e) => setPassword(sha256(e.target.value))}></input>
        <button onClick={() => handleLogin(email, password)}>Login</button>
        <a href="./create-account-request">Create an Account</a>
        <a href="./reset-password-request">Reset Password</a>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a target="_blank" href="http://www.github.com/nick-ramsay/nextjs-mongo-passport-template">GitHub</a>
      </footer>
    </div>
  );
}