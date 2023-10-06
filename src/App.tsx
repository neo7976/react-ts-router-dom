import React, {FC, useState} from 'react';
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import {ITodo} from "./interfaces";
import TodoList from "./components/TodoList";


const App: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const addHandler = (title: string) => {
        console.log('add new todo', title);
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false,
        }
        setTodos(prevState => [newTodo, ...prevState]);
        console.log(todos);
    };

    const toggleHandler = (id: number) => {
        console.log(id);
        setTodos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    console.log('совпадает', id);
                    todo.completed = !todo.completed
                }
                return todo
            })
        );
    };

    const removeHandler = (id: number) => {
        console.log(id);
        setTodos(prevState => prevState.filter(todo => todo.id !== id));
    }

    return <>
        <Navbar/>
        <div className="container">
            <TodoForm
                onAdd={addHandler}
            />
            <TodoList
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}
            />
        </div>
    </>
}

export default App;
