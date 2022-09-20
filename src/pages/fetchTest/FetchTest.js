import React, {useState} from 'react';
import s from './FetchTest.module.css';
import api from '../../constants/api';

const FetchTest = () => {
    const [posts, setPosts] = useState([]);
    const [isPending, setIsPending] = useState(false);

    const getUsers = () => {
        fetch(api.getUsers)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    const getPosts = () => {
        setIsPending(true);
        fetch(api.getPosts)
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setIsPending(false);
            })
    }

    const getProducts = () => {
        fetch(api.getProducts)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (
        <div className={s.container}>
            <button onClick={getUsers} className={s.btn}>Получить пользователей</button>
            <button onClick={getPosts} className={s.btn}>Получить посты</button>
            <button onClick={getProducts} className={s.btn}>Получить Продукцию</button>
            { isPending ? <h2>Идет загрузка....</h2> : null }
            <ul>
                { posts.map(item => <li>{item.title}</li>) }
            </ul>
        </div>
    );
};

export default FetchTest;