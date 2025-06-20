'use client'

import React, { useState } from 'react';
import API from "../utils/API";

export default function CreateAccount() {
  const [email, setEmail] = useState("");

  const submitRequest = (email: string) => {
    console.log(email.includes("@"));
    if (email !== null && email.includes("@") && email.includes(".")) {
      API.checkExistingAccountEmails(email)
        .then(res => {
          if (res.data !== "") {
            alert("Looks like an account already exists with this e-mail. Try logging in.");
          } else {
            API.setEmailVerificationToken(email)
              .then(res => {
                window.location.href = "./create-account"
              })
          }
        }
        );


      console.log(email);
    } else {
      alert("Invalid email. Please try again.")
      setEmail(email => "");
    }

  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Next.js Mongo Passport Template</h1>
        <p>Request to Create an Account</p>
        <input placeholder="Enter email" type="text" onChange={(e) => setEmail(e.target.value)} value={email}></input>
        <button onClick={() => submitRequest(email)}>Request an Account</button>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a target="_blank" href="http://www.github.com/nick-ramsay/nextjs-mongo-passport-template">GitHub</a>
      </footer>
    </div>
  );
}
