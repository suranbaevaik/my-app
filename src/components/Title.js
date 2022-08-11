import React from 'react';

const Title = (props) => {
    return <h1 style={ {color:props.color, fontSize:props.size} }>{props.text}</h1>
};

export default Title;