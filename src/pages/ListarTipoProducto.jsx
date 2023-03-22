import axios from "axios";
import { useEffect, useState } from "react";
import { Api } from '../Services/api';
import '../assets/css/ListarTipoProducto.css';

const ListarTipoProducto = () => {
   
    const [TipoProductoListar, setTipoProductolistar] = useState([]);
    const [filtroNombre, setFiltroNombre] = useState("");

    useEffect(() =>{
       axios.get(Api + 'tipoproductos/listar')
       .then(response => setTipoProductolistar(response.data.data))
       .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        if (filtroNombre === "") {
            axios.get(Api + 'tipoproductos/listar')
                .then(response => setTipoProductolistar(response.data.data))
                .catch(error => console.log(error));
        }
    }, [filtroNombre]);

    const buscarTipoProducto = () => {
      axios
        .get(Api + "tipoproductos/listar")
        .then((response) => {
          const clientesFiltrados = response.data.data.filter((tipoproductos) =>
            tipoproductos.NombreTipo.toLowerCase().includes(filtroNombre.toLowerCase())
          );
          setTipoProductolistar(clientesFiltrados);
        })
        .catch((error) => console.log(error));
    };

     return (
       <div className="TipoProductoListar">
         <h2>Lista de Tipo Producto:</h2>
         <div>
           <input
             type="text"
             value={filtroNombre}
             onChange={(e) => setFiltroNombre(e.target.value)}
             placeholder="Buscar por nombre"
           />
           <button onClick={buscarTipoProducto}>Buscar</button>
         </div>
         {TipoProductoListar.map(tipoproductoli =>(
             <div key={tipoproductoli.CodigoTipo} className="tipoproductoli">
               <h4>Codigo Tipo: {tipoproductoli.CodigoTipo}</h4>
               <h4> Nombre Tipo: {tipoproductoli.NombreTipo}</h4>
               <h4>Descripcion Tipo: {tipoproductoli.DescripcionTipo}</h4>
               <h4>Id Tipo Principal: {tipoproductoli.idtipoPrincipal}</h4>
               
             </div>
         ))}
       </div>
     );
}
export default ListarTipoProducto;

