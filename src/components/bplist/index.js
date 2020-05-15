import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "./styles.css"

export default function Bplist(props) {

    const [data, setData] = useState({})
    const [error, setError] = useState(null)

    function convertType(type){
        if(type === 0) return "current assets"
        if(type === 1) return "current liabilities"
        if(type === 2) return "non-current assets"
        if(type === 3) return "non-current liabilities"
        if(type === 4) return "net worth" 
        return "error"
    }

    useEffect(()=>{

        async function fetchData(){
            if(props.type === "all"){
                await axios({
                    method:"get",
                    url: "http://localhost:4000/bp/listall",
                    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
                })
                .then(response=>{
                    setData(response.data)
                    console.log(response.data)
                })
                .catch(error=>setError(error))
            }
            if(props.type === "ca"){
                await axios({
                    method:"post",
                    url: "http://localhost:4000/bp/listbytype",
                    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
                    data:{
                        type: 0
                    }
                })
                .then(response=>{
                    setData(response.data)
                    console.log(response.data)
                })
                .catch(error=>setError(error))
            }
            if(props.type === "nca"){
                await axios({
                    method:"post",
                    url: "http://localhost:4000/bp/listbytype",
                    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
                    data:{
                        type: 2
                    }
                })
                .then(response=>{
                    setData(response.data)
                    console.log(response.data)
                })
                .catch(error=>setError(error))
            }
            if(props.type === "cl"){
                await axios({
                    method:"post",
                    url: "http://localhost:4000/bp/listbytype",
                    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
                    data:{
                        type: 1
                    }
                })
                .then(response=>{
                    setData(response.data)
                    console.log(response.data)
                })
                .catch(error=>setError(error))
            }
            if(props.type === "ncl"){
                await axios({
                    method:"post",
                    url: "http://localhost:4000/bp/listbytype",
                    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
                    data:{
                        type: 3
                    }
                })
                .then(response=>{
                    setData(response.data)
                    console.log(response.data)
                })
                .catch(error=>setError(error))
            }
            if(props.type === "nw"){
                await axios({
                    method:"post",
                    url: "http://localhost:4000/bp/listbytype",
                    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
                    data:{
                        type: 4
                    }
                })
                .then(response=>{
                    setData(response.data)
                    console.log(response.data)
                })
                .catch(error=>setError(error))
            }
        }

        fetchData()
        
    },[])

    const items = data.result
    var listItems

    if(items){
        
        listItems = items.map((data, index)=>{
            return(
                <React.Fragment key={index}>
                    <div key={index} className="nav-item">
                        <a className="name" href={`/#/balancesheet/item:${data.id}`}>#{data.b_name}</a>
                        <a className="data" href="/">{convertType(data.b_type)}</a>
                        <a className="value" href="/">{data.b_value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</a>
                    </div>
                </React.Fragment>
            )
        })
    }

     

    if(data.result) return(
        <React.Fragment>
            <div className="nav">
                <a className="name" href="/">Name</a>
                <a className="data" href="/">Type</a>
                <a className="valor" href="/">Value</a>
            </div>
            {listItems}
            <div className="nav-item">
                <a className="name" href="/">Total</a>
                <a className="data" href="/"></a>
                <a className="value" href="/">{data.totalValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</a>
            </div>
        </React.Fragment>
    )
    else return(
        <div className="load">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}