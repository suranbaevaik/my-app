import React, {useState} from 'react';

const style = {
    backgroundColor: "lightgreen",
    display:"flex",
    gap: "15px",
    justifyContent:"center",
    padding: "10px"
}

const Value = () => {
    const [value, setValue] = useState(0);

    return (
        <div style={style}>
            <button onClick={() => {
                setValue(value+1);
            }}>Увеличить на 1</button>
            <button onClick={() => {
                setValue(value-1);
            }}>Уменьшить на 1</button>
            <p>{value}</p>
        </div>
    );
};

export default Value;