import React from "react";
import { useHistory } from "react-router-dom";
import b from './blocks.module.css'
import Items from "./Item/Item";

const Blocks = () => {

    const history = useHistory()
    const goToDetail = () => {
        history.push({pathname: '/detail'})
    };
    return (
        <div>
            <button className={b.block} onClick={() => goToDetail()}>
                <Items/>
            </button>
        </div>

    )
}
export default Blocks;

