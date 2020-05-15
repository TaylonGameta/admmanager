import React, {useEffect, useState} from 'react'
import './style.css'

import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Navbar2 from '../../components/navbar2'

import {ativos} from '../../components/routes'
import axios from 'axios'

import BpList from '../../components/bplist'


export default function Home(){

    const [gor, setGor] = useState(0)
    const [cs, setCs] = useState(0)
    const [st, setSt] = useState(0)
    const [d, setD] = useState(0)
    const [cmv, setCmv] = useState(0)

    const [nor, setNor] = useState(0)
    const [gp, setGp] = useState(0)
    const [op, setOp] = useState(0)
    const [nibit, setNibit] = useState(0)
    const [niait, setNiait] = useState(0)

    const [se, setSe] = useState(0)
    const [ac, setAc] = useState(0)

    const [fi, setFi] = useState(0)
    const [noi, setNoi] = useState(0)
    const [noe, setNoe] = useState(0)
    const [fe, setFe] = useState(0)
    const [it, setIt] = useState(0)
    
    useEffect(()=>{
        setNor(gor - cs - st - d)
        setGp(nor - cmv)
        setOp(gp - se - ac)
        setNibit(Number(op) + Number(fi) + Number(noi) - Number(noe) - Number(fe))
        setNiait(nibit - it)

        async function fetchData(){
            axios({
                method: "post",
                
            })
        }
        fetchData()
    })

    return (
        <>
        <div className="container">

            <div className="white"></div>
            <Header username="TaylonSopeletto"></Header>
            <Navbar></Navbar>
            <Navbar2 items={ativos} ></Navbar2>
            
            <div className="navbar3">
                
            </div>
            <main className="main">
                <div className="window">
                    <h3>DRE</h3>
                    <div className="input-title">
                        <label>(=)Gross operating revenue</label>
                        <input value={gor} onChange={e=>setGor(e.target.value)} type="number"></input>
                    </div>
                    <div className="input-item">
                        <label>(-)Canceled sales</label>
                        <input value={cs} onChange={e=>setCs(e.target.value)} type="number"></input>
                    </div>
                    <div className="input-item">
                        <label>(-)Sales tax</label>
                        <input value={st} onChange={e=>setSt(e.target.value)} type="number"></input>
                    </div>
                    <div className="input-item">
                        <label>(-)Discounts</label>
                        <input value={d} onChange={e=>setD(e.target.value)} type="number"></input>
                    </div>
                    <div className="input-title">
                        <label>(=)Net operating revenue</label>
                        <input value={nor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}></input>
                    </div>
                    <div className="input-item">
                        <label>(-)cost of goods sold(CMV)</label>
                        <input value={cmv} onChange={e=>setCmv(e.target.value)} type="number"></input>
                    </div>
                    <div className="input-title">
                        <label>(=)Gross profit</label>
                        <input value={gp.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}></input>
                    </div>
                    <div className="input-item">
                        <label>(-)Selling expenses</label>
                        <input value={se} onChange={e=>setSe(e.target.value)} type="number"></input>
                    </div>
                    <div className="input-item">
                        <label>(-)Administrative costs</label>
                        <input value={ac} onChange={e=>setAc(e.target.value)} type="number"></input>
                    </div>
                    <div className="input-title">
                        <label>(=)Operating profit</label>
                        <input value={op.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}></input>
                    </div>
                    <div className="input-item">
                        <label>(+)Financial income</label>
                        <input value={fi} onChange={e=>setFi(e.target.value)} type="number"></input>
                    </div>
                    <div className="input-item">
                        <label>(+)Non-operating income</label>
                        <input value={noi} onChange={e=>setNoi(e.target.value)} type="number"></input>
                    </div>
                    <div className="input-item">
                        <label>(-)Non-operating expenses</label>
                        <input value={noe} onChange={e=>setNoe(e.target.value)} type="number"></input>
                    </div>
                    <div className="input-item">
                        <label>(-)Financial expenses</label>
                        <input value={fe} onChange={e=>setFe(e.target.value)} type="number"></input>
                    </div>
                    <div className="input-title">
                        <label>(=)Net income before income tax</label>
                        <input value={nibit.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}></input>
                    </div>
                    <div className="input-item">
                        <label>(-)income tax</label>
                        <input value={it} onChange={e=>setIt(e.target.value)} type="number"></input>
                    </div>
                    <div className="input-title">
                        <label>(=)Net income after income tax</label>
                        <input value={niait.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}></input>
                    </div>
                    <button className="submit">Submit</button>
                </div>
            </main>
            
        </div>
        </>
    )
}