"use client";

import React, { useEffect, useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addedTodo, deleteTodo, toggle } from "@/redux/actions";
import { IoMdRemoveCircle } from "react-icons/io";

const TodoApp = () => {
  const [inputText, setInputText] = useState("");
  const [incompleteTodo, setIncompleteTodo] = useState(0);
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const todo = e.target.value;
    setInputText(todo);
    // e.target.value.reset()
  };

  const handleAdded = () => {
    dispatch(addedTodo(inputText));
    setInputText("");
  };

  const handleToggle = (todoId) => {
    dispatch(toggle(todoId));
  };

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const completedTask = () => {
    const taskRemaining = todos.filter((todo) => todo.completed).length;
    setIncompleteTodo(taskRemaining);
  };

  useEffect(() => {
    completedTask();
  }, [todos]);

  // console.log(todos)

  //   const [isCompleted, setIsCompleted] = useState(false);

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
          value={inputText}
          onChange={handleInput}
          name=""
          className="py-5 w-full px-10 rounded-md  outline-none bg-[#F3F4F6]"
          placeholder="type your todo..."
          id=""
        />
        <span
          onClick={handleAdded}
          className="absolute top-[228px] cursor-pointer right-[430px]"
        >
          <IoMdAddCircleOutline className="text-2xl" />
        </span>
        <hr className="my-6" />
        <div className="flex flex-col">
          {todos.map((todo) => (
            <div key={todo.id} className="flex justify-between space-y-2">
              <div className="flex">
                <div className="rounded-full bg-white border-2  w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500">
                  <input
                    type="checkbox"
                    onChange={() => handleToggle(todo.id)}
                    className="opacity-0 absolute rounded-full"
                    name=""
                    id=""
                  />
                  {todo.completed && (
                    <svg
                      className=" fill-current w-3 h-3 text-green-500 pointer-events-none"
                      viewBox="0 0 20 20"
                    >
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                  )}
                </div>
                <span className={`${todo.completed && "line-through"}`}>
                  {todo.text}
                </span>
              </div>
              <button onClick={() => handleDelete(todo.id)}>
                <IoMdRemoveCircle className="text-2xl text-red-500" />
              </button>
            </div>
          ))}
        </div>
        <hr className="my-6" />
        <p className="text-gray-500 text-sm">
          {" "}
          {incompleteTodo} Task completed
        </p>
      </div>
    </div>
  );
};

export default TodoApp;
