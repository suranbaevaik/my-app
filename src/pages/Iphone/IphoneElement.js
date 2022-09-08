import React from 'react';
import style from "./Iphone.module.css";

const IphoneElement = (props) => {
    const getProductName = (el) => {
        let data ={};
        data["product_name"] = el.name;
        console.log(data);
    }

    return (
        <div className={style.product_card}>
            <img src={props.img} alt=""/>
            <h3>{props.name}</h3>
            <span>{props.price_som}</span>
            <span>{props.price_dollar}</span>
            <button onClick={() => getProductName(props)}>Добавить в корзину</button>
        </div>
    );
};

export default IphoneElement;