'use client'

import React, { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Next.js Mongo Passport Template</h1>
        <input placeholder="Enter email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
        <input placeholder="Enter password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
        <button>Login</button>
        <a href="./create-account-request">Create an Account</a>
        <a href="./reset-password-request">Reset Password</a>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a target="_blank" href="http://www.github.com/nick-ramsay/nextjs-mongo-passport-template">GitHub</a>
      </footer>
    </div>
  );
}