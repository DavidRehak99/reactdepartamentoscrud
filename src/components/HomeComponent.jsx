import React, { Component } from 'react'
import loading2 from './../assets/images/load_two.gif'
import ServiceDepartamentos from '../services/ServiceDepartamentos';
import { NavLink } from 'react-router-dom';

export default class HomeComponent extends Component {
    service = new ServiceDepartamentos();

    loadDepartamentos = () => {
        this.service.getDepartamentos().then((result) => {


            this.setState({
                departamentos: result,
                status: true
            })
        })


    }

    deletedepartamento = (iddepartamento) => {
        if (window.confirm("De verdad quieres borrar este departamento?")) {
            this.service.deleteDepartamento(iddepartamento).then((result) => {
                this.loadDepartamentos();
            })
        }
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

    state = {
        departamentos: [],
        status: false

    }
    render() {

        if (this.state.status == true) {

            return (
                <div style={{ margin: "auto", width: "50%" }}>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Localidad</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.departamentos.map((dept, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{dept.numero}</td>
                                        <td>{dept.localidad}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => this.deletedepartamento(dept.numero)}>Delete</button>
                                        </td>
                                        <td>
                                            <NavLink className="btn btn-info" to={"/update/" + dept.numero + "/" + dept.nombre + "/" + dept.localidad}>Edit</NavLink>
                                        </td>
                                        
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>


                </div>
            )

        } else {

            return (<img src={loading2} alt="loading..." width="300px" />)
        }

    }
}
