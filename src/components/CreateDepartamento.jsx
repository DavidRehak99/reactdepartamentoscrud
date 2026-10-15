import React, { Component } from 'react'
import ServiceDepartamentos from '../services/ServiceDepartamentos';

export default class CreateDepartamento extends Component {


    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();
    service = new ServiceDepartamentos();


    state = {
        mensaje: "",
        status: false
    }

    insertDepartamento = (event) => {
        event.preventDefault();
        let departamento = {
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }


        this.service.insertDepartamento(departamento).then((result) => {
            this.setState({
                mensaje: "Departamento Insertado",
                status: true
            })
        }).catch((error) => {
            this.setState({
                mensaje: "Error insertando departamento",

            })
        })
    };





    render() {
        return (
            <div>
                <h2>Create Departamento</h2>
                {

                    this.state.mensaje &&
                    (<p style={{ color: "red", fontWeight: "bold" }}>
                        {this.state.mensaje}</p>)
                }
                <form onSubmit={this.insertDepartamento}>
                    <div className="form-group">
                        <label>Id:</label>
                        <input type="number" className="form-control" ref={this.cajaNumero} />
                    </div>
                    <div className="form-group">
                        <label>Nombre:</label>
                        <input type="text" className="form-control" ref={this.cajaNombre} />
                    </div>
                    <div className="form-group">
                        <label>Localidad:</label>
                        <input type="text" className="form-control" ref={this.cajaLocalidad} />
                    </div>

                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        );
    }
}
