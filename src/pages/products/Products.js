import React, {useEffect, useState} from 'react';
import ProductElement from './ProductElement';
import {useParams} from 'react-router-dom';
import api from '../../constants/api';
import style from './Products.module.css';

const Products = () => {
    const params = useParams();
    const [products, setProducts] = useState([]);

    const getProducts = (catalog_name) => {
        fetch(api[catalog_name])
            .then(response => response.json())
            .then(data => setProducts(data))
    }

    useEffect(() => {
        getProducts(params.catalog_name)
    }, [])

    const elements = products.map((item, index) => {
        return <ProductElement
            key={index}
            img={item.img}
            name={item.name}
            price_som={item.price_som}
            price_dollar={item.price_dollar}
        />
    })

    let title;
    if (params.catalog_name === 'iphone'){
        title= 'Iphone';

    } else if (params.catalog_name === 'ipad'){
        title = 'Ipad';

    } else if (params.catalog_name === 'watch'){
        title = 'Watch';
    }

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h3>{title}</h3>
            </div>
            <div className={style.product_list}>
                {elements}
            </div>
        </div>
    );
};

export default Products;


