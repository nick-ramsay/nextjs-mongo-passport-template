'use client'

import React, { useState } from 'react';

export default function CreateAccount() {
  const [email, setDummyHook] = useState("");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Next.js Mongo Passport Template</h1>
        <p>Request a Password Reset</p>
        <input placeholder="Enter email" type="text" onChange={(e) => setDummyHook(e.target.value)}></input>
        <button>Dummy Button</button>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a target="_blank" href="http://www.github.com/nick-ramsay/nextjs-mongo-passport-template">GitHub</a>
      </footer>
    </div>
  );
}
