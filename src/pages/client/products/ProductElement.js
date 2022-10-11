import React from 'react';
import style from './Products.module.css';
import {toast} from "react-hot-toast";
import productManager from "../../../manager/product.manager";

const ProductElement = (props) => {

    const addProduct = () => {
        toast.success('Товар успешно добавлен');

        const obj = { count:1, ...props };
        const products = productManager.getProduct();
        let data;

        if (products){
            const checkResult = productManager.checkProduct(props.id, products);

            if (checkResult === -1){
                products.push(obj);
            } else {
                products[checkResult].count = ++products[checkResult].count;
            }

            data = products;
        } else {
            data = [obj];
        }

        productManager.setProduct(JSON.stringify(data));
    }

    return (
        <div className={style.product_card}>
            <img src={props.img} alt=""/>
            <h3>{props.name}</h3>
            <span>{props.price_som}</span>
            <span>{props.price_dollar}</span>
            <button onClick={addProduct}>Добавить в корзину</button>
        </div>
    );
};

export default ProductElement;