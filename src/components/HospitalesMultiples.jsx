import React, { Component } from 'react'
import serviceHospitales from '../services/ServiceHospitales';
import TrabajadoresComponent from './TrabajadoresComponent';

export default class HospitalesMultiples extends Component {
    service = new serviceHospitales();
    selectHospital = React.createRef();


    state = {
        hospitales: [],
        hospitalesSeleccionados: []

    }

    loadHospitales = async() => {

        let datos= await this.service.getHospitales()
        this.setState({
            hospitales: datos
        })

    }

    loadTrabajadores = async(idHospital) => {
        let datos= await this.service.getTrabajadores(idHospital)
        console.log(datos);
        this.setState({
            trabajadores: datos
        })
    }


    componentDidMount = async () => {
        await this.loadHospitales();
        
    }
   
    

    getHospitalesSeleccionados = (event) => {
    // Evita que el formulario haga submit y recargue la página
    event.preventDefault();
    let aux = [];
    let options = this.selectHospital.current.options;
  
    for(let option of options) {
        if(option.selected) {
            aux.push(option.value);
             
        }
        
        
    this.setState({
        hospitalesSeleccionados: aux
    });
    }

}


    render() {
        return (
            <div>   
            <form>
                <label>Seleccione un hospital:</label>
                <select ref={this.selectHospital} className="form-control" size="6" multiple>
                    {
                    this.state.hospitales.map((hospital,index) => {
                        return (<option key={index} value={hospital.idHospital}>
                            {hospital.nombre}
                        </option>)
                    }
                        
                    )
                    }
                </select>
                <button onClick={this.getHospitalesSeleccionados} className="btn btn-info">Mostrar Trabajadores</button>
            </form>
            {this.state.hospitalesSeleccionados.length != 0 && (
                <TrabajadoresComponent idHospitales={this.state.hospitalesSeleccionados} />
            
            
        )
    }
                
            
            </div>
        )
    }
}
