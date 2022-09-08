import React from 'react';
import circle from '../../assets/icons/x-circle.svg';
import phone from '../../assets/images/iphone-13-green-select.webp';
import style from './ShoppingCart.module.css';

const ShoppingCart = () => {
    return (
        <div className={style.container}>
            <div className={style.cart_box_title}>
                <h3>Корзина</h3>
                <p>Товары в вашей корзине</p>
            </div>
            <div className={style.cart_box}>
                <div className={style.form_desc}>
                    <div>
                        <p>Продукт</p>
                    </div>
                    <div className={style.amount}>
                        <p>Количество</p>
                    </div>
                    <div className={style.comment}>
                        <p>Комментарий</p>
                    </div>
                    <div className={style.price_text}>
                        <p>Цена</p>
                    </div>
                    <div>
                        <p>К оплате</p>
                    </div>
                </div>
                <hr/>
                <div className={style.product_option}>
                    <div className={style.product_name}>
                        <div className={style.product_img}><img src={phone} alt=""/></div>
                        <div><p>iPhone 13</p></div>
                    </div>
                    <div className={style.input_box}>
                        <form action="#">
                            <div>
                                <input type="text"/>
                            </div>
                            <div>
                                <input type="text"/>
                            </div>
                        </form>
                    </div>
                    <div className={style.price}>
                        <p>$880,0</p>
                        <p>73920 сом</p>
                    </div>
                    <div className={style.sum}>
                        <div>
                            <p>$880</p>
                            <p>73920 сом</p>
                        </div>
                        <div>
                            <img src={circle} alt=""/>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    );
};

export default ShoppingCart;