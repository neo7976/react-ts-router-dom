import React, {FC} from 'react';
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";


const App: FC = () => {
    return <>
        <Navbar/>
        <div className="container">
            <TodoForm/>


        </div>
    </>
}

export default App;
