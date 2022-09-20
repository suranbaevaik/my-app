import React from 'react';
import s from './Catalog.module.css';
import iphone from '../../assets/images/iphones.webp';
import ipad from '../../assets/images/ipads.webp';
import watch from '../../assets/images/watches.webp';
import {Outlet} from 'react-router-dom';
import {Link} from "react-router-dom";

const Catalog = () => {
    return (
        <>
            <h1 className={s.title}>Каталог</h1>
            <div className={s.container}>
                <Link to="/catalog/iphone" className={s.link_box} >
                    <div className={s.catalog_card}>
                        <img src={iphone} alt="iphone"/>
                        <div className={s.card_desc}>
                            <p>iPhone</p>
                            <Link to="/catalog/iphone">перейти ></Link>
                        </div>
                    </div>
                </Link>
                <Link to="/catalog/ipad" className={s.link_box}>
                    <div className={s.catalog_card}>
                        <img src={ipad} alt=""/>
                        <div className={s.card_desc}>
                            <p>iPad</p>
                            <Link to="/catalog/ipad">перейти ></Link>
                        </div>
                    </div>
                </Link>
                <Link to="/catalog/watch" className={s.link_box}>
                    <div className={s.catalog_card}>
                        <img src={watch} alt=""/>
                        <div className={s.card_desc}>
                            <p>Watch</p>
                            <Link to="/catalog/watch">перейти ></Link>
                        </div>
                    </div>
                </Link>
            </div>
            <Outlet/>
        </>
    );
};

export default Catalog;