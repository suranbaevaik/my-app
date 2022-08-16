import React,{useState} from 'react';

const style = {
    backgroundColor: "grey",
    padding:"10px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
}

const State = () => {
    const [text, setText] = useState('good evening');
    const [num, setNum] = useState(0);

    return (
        <div style={style}>
            <button onClick={() => {
                setText('good morning');
                setNum(1);
            }}>Нажми меня</button>
            <p>{text}</p>
            <p>{num}</p>
        </div>
    );
};

export default State;