import React, {FC} from 'react';

import {BrowserRouter, Switch, Route,} from 'react-router-dom';
import Navbar from "./components/Navbar";
import {TodosPage} from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage";



const App: FC = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route component={TodosPage} path='/' exact/>
                    <Route component={AboutPage} path='/about'/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
