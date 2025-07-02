'use client'

import React, { useState } from 'react';
import API from "../utils/API";
import { sha256 } from 'js-sha256';
import Image from 'next/image'
import GithubLogo from "../images/GitHub_Lockup_Light.png"
import GitHubLogoLight from "../images/GitHub_Lockup_Dark.png";


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
          if (res.data === "" || res.data === undefined) {

            API.createAccount(currentAccountInfo).then(res => {
              window.location.href = "/";
            });
          } else {
            console.log(res.data);
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
    <div className="grid items-center justify-center h-screen w-screen">
      <div className="form-card xs-sm:w-96 x-sm:w-96 sm:w-96 md:w-full lg:w-full xl:w-full">
        <h1 className="text-md font-bold mb-5">Next.js Mongo Passport Template</h1>
        <p>Create an Account</p>
        <form>
          <div className='mt-3'>
            <input placeholder="Enter email verification code" type="text" onChange={(e) => setVerificationCode(e.target.value)}></input>
          </div>
          <div className='mt-3'>
            <input placeholder="Enter first name" type="text" onChange={(e) => setFirstName(e.target.value)}></input>
          </div>
          <div className='mt-3'>
            <input placeholder="Enter last name" type="text" onChange={(e) => setLastName(e.target.value)}></input>
          </div>
          <div className='mt-3'>
            <input placeholder="Enter email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className='mt-3'>
            <input placeholder="Enter new password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div className='mt-3'>
            <input placeholder="Confirm new password" type="password" onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
          </div>
          <div className='mt-6'>
            <button onClick={() => createNewAccount()}>Create Account</button>
          </div>
        </form>
        
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <div className="flex justify-center items-center m-5 p-5 max-w-m min-w-sm">
            <a target="_blank" href="http://www.github.com/nick-ramsay/nextjs-mongo-passport-template">
              <Image
                className="block dark:hidden"
                src={GitHubLogoLight}
                width={80}
                alt="GitHub Logo"
              />
              <Image
                className="hidden dark:block"
                src={GithubLogo}
                width={80}
                alt="GitHub Logo"
              />
            </a>
          </div>
        </footer>
    </div>
  );
}
