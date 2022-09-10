import React from 'react';
import style from './Products.module.css';

const ProductElement = (props) => {
    const getProductName = () => {
        let data = {};
        data["product_name"] = props.name;
        console.log(data);
    }

    return (
        <div className={style.product_card}>
            <img src={props.img} alt=""/>
            <h3>{props.name}</h3>
            <span>{props.price_som}</span>
            <span>{props.price_dollar}</span>
            <button onClick={getProductName}>Добавить в корзину</button>
        </div>
    );
};

export default ProductElement;