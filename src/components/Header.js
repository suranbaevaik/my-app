import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    const setActive = ({isActive}) => isActive ? 'active' : '';

    return(
     <header className="w3-container w3-center w3-padding-32 menu">
          <nav>
              <ul>
                  <li>
                      <NavLink to="/about" className={setActive}>О нас</NavLink>
                  </li>
                  <li>
                      <NavLink to="/form" className={setActive}>Обратная связь</NavLink>
                  </li>
                  <li>
                      <NavLink to="/catalog" className={setActive}>Каталог</NavLink>
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