'use client'

import React, { useState } from 'react';
import API from "../utils/API";
import { sha256 } from 'js-sha256';


export default function CreateAccount() {
  const [verificationCode, setVerificationCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");


  const createNewAccount = () => {

    let currentAccountInfo = {
      email: email,
      firstname: firstName,
      lastname: lastName,
      password: sha256(password)
    }

    if (firstName !== "" && lastName !== "" && email !== "" && password !== "" && passwordConfirmation !== "" && password === passwordConfirmation) {
      API.checkExistingAccountEmails(currentAccountInfo.email)
        .then(res => {
          if (res.data === "") {
            API.createAccount(currentAccountInfo).then(res => {
              window.location.href = "/";
            });
          } else {
            alert("Sorry... an account already exists for this email.");
          }
        })
    }
    else if (password !== passwordConfirmation) {
      alert("Password and confirm password fields don't match...");
    }
    else {
      alert("Not enough info entered...");
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Next.js Mongo Passport Template</h1>
        <p>Create an Account</p>
        <input placeholder="Enter email verification code" type="text" onChange={(e) => setVerificationCode(e.target.value)}></input>
        <input placeholder="Enter first name" type="text" onChange={(e) => setFirstName(e.target.value)}></input>
        <input placeholder="Enter last name" type="text" onChange={(e) => setLastName(e.target.value)}></input>
        <input placeholder="Enter email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
        <input placeholder="Enter new password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
        <input placeholder="Confirm new password" type="password" onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
        <button onClick={() => createNewAccount()}>Create Account</button>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a target="_blank" href="http://www.github.com/nick-ramsay/nextjs-mongo-passport-template">GitHub</a>
      </footer>
    </div>
  );
}
