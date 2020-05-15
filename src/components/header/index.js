import React from "react"

import { FaUser } from 'react-icons/fa'
import { IconContext } from "react-icons"

export default function Header(props){
    return(
        <div className="brandHeader">
            <IconContext.Provider value={{ size: "1.5em" }}>
                <a className="headerBrand" href="/"> <span className="brandSpan" >ADM</span>manager</a>
                <a className="profile" href="/">{props.username}<span><FaUser></FaUser></span></a>
            </IconContext.Provider>
        </div>
    )
}

    