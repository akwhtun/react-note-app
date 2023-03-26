import React from "react";
import { useState } from "react";

// class Hook extends React.Component{
// render() {
// return (<div>
//        <button>-</button>
//        <span>0</span>
//        <button>+</button>
//    </div>)
// }
// }

function Hook() {
     const [count, setCount] =  useState(4);
     const [theme, setTheme] =  useState('red');


     function decrementCount(){
        setCount(prevState => prevState - 1)
     }
     function incrementCount(){
        setCount(prevState => prevState + 1)
     }
       return (<div>
                     <button onClick={decrementCount}>-</button>
                     <span>{count}</span>
                     <span>{theme}</span>
                     <button onClick={incrementCount}>+</button>
                </div>)
}

export default Hook;