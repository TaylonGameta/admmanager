import React from 'react'
import "./publicpage.css"

import {HomeSvg} from '../../assets/svg'

export default PublicPage=>{
    return(
        <>
        <header className="header">
            <a className="brand" href="/"><span className="brandSpan">ADM</span>manager</a>
            <a className="item" href="/">About</a>
            <a className="item" href="/">GitHub</a>
            <a className="item" href="/">Login</a>
        </header>
        <div className="firstContainer">
            <div className="ilustration">
                <HomeSvg></HomeSvg>
            </div>
            <div className="title">
                <h1>Manage your <span className="brandSpan">financial</span> stuff</h1>
                <p>Financial operations never was too easy! With this tools you can manager, compare, analyze and more. 
                    Get stated right now and see what this powerful technology can do for you and your company.</p>
                <button className="btn fill">Download</button>
                <button onClick={()=>window.location = "/#/login"} className="btn outline">Get Started</button>
            </div>
        </div>
        <div className="secundContainer">
            
        </div>
        
        </>
    )
}