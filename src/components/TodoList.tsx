import React, {FC, useCallback} from "react";
import {ITodo} from "../interfaces";

type TodoListProps = {
    todos: ITodo[],
    //1 вариант записи
    onToggle(id: number): void,
    //2 вариант записи
    onRemove: (id: number) => void
}

export const TodoList: FC<TodoListProps> = ({todos, onRemove, onToggle}) => {

    if (todos.length === 0) {
        return <p className="center">Пока дел нет:</p>
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo'];
                if (todo.completed) {
                    classes.push('completed');
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => onToggle(todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i className='materail-icons red-text'
                               onClick={() => onRemove(todo.id)}
                            >delete</i>
                        </label>
                    </li>
                );
            })}
        </ul>
    );
}

export default TodoList;