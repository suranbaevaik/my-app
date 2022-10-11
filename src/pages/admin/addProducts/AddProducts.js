import React, {useEffect, useState} from 'react';
import api from '../../../constants/api';
import toast from 'react-hot-toast';
import s from './AddProducts.module.css';

const AddProducts = () => {

    const saveData = (e) => {

        const data = {
            img: e.currentTarget.img_url.value,
            name: e.currentTarget.name.value,
            price_som: e.currentTarget.price_som.value,
            price_dollar: e.currentTarget.price_dollar.value,
        }

        const catalog = e.currentTarget.catalog.value;

        const options = {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        }

        fetch(api[catalog], options)
            .then(response => {
                if (response.status === 201){
                    toast.success('Товар успешно создан');
                } else{
                    toast.error('Что-то пошло не так. Перегрузите страницу');
                }
            })
    }

    return (
        <div className={s.container}>
            <h2>Добавление товара</h2>
            <form onSubmit={saveData} action="javascript:void(0)">
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Введите ссылку для фото"
                        name="img_url"
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Введите название"
                        name="name"
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="number"
                        placeholder="Введите цену в сомах"
                        name="price_som"
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="number"
                        placeholder="Введите цену в долларах"
                        name="price_dollar"
                    />
                </div>
                <div className={s.form_control}>
                    <select name="catalog">
                        <option value="0">Выберите продукцию</option>
                        <option value="iphone">Iphone</option>
                        <option value="ipad">Ipad</option>
                        <option value="watch">Watch</option>
                    </select>
                </div>
                <div className={s.form_control}>
                    <button type="submit">Сохранить</button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;