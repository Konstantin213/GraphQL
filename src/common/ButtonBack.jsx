import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import {useHistory} from "react-router-dom";


const ButtonBack = () => {

    const history = useHistory()
    const goBack = () => {
        history.push('/blocks')
    };

    return <Button onClick={() => goBack()} type="primary">Назад</Button>
}

export default ButtonBack;

