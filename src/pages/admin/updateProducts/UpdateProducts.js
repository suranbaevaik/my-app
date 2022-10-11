import React, {useEffect, useState} from 'react';
import s from "../addProducts/AddProducts.module.css";
import api from "../../../constants/api";
import toast from "react-hot-toast";
import {useParams} from "react-router-dom";

const UpdateProducts = () => {

    const {catalog_name, id} = useParams();
    const [product, setProduct] = useState({});
    const [isPending, setIsPending] = useState(false);
    const url = api[catalog_name] + '/' + id

    const getProductById = () => {
        fetch(url)
            .then(response => {
                if (response.ok){
                    return response.json();
                }

                toast.error('Данные не подгрузились. Попробуйте позже');
            })
            .then(data => setProduct(data))
    }

    useEffect(getProductById, []);

    const updateProduct = (e) => {
        const data ={
            img: e.currentTarget.img_url.value,
            name: e.currentTarget.name.value,
            price_som: e.currentTarget.price_som.value,
            price_dollar: e.currentTarget.price_dollar.value,
        }

        setIsPending(true);

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data)
        }

        fetch (url, options)
            .then(response => {
                if(response.ok){
                    toast.success('Товар успешно обновился')
                    setIsPending(false)
                } else{
                    toast.error('Что-то пошло не так. Товар не обновился')
                }
            })
    }

    return (
        <div className={s.container}>
            <h2>Редактирование товара</h2>
            <form onSubmit={updateProduct} action="javascript:void(0)">
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Измените ссылку для фото"
                        name="img_url"
                        defaultValue={product.img}
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Измените название"
                        name="name"
                        defaultValue={product.name}
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Измените цену в сомах"
                        name="price_som"
                        defaultValue={product.price_som}
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Измените цену в долларах"
                        name="price_dollar"
                        defaultValue={product.price_dollar}
                    />
                </div>
                <div className={s.form_control}>
                    <button disabled={isPending} type="submit">Изменить</button>
                    {isPending ? <p>Идет загрузка</p> : null}
                </div>
            </form>
        </div>
    );
};

export default UpdateProducts;