import React from 'react';

const Alert = (props) => {
    const style = {
        width: "400px",
        margin: "0 auto",
        display: "flex",
        flexDirection:"column",
        padding: "16px",
        marginBottom: "10px",
        borderRadius: "10px",
        backgroundColor: props.backgroundColor,
        color: props.color
    }

    return (
        <>
            <div style={style}>
                {props.text}
            </div>
        </>
    );
};

export default Alert;