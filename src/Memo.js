import react from "react"
import { useState } from "react"

export default function App(){

    const [num, setNum] = useState(0)
    const [theme, setTheme] = useState(false)
    const doubleNumber = slowFunction(num)

    const newTheme = {
        backgroundColor : theme ? 'black' : 'white',
        color : theme ? 'snow' : 'black',
    }

    return (
        <>
        <input type="number" value={num} onChange={ e => {setNum(parseInt(e.target.value))}}/>
        <button onClick={() => setTheme(preTheme=> !preTheme)}>Change Theme</button>
        <div style={newTheme}>{doubleNumber}</div>
        </>
    )
}

function slowFunction(num){
console.log("Calling slow function");
for(let i=0; i<10000000000; i++){
}
return num * 2;
}