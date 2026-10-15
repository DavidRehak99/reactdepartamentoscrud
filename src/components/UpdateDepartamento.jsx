import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import serviceDepartamentos from '../services/ServiceDepartamentos';

export default class UpdateDepartamento extends Component {

    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();
    service = new serviceDepartamentos();


    state = {

        status:false
    }



    updateDepartamento = (event) => {
        event.preventDefault();
        let departamento = {
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value 
        }
        this.service.updateDepartamento(departamento).then((result) => {
        this.setState({
            mensaje:"Departamento Actualizado",
            status:true
        })
    }).catch((error) => {
        this.setState({
            mensaje:"Error actualizando departamento",
        })
    })

    }

    

        
  render() {
    return (    
        <div>   
            {
                this.state.status == true &&
                (<Navigate to="/home" />)

            }
            
            <h1>Update Departamento</h1>
            <form>
            <label>Id Departamento:</label>
            <input type="number" ref={this.cajaNumero}  className="form-control" value={this.props.id} disabled />
            <label>Nombre:</label>
            <input type="text" ref={this.cajaNombre} className="form-control" defaultValue={this.props.nombre}  />
            <label>Localidad:</label>
            <input type="text" ref={this.cajaLocalidad} className="form-control" defaultValue={this.props.localidad}  />

            <button onClick={this.updateDepartamento} className="btn btn-primary">Update</button>

            </form>
            <h2>Id: {this.props.id}</h2>
            <h2>Nombre: {this.props.nombre}</h2>
            <h2>Localidad: {this.props.localidad}</h2>
        </div>

    )
  }
}
