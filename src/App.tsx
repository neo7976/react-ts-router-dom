import React, {FC, useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import {ITodo} from "./interfaces";
import TodoList from "./components/TodoList";

declare var confirm: (question: string) => boolean;

const App: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const addHandler = (title: string) => {
        // console.log('add new todo', title);
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false,
        }
        setTodos(prevState => [newTodo, ...prevState]);
    };

    //todo: Решить проблему с двойным вызовом
    const toggleHandler = (id: number) => {
        console.log(id);
        setTodos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    const shouldRemove = confirm('Вы уверены, что задача выполнена?');
                    if (shouldRemove) {
                        console.log('совпадает', id);
                        todo.completed = !todo.completed
                    }
                }
                return todo
            })
        );
    };

    const removeHandler = (id: number) => {
        const shouldRemove = window.confirm('Вы уверены, что хотите удалить элемент?');
        if (shouldRemove) {
            setTodos(prevState => prevState.filter(todo => todo.id !== id));
        }
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
