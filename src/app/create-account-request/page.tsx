'use client'

import React, { useState } from 'react';
import API from "../utils/API";
import { RingLoader } from 'react-spinners';
import Image from 'next/image'
import GithubLogo from "../images/GitHub_Lockup_Light.png"
import GitHubLogoLight from "../images/GitHub_Lockup_Dark.png";


export default function CreateAccount() {
  const [email, setEmail] = useState("");

  const submitRequest = (email: string, event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email !== null && email.includes("@") && email.includes(".")) {
      API.checkExistingAccountEmails(email)
        .then(res => {
          if (res !== "" && res !== undefined) {
            alert("Looks like an account already exists with this e-mail. Try logging in.");
          } else {
            API.setEmailVerificationToken(email)
              .then(res => {
                window.location.href = "./create-account"
              })
          }
        }
        );
    } else {
      alert("Invalid email. Please try again.")
      setEmail(email => "");
    }

  }

  return (
    <div className="grid items-center justify-center h-screen w-screen">
      <div className="form-card xs-sm:w-96 x-sm:w-96 sm:w-96 md:w-full lg:w-full xl:w-full">
        <h1 className="text-lg font-bold mb-5">Next.js Mongo Passport Template</h1>
        <form onSubmit={(event) => submitRequest(email, event)}> 
          <div className='mt-3'>
            <label className='font-semibold text-gray-300'>Email</label>
            <input className='mt-1' placeholder="Enter email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className='mt-6'>
            <button type='submit'>Request an Account</button>
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
