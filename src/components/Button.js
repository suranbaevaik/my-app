import React from 'react';

const Button = (props) => {
    const style = {
        margin: "50px 10px",
        textAlign: "center",
        padding: "10px",
        boxSizing: "content-box",
        boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset",
        cursor: "pointer",
        border: "none",
        borderRadius: "5px",
        backgroundColor: props.backgroundColor,
        color: props.color
    }

    if(props.title){
        return(
            <a style={style} href={"https://www.youtube.com/"}>{props.title}</a>
        )
    } else {
        return (
            <button style={style}>{props.text}</button>
        );
    }
};

export default Button;