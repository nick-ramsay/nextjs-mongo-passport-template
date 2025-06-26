'use client'

import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { checkAuthStatus } from '../shared-functions/shared-functions';

export default function CreateAccount() {
  const [user, setUser] = useState({id:"", email:""});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    checkAuthStatus(loading, setLoading, setUser).then()
  }, [])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Next.js Mongo Passport Template</h1>
        <p>Welcome, {user.email}</p>
        <button onClick={() => {API.logout(), window.location.href = "./"}}>Logout</button>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a target="_blank" href="http://www.github.com/nick-ramsay/nextjs-mongo-passport-template">GitHub</a>
      </footer>
    </div>
  );
}