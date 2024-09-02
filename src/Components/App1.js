/*
import React from 'react'

const App1 = () => {
    let color = "Red";
    const changeColor = () => {
        color = "Blue";
        console.log(color);
    }
    console.log("Outer="+color);


    return (
        <>
            <h1>My favourite color is {color}.</h1>
            <button onClick={changeColor}>Blue</button>
        </>
    )
}
*/

import React, { useState } from 'react'

const App1 = () => {

    // const [color, setColor] = useState("Red");    
    // const changeColor = () => {
    //     setColor("Blue");
    // }
    // console.log("Outer="+color);

    // return (
    //     <>
    //         <h1>My favourite color is {color}.</h1>
    //         <button onClick={changeColor}>Blue</button>
    //     </>
    // )


    const [car, setCar] = useState({
        brand: "Tata",
        model: "Punch",
        year: "2022",
        color: "red"
    });
    const changeCar = () => {
        // setCar({color:"Blue"});

        // setCar({
        //     brand: "Tata",
        //     model: "Punch",
        //     year: "2022",
        //     color: "Blue"
        // });

        setCar((prev) =>{
            return {
            ...prev,
            color: "Blue"
            }
        });
    }


    return (
        <>
            <h1>My favourite car brand: {car.brand}, model: {car.model}, year: {car.year} and color is {car.color}.</h1>
            <button onClick={changeCar}>Change car</button>
        </>
    )
}

export default App1