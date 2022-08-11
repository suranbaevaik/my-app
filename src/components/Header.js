import React from "react";
import Title from "./Title";

const Header = () => {
    return(
     <header className="w3-container w3-center w3-padding-32">
          <Title
            text="My Blog"
            color="darkred"
            size="48px"
          />
          <p>
              Welcome to the blog of <span className="w3-tag">unknown</span>
          </p>
     </header>
    )
}

export default Header;