import React, {useState} from 'react';

const style = {
    backgroundColor: "lightyellow",
    display:"flex",
    gap: "15px",
    justifyContent:"center",
    padding: "10px"
}

const Number = () => {
    const [num, setNum] = useState(0);

    return (
        <div style={style}>
            <button onClick={() => {
                setNum(num+1);
            }}>Увеличить на 1</button>
            <button onClick={() => {
                setNum(num+5);
            }}>Увеличить на 5</button>
            <button onClick={() => {
                setNum(num+10);
            }}>Увеличить на 10</button>
            <p>{num}</p>
        </div>
    );
};

export default Number;