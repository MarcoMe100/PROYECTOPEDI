import axios from "axios";
import { useState } from "react";
import { Api } from '../Services/api';
import '../assets/css/GuardarPedido.css';

const GuardarPedido = () => {

    const [idmesero, setidmesero] = useState("");
    const [Estacion, setEstacion] = useState("");
    const [modalidad, setModalidad] = useState("");
    const [estado, setEstado] = useState("");
  
    const [guardadoExitoso, setGuardadoExitoso] = useState(false);

    const GuardarPedido = async () =>{
        const body={
            "idmesero": idmesero,
            "Estacion": Estacion,
            "modalidad": modalidad,
            "estado": estado,
           
        }
        const response= await axios.post(Api + 'pedido/guardar',body);
        console.log(response);
        setGuardadoExitoso(true);
        setidmesero("");
        setEstacion("");
        setModalidad("");
        setEstado("");
       
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === "idmesero") {
            setidmesero(value);
        } else if (name === "Estacion") {
            setEstacion(value);
        } else if (name === "modalidad") {
            setModalidad(value);
        } else if (name === "estado") {
            setEstado(value);
        } 
    }

    const handleGuardadoExitoso = () => {
        setGuardadoExitoso(false);
    }

    return (
        <div>
            <form>
                <label>Guardar Un pedido:</label>
                <label>
                    Id Mesero:
                    <input type="text" name="idmesero" value={idmesero} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Estacion:
                    <input type="text" name="Estacion" value={Estacion} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Modalidad:
                    <select name="modalidad" value={modalidad} onChange={handleInputChange}>
                        <option value="">Seleccione una opción</option>
                        <option value="ME">ME</option>
                        <option value="DO">DO</option>
                        <option value="LL">LL</option>
                    </select>
                </label>
                <br />
                <label>
                    Estado:
                    <br/>
                    <select name="estado" value={estado} onChange={handleInputChange}>
                        <option value="">Seleccione una opción</option>
                        <option value="AAA">AAA</option>
                        <option value="NNN">NNN</option>
                        <option value="SNN">SNN</option>
                        <option value="SSN">SSN</option>
                        <option value="NNS">NNS</option>
                        <option value="SNS">SNS</option>
                        <option value="SSS">SSS</option>
                        <option value="NSS">NSS</option>
                        <option value="NSN">NSN</option>
                    </select>
                   
                </label>
                <br/>
                
                <button type="button" onClick={GuardarPedido}>GUARDAR PEDIDO</button>
            </form>
            {guardadoExitoso && <p className="success-message">Guardado exitosamente!</p>}
            {guardadoExitoso && setTimeout(handleGuardadoExitoso, 3000)}
        </div>
    )
}

export default GuardarPedido;
