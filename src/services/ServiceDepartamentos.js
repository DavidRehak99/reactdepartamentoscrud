import axios from "axios";
import Global from "../Global";


export default class ServiceDepartamentos {

getDepartamentos() {

    return new Promise(function(resolve,reject){

        let url = Global.urlApiDepartamentos;
        let request = "api/departamentos";
        axios.get(url + request).then((response) => {
            console.log("leyendo departamentos");
            resolve(response.data);
        })
        .catch((error) => {
            console.log(error);
            reject([error]);
        });
    })
}

insertDepartamento(departamento) {
    return new Promise(function(resolve,reject){
    let url = Global.urlApiDepartamentos;
    let request = "api/departamentos";
    axios.post(url + request, departamento).then((response) => {
        console.log("insertando departamento");
        resolve(response.data);
    })
    .catch((error) => {
        console.log("Error insertando" + error);
        reject([error]);
    });

})
}



updateDepartamento(departamento) {
    return new Promise(function(resolve,reject){
        let url = Global.urlApiDepartamentos;
        let request = "api/departamentos";
        axios.put(url + request, departamento).then((response) => {
            console.log("Update departamento");
            resolve(response.data);
        })
        .catch((error) => {
            console.log("Error actualizando" + error);
            reject([error]);
        });

    })

}

deleteDepartamento(iddepartamento) {
    return new Promise(function(resolve,reject){
        let url = Global.urlApiDepartamentos;
        let request = "api/departamentos/" + iddepartamento;
        axios.delete(url + request).then((response) => {
            console.log("Delete departamento");
            resolve(response.data);
        })
        .catch((error) => {
            console.log("Error eliminando" + error);
            reject([error]);
        });

    })
}

}