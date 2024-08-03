"use client";

import React, { useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";

const TodoApp = () => {

    const todos = useSelector((state)=>state);

    console.log(todos)

  const [isCompleted, setIsCompleted] = useState(false);
  
  return (
    <div className="w-2/4 mx-auto ">
      <h2 className="text-4xl text-center mb-10 font-bold relative">
        Simple Todo App
      </h2>
      <div className="bg-white p-8">
        <span className="absolute top-[228px] left-[430px]">
          <IoDocumentTextOutline className="text-2xl" />
        </span>
        <input
          type="text"
          name=""
          className="py-5 w-full px-10 rounded-md  outline-none bg-[#F3F4F6]"
          placeholder="type your todo..."
          id=""
        />
        <span className="absolute top-[228px] right-[430px]">
          <IoMdAddCircleOutline className="text-2xl" />
        </span>
        <hr className="my-6" />
        <div className="flex items-center">
          <div className="rounded-full bg-white border-2  w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500">
            <input
              type="checkbox"
              onChange={() => setIsCompleted(!isCompleted)}
              className="opacity-0 absolute rounded-full"
              name=""
              id=""
            />
            {isCompleted && (
              <svg
                className=" fill-current w-3 h-3 text-green-500 pointer-events-none"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            )}
          </div>
          <span className={`${isCompleted && 'line-through'}`}>Exploring JavaScript Language</span>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
