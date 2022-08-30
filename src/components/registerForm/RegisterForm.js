import React from 'react';
import style from "./RegisterForm.module.css";

const RegisterForm = () => {
    return (
        <div className={style.container}>
            <form className={style.auth}>
                <div>
                    <h1 className={style.title}>Регистрация на курс английского языка</h1>
                </div>
                <div className={style.personalData}>
                    <div>
                        <div><p>ФИО студента</p></div>
                        <div className={style.studentName}>
                            <div>
                                <input type="text" placeholder="Фамилия"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Имя"/>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div><p>Дата Рождения</p></div>
                        <input type="date"/>
                    </div>

                    <div>
                        <div><p>Номер телефона студента</p></div>
                        <input type="tel" name="phoneNumber"/>
                    </div>

                    <div>
                        <div><p>Электронная почта студента</p></div>
                        <input type="email"/>
                    </div>

                    <div>
                        <div><p>Адрес проживания</p></div>
                        <input type="text"/>
                    </div>

                    <div>
                        <div><p>Курсы</p></div>
                        <select>
                            <option value="">Выберите курс</option>
                            <option value="">Elementary A1</option>
                            <option value="">Elementary A2</option>
                            <option value="">Intermediate B1</option>
                            <option value="">Upper-Intermediate B2</option>
                            <option value="">Advanced C1</option>
                            <option value="">Advanced C2</option>
                        </select>
                    </div>
                </div>

                <div className={style.submitBox}>
                    <button type="submit" className={style.btn}>Отправить</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;