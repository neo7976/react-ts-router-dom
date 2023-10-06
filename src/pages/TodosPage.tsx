import React, {FC, Fragment, useEffect, useState} from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import {ITodo} from "../interfaces";

declare var confirm: (question: string) => boolean;

export const TodosPage: FC = () => {

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

    const toggleHandler = (id: number) => {
        console.log(id);
        setTodos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                        todo.completed = !todo.completed
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
    return (
        <Fragment>
            <TodoForm
                onAdd={addHandler}
            />
            <TodoList
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}
            />
        </Fragment>
    );
}