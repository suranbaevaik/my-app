import React from "react";
import {NavLink} from "react-router-dom";
import cart from '../assets/icons/shopping-cart.png';

const Header = () => {
    const setActive = ({isActive}) => isActive ? 'active' : '';

    return(
     <header className="w3-container w3-center w3-padding-32 menu">
          <nav>
              <ul>
                  <li>
                      <NavLink to="/" className={setActive}>Главная</NavLink>
                  </li>
                  <li>
                      <NavLink to="/about" className={setActive}>О нас</NavLink>
                  </li>
                  <li>
                      <NavLink to="/form" className={setActive}>Обратная связь</NavLink>
                  </li>
                  <li>
                      <NavLink to="/posts" className={setActive}>Все посты</NavLink>
                  </li>
                  <li>
                      <NavLink to="/popular_posts" className={setActive}>Популярные посты</NavLink>
                  </li>
                  <li>
                      <NavLink to="/tags" className={setActive}>Все теги</NavLink>
                  </li>
                  <li>
                      <NavLink to="/catalog" className={setActive}>Каталог</NavLink>
                  </li>
                  <li>
                      <NavLink to="/shopping_cart">
                          <img src={cart} style={{width: "30px"}} alt=""/>
                      </NavLink>
                  </li>
              </ul>
          </nav>
     </header>
    )
}

export default Header;


/*const car = {
        name:"BMW",
        color:"Black"
    }

    const {name, color} = car; деструктуризация

    /!*const name = car.name;
    const color = car.color;*!/

    console.log(name);
    console.log(color);*/