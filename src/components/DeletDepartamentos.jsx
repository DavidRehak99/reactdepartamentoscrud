import axios from "axios";
import Global from "../Global";
import serviceDepartamentos from "../services/ServiceDepartamentos";
import updateDepartamento from "./UpdateDepartamento";
import { Navigate } from 'react-router-dom';
import React, { Component } from 'react'


export default class DeletDepartamentos extends Component {
    state = {

        status:false
    }
    service = new serviceDepartamentos();

    deletedepartamento = (iddepartamento) => {
        this.service.deleteDepartamento(iddepartamento).then((result) => {
           
            this.setState({ status: true });
        })
    }

    render() {
        return (
            <div>

                {
                this.state.status == false &&
                (<Navigate to="/home" />)

            }
                <h1>Delete Departamento</h1>
                <button className="btn btn-danger" onClick={() => this.deletedepartamento(this.props.id)}>Delete</button>
            </div>
        )
    }
}