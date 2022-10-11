import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {toast} from 'react-hot-toast';
import api from '../../../constants/api';
import s from './ChangeProducts.module.css';

const ChangeProducts = () => {

    const params = useParams();
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        const url = api[params.catalog_name];

        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
    }

    useEffect(() => {
        getProducts();
    }, [])

   const deleteProducts = (id) => {
       const url = api[params.catalog_name] + '/' + id;

        const options = {
            method: 'DELETE'
        }

        fetch(url, options)
            .then(response => {
                if (response.status === 200){
                    toast.success('Товар успешно удален')
                    getProducts();
                } else {
                    toast.error('Упс ошибочка. Попробуйте позже')
                }
            })
    }

    const getLink = (id) => '/updateProducts/' + params.catalog_name + '/' + id;

    return (
        <div>
            <table>
                {
                    products.map((item => {
                        return (
                            <tbody>
                                <tr className={s.table}>
                                    <td>
                                        <img src={item.img} alt=""/>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.price_som}
                                    </td>
                                    <td>
                                        {item.price_dollar}
                                    </td>
                                    <td>
                                        <button className={s.redbtn} onClick={() => deleteProducts(item.id)}>Удалить</button>
                                        <Link to={getLink(item.id)}>
                                            <button className={s.bluebtn}>Редактировать</button>
                                        </Link>

                                    </td>
                                </tr>
                            </tbody>
                        )
                    }))
                }
            </table>
        </div>
    );
};

export default ChangeProducts;