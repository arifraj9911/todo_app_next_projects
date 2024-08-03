import React from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";

const TodoApp = () => {
    return (
        <div className='w-1/3 mx-auto'>
            <h2 className='text-4xl text-center mb-10 font-bold relative'>Simple Todo App</h2>
            <div className=''>
                <span className='absolute top-[194px] left-[500px]'><IoDocumentTextOutline className='text-2xl' /></span>
                <input type="text" name="" className='py-5 w-full px-10 rounded-md  outline-none bg-[#F3F4F6]' placeholder='type your todo...'   id="" />
                <span className='absolute top-[194px] right-[500px]'><IoMdAddCircleOutline className='text-2xl'/></span>
            </div>
        </div>
    );
};

export default TodoApp;