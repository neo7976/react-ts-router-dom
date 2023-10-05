import React, {FC, useState} from 'react';
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";


const App: FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const addHandler = (title: string) => {
        console.log('add new todo', title);
    };

    return <>
        <Navbar/>
        <div className="container">
            <TodoForm onAdd={addHandler}/>


        </div>
    </>
}

export default App;
