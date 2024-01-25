import React, {useEffect, useState} from "react";
import CustomButton from "../../components/buttons/CustomButton";
import {useRouteError} from "react-router-dom";


function Home2() {
    const [clicked, setClicked] = useState(false);
    const [counter, setCounter] = useState(0);
    const error = useRouteError()
    console.log("Renderizando Home2");
    const handleClick = () => {
        setClicked(!clicked);
    }

    useEffect(() => {
        setCounter(counter + 1);
        return () => {
            setCounter(0)
        }
    }, [clicked]);

    const color = '#fffff';
    return (
        <div className="page-container">

            <h1>Home Page</h1>
            {error && <div>{error.message}</div>}
            <p style={{color: color}}>{counter}</p>
            <CustomButton children={'Click me!'} onClick={handleClick}/>

        </div>
    )

}


export default Home2;