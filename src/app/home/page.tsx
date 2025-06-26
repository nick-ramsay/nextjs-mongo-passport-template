'use client'

import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { checkAuthStatus } from '../shared-functions/shared-functions';

export default function CreateAccount() {
  const [user, setUser] = useState({firstname:"", lastname: ""});
  const [loading, setLoading] = useState(true);

  const fetchUser = () => {
    API.getCurrentUser().then(res => { setUser(user => res.user); });
  };


  useEffect(() => {
    checkAuthStatus(loading, setLoading).then(fetchUser)
  }, [])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        {!loading ?
          <div>
            <h1 className="text-2xl font-bold mb-10">Next.js Mongo Passport Template</h1>
            <p>Welcome, {user.firstname + " " + user.lastname}</p>
            <button onClick={() => { API.logout(), window.location.href = "./"}}  className="mt-10">Logout</button>
          </div>
          : ""}
      </main>
    </div>
  );
}