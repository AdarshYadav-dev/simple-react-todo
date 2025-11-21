import React, { useRef, useState } from 'react'
import Todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems';

const Todo = () => {

    const [todolist, setTodolist] = useState([]);
    const inputRef = useRef();

    // Add Task
    const add = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === "") return;

        const newTodo = {
            id: Date.now(),
            text: inputText,
            iscomplete: false,
        };

        setTodolist((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    };

    // Toggle Complete
    const toggleComplete = (id) => {
        setTodolist((prev) =>
            prev.map((todo) =>
                todo.id === id
                    ? { ...todo, iscomplete: !todo.iscomplete }
                    : todo
            )
        );
    };

    // Delete Task
    const deleteTodo = (id) => {
        setTodolist((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

            {/* Header */}
            <div className='flex items-center mt-7 gap-2'>
                <img src={Todo_icon} alt="todo icon" className='w-8' />
                <h1 className='text-3xl font-semibold'>Todo List React</h1>
            </div>

            {/* Input */}
            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder='Add Your Task'
                    className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
                />
                <button
                    onClick={add}
                    className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'
                >
                    Add
                </button>
            </div>

            {/* Todo List */}
            <div className='mt-3'>
                {todolist.map((item) => (
                    <Todoitems
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        iscomplete={item.iscomplete}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </div>

        </div>
    );
};

export default Todo;
