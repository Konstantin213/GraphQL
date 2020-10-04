import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Blocks from "./components/Block/Blocks";
import MorePage from "./components/MorePage/MorePage";
import Login from "./components/Login/Login";


const App = () => (
    <div>
        <Route path="/login" render={() => <Login/>}/>
        <Route path="/blocks" render={() => <Blocks/>}/>
        <Route path="/detail" render={() => <MorePage/>}/>
    </div>

)

export default App;







