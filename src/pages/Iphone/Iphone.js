import React from 'react';
import iphone from "../../constants/iphone";
import IphoneElement from "./IphoneElement";
import style from './Iphone.module.css';

const Iphone = () => {
    const element = iphone.map((item, index ) => {
        return <IphoneElement
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

export default Iphone;