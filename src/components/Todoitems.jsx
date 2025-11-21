import React from 'react'
import Tick from '../assets/tick.png'
import Not_Tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const Todoitems = ({ id, text, iscomplete, toggleComplete, deleteTodo }) => {
    return (
        <div className='flex items-center my-3 gap-2'>

            {/* Left Section */}
            <div
                className='flex flex-1 items-center cursor-pointer'
                onClick={() => toggleComplete(id)}
            >
                <img
                    src={iscomplete ? Tick : Not_Tick}
                    alt="tick"
                    className='w-7'
                />

                <p className={`ml-4 text-[17px] ${iscomplete ? 'line-through text-gray-400' : 'text-slate-700'}`}>
                    {text}
                </p>
            </div>

            {/* Delete Icon */}
            <img
                src={delete_icon}
                alt="delete"
                className='w-3.5 cursor-pointer'
                onClick={() => deleteTodo(id)}
            />

        </div>
    );
};

export default Todoitems;
