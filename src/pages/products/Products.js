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

    let title;
    let elements;
    if (params.catalog_name === 'iphone'){
        title= 'Iphone';
        elements = products.map((iphone) => {
            return <ProductElement
                key={iphone.id}
                img={iphone.img}
                name={iphone.name}
                price_som={iphone.price_som}
                price_dollar={iphone.price_dollar}
            />
        })
    } else if (params.catalog_name === 'ipad'){
        title = 'Ipad';
        elements = products.map((ipad) => {
            return <ProductElement
                key={ipad.id}
                img={ipad.img}
                name={ipad.name}
                price_som={ipad.price_som}
                price_dollar={ipad.price_dollar}
            />
        })
    } else if (params.catalog_name === 'watch'){
        title = 'Watch';
        elements = products.map((watch) => {
            return <ProductElement
                key={watch.id}
                img={watch.img}
                name={watch.name}
                price_som={watch.price_som}
                price_dollar={watch.price_dollar}
            />
        })
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


