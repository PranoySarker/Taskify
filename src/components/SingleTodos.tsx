import React from 'react';
import { Todo } from '../Modal';
import { AiFillEdit, AiTwotoneDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';
import TodoList from './TodoList';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodos: React.FC<Props> = ({ todos, setTodos, todo }) => {

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))

    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    return (
        <form className='todo-single'>
            {
                todo.isDone ? (
                    <s className='todo-single-text'>{todo.todo}</s>
                ) : (
                    <span className='todo-single-text'>{todo.todo}</span>
                )
            }
            {/* <span className='todo-single-text'>{todo.todo}</span> */}
            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiTwotoneDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form >
    );
};

export default SingleTodos;