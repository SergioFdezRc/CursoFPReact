import {useEffect, useId, useRef, useState} from "react";

function Refs() {
    const id = useId();
    const inputRef = useRef(null);
    const [value, setValue] = useState('');

    useEffect(() => {
        if (inputRef?.current !== null)
            inputRef.current.value = value;
    }, [value]);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div key={id}>
            <h1>Refs</h1>
            <input ref={inputRef} type="text" onChange={(e) => setValue(e.target.value)}/>
            <p>{inputRef?.current?.value}</p>
        </div>
    );
}

export default Refs;