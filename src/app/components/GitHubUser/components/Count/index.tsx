"use client";

import React, { useContext, useState } from "react";
import { LoggedUserContext } from "@/app/context/LoggedUserContext";

export interface CountProps {
  user: {
    login: string;
    id: number;
  };
}

const Count = ({ user }: CountProps) => {
  const [count, setCount] = useState<number>(0);
  const [open, setToogle] = useState<boolean>(false);
  const { handleCurrentlyUser } = useContext(LoggedUserContext);

  const handleIncrease = () => {
    setCount((old) => old + 1);
  };

  const handleToogle = () => {
    setToogle((old) => !old);
  };

  const handleLogin = () => {
    handleCurrentlyUser(user.login);
    handleToogle();
  };

  return (
    <>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleIncrease}
        type="button"
      >
        Likes {count}
      </button>
      <button
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={handleToogle}
        type="button"
      >
        Open Infos
      </button>

      <div
        id={user.login}
        tabIndex={2}
        aria-hidden="false"
        className={`flex fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${
          open ? "visible" : "hidden"
        }`}
      >
        <div className="self-center mr-auto ml-auto relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                User Name: {user.login}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
                onClick={handleToogle}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Total Likes: {count}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                User ID: {user.id}
              </p>
            </div>
            <div className="p-6 space-y-6">
              <button type="button" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Count;
