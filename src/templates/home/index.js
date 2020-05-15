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
                <a href="/#/balancesheet">Geral</a>
                <a href="/">Ativos</a>
                <a href="/">Ativos Circulantes</a>
                <a href="/">Passivos</a>
                <a href="/">Passivos Circulantes</a>
            </div>
            <main className="main">
                <BpList></BpList>
            </main>
            
        </div>
        </>
    )
}