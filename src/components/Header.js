import React from "react";
import Title from "./Title";

const Header = () => {
    return(
     <header className="w3-container w3-center w3-padding-32 menu">
          <nav>
              <ul>
                  <li>
                      <a href="/">Главная</a>
                  </li>
                  <li>
                      <a href="/about">О нас</a>
                  </li>
                  <li>
                      <a href="/form">Обратная связь</a>
                  </li>
                  <li>
                      <a href="/posts">Все посты</a>
                  </li>
                  <li>
                      <a href="/popular_posts">Популярные посты</a>
                  </li>
                  <li>
                      <a href="/tags">Все теги</a>
                  </li>
              </ul>
          </nav>
     </header>
    )
}

export default Header;