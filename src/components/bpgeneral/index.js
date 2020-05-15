import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "./style.css"


export default function Bpgeneral(){

    const [ativos, setAtivos] = useState()
    const [passivos, setPassivos] = useState()
    const [passivosC, setPassivosC] = useState()
    const [ativosC, setAtivosC] = useState()
    const [patrimonio, setPatrimonio] = useState()

    const [totalA, setTotalA] = useState(0)
    const [totalP, setTotalP] = useState(0)
    const [totalANC, setTotalANC] = useState(0)
    const [totalPNC, setTotalPNC] = useState(0)
    const [totalPL, setTotalPL] = useState(0)

    useEffect(()=>{
        async function fetchData(){
            await axios({
                method: "post",
                url: "http://localhost:4000/bp/listbytype",
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
                data:{type : 0}
            })
            .then(result=>{
                setAtivos(result.data)
                setTotalA(result.data.totalValue)
            })

            await axios({
                method: "post",
                url: "http://localhost:4000/bp/listbytype",
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
                data:{type : 1}
            })
            .then(result=>{
                setPassivos(result.data)
                setTotalP(result.data.totalValue)
            })

            await axios({
                method: "post",
                url: "http://localhost:4000/bp/listbytype",
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
                data:{type : 3}
            })
            .then(result=>{
                setPassivosC(result.data)
                setTotalPNC(result.data.totalValue)
            })

            await axios({
                method: "post",
                url: "http://localhost:4000/bp/listbytype",
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
                data:{type : 2}
            })
            .then(result=>{
                setAtivosC(result.data)
                setTotalANC(result.data.totalValue)
            })

            await axios({
                method: "post",
                url: "http://localhost:4000/bp/listbytype",
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
                data:{type : 4}
            })
            .then(result=>{
                setPatrimonio(result.data)
                setTotalPL(result.data.totalValue)
            })
        }
        fetchData()
    },[])

    var listItems

    if(ativos){
        listItems = ativos.result.map(data=>{
            return(
                <div className="item">
                    <p className="title">{`#${data.b_name}`}</p>
                    <p className="value">{data.b_value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                </div>
            )
        })
    }
    var listItemsPassivos
    if(passivos){
        listItemsPassivos = passivos.result.map(data=>{
            return(
                <div className="item">
                    <p className="title">{`#${data.b_name}`}</p>
                    <p className="value">{data.b_value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                </div>
            )
        })
    }
    var listItemsPassivosC
    if(passivosC){
        listItemsPassivosC = passivosC.result.map(data=>{
            return(
                <div className="item">
                    <p className="title">{`#${data.b_name}`}</p>
                    <p className="value">{data.b_value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                </div>
            )
        })
    }
    var listAtivosC
    if(ativosC){
        listAtivosC = ativosC.result.map(data=>{
            return(
                <div className="item">
                    <p className="title">{`#${data.b_name}`}</p>
                    <p className="value">{data.b_value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                </div>
            )
        })
    }

    var patrimonioL
    if(patrimonio){
        patrimonioL = patrimonio.result.map(data=>{
            return(
                <div className="item">
                    <p className="title">{`#${data.b_name}`}</p>
                    <p className="value">{data.b_value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                </div>
            )
        })
    }

    if(ativos && passivos && ativosC && passivosC && patrimonioL) return (
        <>
        <div className="head">
            <p>Balance Sheet</p>
        </div>
        <div className="windows">
            <div className="pad">
                <h3>Current assets</h3>
                {listItems}
                <p className="total">{`Total: ${totalA.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`}</p>
            </div>
            <div className="pad">
                <h3>Current liabilities</h3>
                    {listItemsPassivos}
                    <p className="total">{`Total: ${totalP.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`}</p>
            </div>
            <div className="pad">
                <h3>Non-current liabilities</h3>
               {listItemsPassivosC}
               <p className="total">{`Total: ${totalPNC.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`}</p>
            </div>
            <div className="pad">
                <h3>Non-current assets</h3>
                {listAtivosC}
                <p className="total">{`Total: ${totalANC.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`}</p>
            </div>
            <div className="pad">
                <h3>Net Worth</h3>
                {patrimonioL}
                <p className="total">{`Total: ${totalPL.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`}</p>
            </div>
        </div>
        <div className="head">
            <p>{`Total Assets: ${(totalA + totalANC).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`}</p>
        </div>
        <div className="head">
            <p>{`Total Liabilities: ${(totalP + totalPNC).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`}</p>
        </div>
        <div className="head">
            <p>{`Total Net Worth: ${(totalP + totalPNC + totalPL).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`}</p>
        </div>
        </>
    )
    else return (
        <div className="load">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}