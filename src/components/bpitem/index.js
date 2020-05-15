import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

import './style.css'

export default function Bplist() {
    const {id} = useParams()
    const [garbage, item] = id.split(":")

    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const [name, setName] = useState("")
    const [valor, setValor] = useState("")
    const [date, setDate] = useState("")
    const [type, setType] = useState("")

    function convertType(type){
        if(type === 0) return "assets"
        if(type === 1) return "liabilities"
        if(type === 2) return "non-current assets"
        if(type === 3) return "non-current liabilities"
        if(type === 4) return "net worth" 
        return "error"
    }


    function convertDate(value){
        const [data] = value.split('T')
        const [year, mouth, day] = data.split('-')
        return `${day}/${mouth}`
    }

    function deleteItem(){
        axios({
            method:"post",
            url: "http://localhost:4000/bp/delete",
            headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
            data : {cod : item}
        })
        .then(response=>{
            window.location.href = "/"
        })
        .catch(error=>setError(error))
    }


    useEffect(()=>{
        async function fetchData(){
            await axios({
                method:"post",
                url: "http://localhost:4000/bp/item",
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
                data : {cod : item}
            })
            .then(response=>{
                setName(response.data.result[0].b_name)
                setValor(response.data.result[0].b_value)
                setDate(response.data.result[0].b_date)
                setType(response.data.result[0].b_type)
                
            })
            .catch(error=>setError(error))
        }
        fetchData()
        
    },[])


    if(name) return (
        <div className="window">
            <h3>Item</h3>
            <div className="item-bp">
                <p className="title">Name:</p>
                <p className="value">{name}</p>
            </div>
            <div className="item-bp">
                <p className="title">Value:</p>
                <p className="value">{valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </div>
            <div className="item-bp">
                <p className="title">Type:</p>
                <p className="value">{convertType(type)}</p>
            </div>
            <div className="item-bp">
                <p className="title">Date:</p>
                <p className="value">{convertDate(date)}</p>
            </div>
            <div className="buttons">
                <button onClick={()=>window.location.href=`/#/balancesheet/edit:${item}`}>Edit</button>
                <button onClick={()=>deleteItem()} className="delete">Delete</button>
            </div>
        </div>
    )
    else return (
        <div className="load">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}