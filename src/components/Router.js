import React, { Component } from 'react'
import { BrowserRouter, useParams } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import CreateDepartamento from './CreateDepartamento'
import UpdateDepartamento from './UpdateDepartamento'

function UpdateDepartamentoElement() {
      let { id, nombre, localidad } = useParams();
      return <UpdateDepartamento id={id} nombre={nombre} localidad={localidad} />
    }

export default class Router extends Component {
  render() {
    

    return (

<BrowserRouter>
    <MenuComponent/>
    <Routes>
      <Route path="/home" element={<HomeComponent/>}/>
      <Route path="/create" element={<CreateDepartamento/>}/>
      <Route path="/update/:id/:nombre/:localidad" element={<UpdateDepartamentoElement/>}/>
      
    </Routes>
    </BrowserRouter>

    )

      
  }
}
