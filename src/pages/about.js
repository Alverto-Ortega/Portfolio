import React from "react"
import  {navigate} from "gatsby"

function SomePage(){
    const triggerNavigation = () => {
        navigate('/')
    }
    return(
        <div>
            <p>Triggering page navigation via onClick.</p>
            <button onClick={ () => triggerNavigation() }>Home Page</button>
        </div>
    )
}

export default function About(){
    return (
        <div>
            <h1>My About Page</h1>
            <p>This is a senetence about me</p>
            <SomePage></SomePage>
        </div>
    )
}