import React, {useState} from 'react';
import s from './AddProducts.module.css';

const AddProducts = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <div className={s.container}>
            <form action="javascript:void(0)">
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Введите ссылку для фото"
                        name="product_photo"
                        onChange={handleChange}
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="text"
                        placeholder="Введите название"
                        name="product_name"
                        onChange={handleChange}
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="number"
                        placeholder="Введите цену в сомах"
                        name="price_som"
                        onChange={handleChange}
                    />
                </div>
                <div className={s.form_control}>
                    <input
                        type="number"
                        placeholder="Введите цену в долларах"
                        name="price_dollar"
                        onChange={handleChange}
                    />
                </div>
                <div className={s.form_control}>
                    <select onChange={handleChange}>
                        <option value="0">Выберите продукцию</option>
                        <option value="1">Iphone</option>
                        <option value="2">Ipad</option>
                        <option value="3">Watch</option>
                    </select>
                </div>
                <div className={s.form_control}>
                    <button onClick={handleSubmit} type="submit">Сохранить</button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;