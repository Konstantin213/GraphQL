import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Blocks from "./block/Blocks";
import MorePage from "./block/morePage/morePage";
import Login from "./login/Login";


const App = () => (
    <div>
        <Route path="/login" render={() => <Login/>}/>
        <Route path="/blocks" render={() => <Blocks/>}/>
        <Route path="/detail" render={() => <MorePage/>}/>
    </div>

)

export default App;







