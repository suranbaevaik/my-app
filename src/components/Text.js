import React, {useState} from 'react';

const style = {
    margin: "10px",
}

const Text = () => {
    const [text, setText] = useState('Lorem ipsum iset');
    const [btn, setBtn] = useState('Скрыть');

    const change = () => {
        let value = text;
        (value === 'Lorem ipsum iset') ? setText('') : setText ('Lorem ipsum iset');
        let content = btn;
        (content === 'Скрыть') ? setBtn('Показать') : setBtn('Скрыть');
    }

    return (
        <div style={style}>
            <button onClick={change}>{btn}</button>
            <p>{text}</p>
        </div>
    );
};

export default Text;