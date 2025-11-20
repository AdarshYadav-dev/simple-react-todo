import React, { useRef, useState } from 'react'
import Todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems';

const Todo = () => {

    const [todolist, setTodolist] = useState([]);
    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === "") return;

        const newTodo = {
            id: Date.now(),
            text: inputText,
            iscomplete: false,
        }

        setTodolist((pre) => [...pre, newTodo]);
        inputRef.current.value = "";
    }

    const deleteTodo = (id) => {
        setTodolist((p))
    }

    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

            <div className='flex items-center mt-7 gap-2'>
                <img src={Todo_icon} alt="todo icon" className='w-8' />
                <h1 className='text-3xl font-semibold'>Todo List React</h1>
            </div>

            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder='Add Your Task'
                    className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
                />
                <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add</button>
            </div>

            {todolist.map((item, index) => (
                <Todoitems key={index} text={item.text} />
            ))}

        </div>
    )
}

export default Todo;
