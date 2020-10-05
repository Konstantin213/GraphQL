import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import ItemLayout from "./components/ItemLayout/ItemLayout";
import MorePage from "./components/MorePage/MorePage";
import Login from "./components/Login/Login";


const App = () => (
    <div>
        <Route path="/login" component={Login}/>
        <Route path="/blocks" component={ItemLayout}/>
        <Route path="/detail" component={MorePage}/>
    </div>

)

export default App;







