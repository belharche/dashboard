import React from "react";
import H1Title from "../../Shared/H1Title";

import { UserIcon } from '@heroicons/react/solid';


function ProfileManagement() {
  

  return(
    <section className="h-full w-full flex flex-wrap-reverse gap-6 md:m-2 py-14 justify-center md:justify-between items-center md:p-8">
      <div className="basis-[45%] min-w-[300px] flex flex-col gap-4">
        <div>
          <H1Title styling="text-black md:text-left text-center">
            <p>Profile Details</p>
          </H1Title>
          <div className="flex flex-col gap-1 mt-2">
            <div className="flex bg-white justify-between py-2 px-5 rounded shadow-lg">
              <strong>Name</strong>
              <p>Brahim El Harche</p>
            </div>
            <div className="flex bg-white justify-between py-2 px-5 rounded shadow-lg">
              <strong>Username</strong>
              <p>Belharche</p>
            </div>
            <div className="flex bg-white justify-between py-2 px-5 rounded shadow-lg">
              <strong>City</strong>
              <p>Agadir</p>
            </div>
          </div>
        </div>
        <div>
          <H1Title styling="text-black md:text-left text-center">
            <p>Contact Info</p>
          </H1Title>
          <div className="flex flex-col gap-1 mt-2">
            <div className="flex bg-white justify-between py-2 px-5 rounded shadow-lg">
              <strong>Phone</strong>
              <p>060000000</p>
            </div>
            <div className="flex bg-white justify-between py-2 px-5 rounded shadow-lg">
              <strong>Email</strong>
              <p>brahim@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="basis-[45%] min-w-[300px]">
        <div className="flex gap-4 items-center flex-col text-black">
          <div className="bg-white p-10 rounded-full shadow-lg">
            <UserIcon className="w-20 h-20"/>
          </div>
          <h2>Fulle Name</h2>
          <button
            className="bg-red-500 hover:bg-red-400 duration-300 shadow-lg text-white font-bold px-5 rounded-md py-1"
          >Log Out</button>
        </div>
      </div>
    </section>
  )
}

export default ProfileManagement;