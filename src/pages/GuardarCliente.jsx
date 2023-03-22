import axios from "axios";
import { useState } from "react";
import { Api } from '../Services/api';
//import '../assets/css/GuardarClientes.css';
import { Link } from "react-router-dom";
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Aside from '../components/Aside';


const GuardarClientes = () => {

    const [rtn, setRtn] = useState("");
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [guardadoExitoso, setGuardadoExitoso] = useState(false);

    const GuardarCliente = async () => {
        const body = {
            "RTN": rtn,
            "Nombre": nombre,
            "Direccion": direccion,
            "Telefono": telefono,
            "Correo": correo,
           
        }
        const response = await axios.post(Api + 'clientes/guardar', body);
        console.log(response);
        setGuardadoExitoso(true);
        setRtn("");
        setNombre("");
        setDireccion("");
        setTelefono("");
        setCorreo("");
        
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === "rtn") {
            setRtn(value);
        } else if (name === "nombre") {
            setNombre(value);
        } else if (name === "direccion") {
            setDireccion(value);
        } else if (name === "telefono") {
            setTelefono(value);
        } else if (name === "correo") {
            setCorreo(value);
        } 
    }

    const handleGuardadoExitoso = () => {
        setGuardadoExitoso(false);
    }

        return (
            <>
            <Header></Header>
           
            <section  className="content">
            <Aside></Aside>
          <div className="row">
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Agregar Cliente</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                      <i className="fas fa-minus" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="inputName">RTN cliente</label>
                    <input type="text" id="inputName" className="form-control"  name="rtn" value={rtn} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputDescription">Nombre</label>
                    <input type="text" name="nombre" id="inputDescription" className="form-control"  value={nombre} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputStatus">Direccion</label>
                    <textarea type="text" id="inputDire" className="form-control"  name="direccion" value={direccion}  onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputStatus">Telefono</label>
                    <input type="text" id="inputTele" className="form-control"  name="telefono" value={telefono} onChange={handleInputChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputStatus">Correo</label>
                    <input type="text" id="inputCorreo" className="form-control"  name="correo" value={correo} onChange={handleInputChange} />
                  </div>
                
                
                </div>
        
                <br />
                        <button type="button" className="btn btn-block btn-primary btn-lg" onClick={GuardarCliente}>GUARDAR CLIENTE</button>
                        <br />    
                        <Link to="/listarclientes">
                            <button type="button" className="btn btn-block btn-primary btn-lg">LISTAR CLIENTES</button>
                        </Link>
        
                        {guardadoExitoso && <p className="success-message">Guardado exitosamente!</p>}
                    {guardadoExitoso && setTimeout(handleGuardadoExitoso, 3000)}
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            
          </div>
         
        </section>
        <Footer></Footer>
        </>
        
          );
}

        
    

export default GuardarClientes;






