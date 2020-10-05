import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import ItemLayout from "./components/ItemLayout/ItemLayout";
import DetailPage from "./components/detailPage/detailPage";
import Login from "./components/Login/Login";


const App = () => (
    <div>
        <Route path="/login" component={Login}/>
        <Route path="/blocks" component={ItemLayout}/>
        <Route path="/detail" component={DetailPage}/>
    </div>

)

export default App;







