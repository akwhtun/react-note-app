import react from "react"
import { useState, useEffect } from "react";


function Effect(){

    const [width, setWidth] = useState(window.innerWidth);
    const handleWidth = ()=> {
        setWidth(window.innerWidth)
    }
    useEffect(()=> {
        window.addEventListener("resize", handleWidth);
        console.log("ha")
    })
        return (
            <div>
                <h1>{width}</h1>
            </div>
        )
}

export default Effect