import React from 'react';
import iphone from '../../constants/iphone';
import ipad from "../../constants/ipad";
import watch from "../../constants/watch";
import ProductElement from './ProductElement';
import style from './Products.module.css';
import {useParams} from 'react-router-dom';

const Products = () => {
    const params = useParams();

    const element = iphone.map((item, index ) => {
        return <ProductElement
            key={index}
            img={item.img}
            name={item.name}
            price_som={item.price_som}
            price_dollar={item.price_dollar}
        />
    })

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>Iphone page</h1>
            </div>
            <div className={style.product_list}>
                {element}
            </div>
        </div>
    );
};

export default Products;