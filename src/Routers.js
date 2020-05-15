import React, {useEffect, useState} from 'react'
import {Switch, Route, Redirect} from 'react-router'

import {loggin} from './actions'

import Login from './templates/login'
import Home from './templates/home'
import PublicPage from './templates/publicpage'
import BpGeral from './templates/bpGeral'
import Bpadd from './templates/bpGeral/add'
import Bpitem from './templates/bpGeral/item'
import Bpca from './templates/bpGeral/ca'
import Bpnca from './templates/bpGeral/nca'
import Bpcl from './templates/bpGeral/cl'
import Bpncl from './templates/bpGeral/ncl'
import Bpedit from './templates/bpGeral/edit'
import Bpnw from './templates/bpGeral/nw'

import Dre from './templates/dre'



import {useSelector, useDispatch} from 'react-redux'

export default function Routers(){
    const [token, setToken] = useState("")

    const isLogged = useSelector(state=>state.IsLogged)
    const dispatch = useDispatch()

    useEffect(()=>{
        const getToken = async() =>{
            const token = await localStorage.getItem("token")
            setToken(token)
        }
        
        getToken()

        if(token) dispatch(loggin())

     })

    return(
        <Switch>
            <Route exact path="/">
                {isLogged ? <Redirect to="/balancesheet"></Redirect> : <Redirect to="/login"></Redirect>}
            </Route>
            <Route path="/login" component={Login}>
                {isLogged ? <Redirect to="/"></Redirect> : ""}
            </Route>
            <Route path="/dashboard" component={Home}>
                {isLogged ? "" : <Redirect to="/login"></Redirect>}
            </Route>
            <Route path="/getstarted" component={PublicPage}>
            </Route>
            <Route exact path="/balancesheet" component={BpGeral}>
                {isLogged ? "" : <Redirect to="/login"></Redirect>}
            </Route>
            <Route exact path="/balancesheet/add" component={Bpadd}>
                {isLogged ? "" : <Redirect to="/login"></Redirect>}
            </Route>
            <Route exact path="/balancesheet/ca" component={Bpca}>
                {isLogged ? "" : <Redirect to="/login"></Redirect>}
            </Route>
            <Route exact path="/balancesheet/nca" component={Bpnca}>
                {isLogged ? "" : <Redirect to="/login"></Redirect>}
            </Route>
            <Route exact path="/balancesheet/cl" component={Bpcl}>
                {isLogged ? "" : <Redirect to="/login"></Redirect>}
            </Route>
            <Route exact path="/balancesheet/ncl" component={Bpncl}>
                {isLogged ? "" : <Redirect to="/login"></Redirect>}
            </Route>
            <Route exact path="/balancesheet/nw" component={Bpnw}>
                {isLogged ? "" : <Redirect to="/login"></Redirect>}
            </Route>
            <Route exact path="/balancesheet/item:id" component={Bpitem}>
                {isLogged ? "" : <Redirect to="/login"></Redirect>}
            </Route>
            <Route exact path="/balancesheet/edit:id" component={Bpedit}>
                {isLogged ? "" : <Redirect to="/login"></Redirect>}
            </Route>

            <Route exact path="/dre" component={Dre}>
                {isLogged ? "" : <Redirect to="/login"></Redirect>}
            </Route>
        </Switch>
    )
}