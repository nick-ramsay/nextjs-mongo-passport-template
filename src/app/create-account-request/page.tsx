'use client'

import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import API from "../utils/API";
import { RingLoader } from 'react-spinners';
import Image from 'next/image'
import GithubLogo from "../images/GitHub_Lockup_Light.png"
import GitHubLogoLight from "../images/GitHub_Lockup_Dark.png";


export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [openDialogueModal, setOpenDialogueModal] = useState(false);
  const [dialogueModalTitle, setDialogueModalTitle] = useState("Error");
  const [dialogueModalMessage, setDialogueModalMessage] = useState("An undefined error has occurred. Please try again later.");

  const submitRequest = (email: string, event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email !== null && email.includes("@") && email.includes(".")) {
      API.checkExistingAccountEmails(email)
        .then(res => {
          if (res !== "" && res !== undefined) {
            setDialogueModalTitle("An Account Already Exists");
            setDialogueModalMessage("Looks like an account already exists with this e-mail. Try logging in.");
            setOpenDialogueModal(true)
          } else {
            API.setEmailVerificationToken(email)
              .then(res => {
                window.location.href = "./create-account"
              })
          }
        }
        );
    } else {
      setDialogueModalTitle("Invalid Email");
      setDialogueModalMessage("Please enter a valid email address.");
      setOpenDialogueModal(true)
      setEmail(email => "");
    }

  }

  return (
    <div className="grid items-center justify-center h-screen w-screen">
      <div className="form-card xs-sm:w-96 x-sm:w-96 sm:w-96 md:w-full lg:w-full xl:w-full">
        <h1 className="text-md font-bold mb-5 text-center">Next.js Mongo Passport Template</h1>
        <form onSubmit={(event) => submitRequest(email, event)}>
          <div className='mt-2 text-sm'>
            <label className='font-semibold dark:text-gray-300 text-gray-700'>Email</label>
            <input className='mt-1' placeholder="Enter email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className='mt-6 text-center'>
            <button type='submit'>Request an Account</button>
          </div>
        </form>
        <div>
          <Dialog open={openDialogueModal} onClose={setOpenDialogueModal} className="relative z-10">
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-gray-300/75 dark:bg-gray-700/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel
                  transition
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                >
                  <div className="bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto dark:bg-gray-800 flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                        <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <DialogTitle as="h3" className="text-base font-semibold text-gray-900 dark:text-gray-100">
                          {dialogueModalTitle}
                        </DialogTitle>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 dark:text-gray-300">
                            {dialogueModalMessage}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      data-autofocus
                      onClick={() => setOpenDialogueModal(false)}
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Close
                    </button>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </div>
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
