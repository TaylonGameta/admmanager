import React from 'react'
import './style.css'

import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Navbar2 from '../../components/navbar2'

import {ativos} from '../../components/routes'

import BpList from '../../components/bplist'


export default function home(){
    return (
        <>
        <div className="container">

            <div className="white"></div>
            <Header username="TaylonSopeletto"></Header>
            <Navbar></Navbar>
            <Navbar2 items={ativos} ></Navbar2>
            
            <div className="navbar3">
                <a href="/">General</a>
                <a href="/#/balancesheet/ca">Current assets</a>
                <a href="/#/balancesheet/nca" className="underline">Non-current assets</a>
                <a href="/#/balancesheet/cl">Current liabilities</a>
                <a href="/#/balancesheet/ncl">Non-current liabilities</a>
                <a href="/#/balancesheet/nw">Net worth</a>
            </div>
            <main className="main">
                <BpList type="nca"></BpList>
            </main>
            
        </div>
        </>
    )
}