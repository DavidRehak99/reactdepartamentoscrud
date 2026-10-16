import React, { Component } from 'react'
import serviceDepartamentos from '../services/ServiceDepartamentos';
import ServiceHospitales from '../services/ServiceHospitales';

export default class TrabajadoresComponent extends Component {
    service = new ServiceHospitales();
    state = {
        trabajadores: []
    }

    loadTrabajadores = async() => {
        let idhospitales = this.props.idHospitales;
        let data= "";
        //idhospital=17&idhospital=22
        for(let id of idhospitales) {
            data += "idhospital=" + id + "&";
        }
        data = data.substring(0, data.length - 1);
        let datos = await this.service.getTrabajadores(data);
        console.log(data);


        this.setState({
            trabajadores: datos
        })
    }
    
    componentDidMount = async () => {
        
            await this.loadTrabajadores();
       
    }
    componentDidUpdate = async(oldprops) => {
        if (oldprops.idHospitales != this.props.idHospitales) {
            await this.loadTrabajadores();
        }
    }
     

    render() {
        return (
            <div>
                <h1>Trabajadores</h1>
                <table className="table table-striped table-bordered mt-4">
                    <thead className="table-dark">
                        <tr>
                            
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                            <th>hospital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.trabajadores.map((trabajador, index) => (
                            <tr key={index}>
                               
                                <td>{trabajador.apellido}</td>
                                <td>{trabajador.oficio}</td>
                                <td>{trabajador.salario}</td>
                                <td>{trabajador.idHospital}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}