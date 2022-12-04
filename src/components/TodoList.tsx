import React from 'react';
import { Todo } from '../Modal';
import SingleTodos from './SingleTodos';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='todos'>
            {
                todos.map(todo => (
                    <SingleTodos
                        todo={todo}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos}
                    ></SingleTodos>
                ))
            }
        </div>
    );
};

export default TodoList;