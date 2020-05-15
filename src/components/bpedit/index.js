import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import axios from 'axios'
import "./style.css"


export default function Bplist() {
    //VALUES FROM REQUEST
    const {id} = useParams()
    const [garbage, item] = id.split(":")
    
    //VALUES TO CHANGE
    const [error, setError] = useState(null)

    const [currentType, setCT] = useState(null)
    const [previous, setPrevious] = useState(null)

    const [ativo, setAtivo] = useState(false)
    const [passivo, setPassivo] = useState(false)
    const [ativoc, setAtivoc] = useState(false)
    const [passivoc, setPassivoc] = useState(false)
    const [netWorth, setNetWorth] = useState(false)

    const [nome, setNome] = useState("")
    const [valor, setValor] = useState("")

    const data = {
        value : valor,
        name : nome,
        type: currentType,
        cod: item
    }
    function convertType(type){
        if(type === 0) return "current assets"
        if(type === 1) return "current liabilities"
        if(type === 2) return "non-current assets"
        if(type === 3) return "non-current liabilities"
        return "error"
    }

    useEffect(()=>{
        async function fetchData(){
            await axios({
                url:"http://localhost:4000/bp/item",
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
                method: "post",
                data:{cod : item}
            })
            .then(values=>{
                setNome(values.data.result[0].b_name)
                setValor(values.data.result[0].b_value)
                setCT(values.data.result[0].b_type)
                setPrevious(values.data.result[0].b_type)
            })
        }
        fetchData()
        if(currentType !== null){
            console.log(currentType)
        }
        
    },[])

    
    function sendRequest(){
        if(!nome || !valor){
            setError("Insufficient inputs")
            return
        }

        axios.post("http://localhost:4000/bp/update", data, {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}})
        .then(result=>{
            setError("item updated successfully")
        })
    }

    return(

        <div className="window">
            <h3>Edit</h3>
            <p className="label">Type:</p>
            <p className="text">{`previous: ${convertType(previous)}`}</p>
            <div className="radio">
                
                <p onClick={()=>{
                    setAtivo(!ativo)
                    setPassivo(false)
                    setPassivoc(false)
                    setAtivoc(false)
                    setNetWorth(false)
                    setCT(0)
                }} className="radio-item"><span>{ativo ? '(X)' : '(0)'}</span>Current assets</p>

                
                <p onClick={()=>{
                    setAtivo(false)
                    setPassivo(!passivo)
                    setPassivoc(false)
                    setAtivoc(false)
                    setNetWorth(false)
                    setCT(1)
                }} className="radio-item"><span>{passivo ? '(X)' : '(0)'}</span>Current liabilities</p>

                
                <p onClick={()=>{
                    setAtivo(false)
                    setPassivo(false)
                    setPassivoc(!passivoc)
                    setAtivoc(false)
                    setNetWorth(false)
                    setCT(2)
                }} className="radio-item"><span>{passivoc ? '(X)' : '(0)'}</span>Non-current assets</p>

                <p onClick={()=>{
                    setAtivo(false)
                    setPassivo(false)
                    setPassivoc(false)
                    setAtivoc(!ativoc)
                    setNetWorth(false)
                    setCT(3)
                }} className="radio-item"><span>{ativoc ? '(X)' : '(0)'}</span>Non-current liabilities</p>
                <p onClick={()=>{
                    setAtivo(false)
                    setPassivo(false)
                    setPassivoc(false)
                    setAtivoc(false)
                    setNetWorth(!netWorth)
                    setCT(4)
                }} className="radio-item"><span>{netWorth ? '(X)' : '(0)'}</span>Net Worth</p>
            </div>
            <input className="add-input" placeholder="name" onChange={e=>{
                setNome(e.target.value)
                setError("")
            }} value={nome}></input>

            <input type={'number'} className="add-input" onChange={e=>{
                setValor(e.target.value)
                setError("")
            }} placeholder="value" value={valor}></input>
            <button className="add-button" onClick={()=>sendRequest()}>Submit</button>
            <p className="error">{error}</p>
            
        </div>
    )
}