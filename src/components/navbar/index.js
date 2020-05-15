import React from 'react'

import { FaAlignLeft, FaBalanceScale, FaMoneyBill, FaBars} from 'react-icons/fa'
import { IconContext } from "react-icons"

export default function Navbar(props){

    return(
        <div className="navbar">
            <IconContext.Provider value={{ size: "2em" , color: "white"}}>
                <div><a href="/#/balancesheet"><FaBalanceScale ></FaBalanceScale></a></div>
                <div><a href="/#/dre"><FaAlignLeft ></FaAlignLeft></a></div>
                <div><a href="/"><FaMoneyBill ></FaMoneyBill></a></div>
                <div><a href="/"><FaBars ></FaBars></a></div>
            </IconContext.Provider>
        </div>
    )
}