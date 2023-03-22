import axios from "axios";
import { useEffect, useState } from "react";
import { Api } from '../Services/api';
import '../assets/css/ListarClientes.css';

const ListarClientes = () => {
   
    const [clienteslistar, setClientesl] = useState([]);
    const [filtroNombre, setFiltroNombre] = useState("");

    useEffect(() =>{
       axios.get(Api + 'clientes/listar')
       .then(response => setClientesl(response.data.data))
       .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        if (filtroNombre === "") {
            axios.get(Api + 'clientes/listar')
                .then(response => setClientesl(response.data.data))
                .catch(error => console.log(error));
        }
    }, [filtroNombre]);

    const buscarClientes = () => {
      axios
        .get(Api + "clientes/listar")
        .then((response) => {
          const clientesFiltrados = response.data.data.filter((cliente) =>
            cliente.Nombre.toLowerCase().includes(filtroNombre.toLowerCase())
          );
          setClientesl(clientesFiltrados);
        })
        .catch((error) => console.log(error));
    };

     return (
       <div className="clienteslistar">
         <h2>Lista de Clientes:</h2>
         <div>
           <input
             type="text"
             value={filtroNombre}
             onChange={(e) => setFiltroNombre(e.target.value)}
             placeholder="Buscar por nombre"
           />
           <button onClick={buscarClientes}>Buscar</button>
         </div>
         {clienteslistar.map(clientesli =>(
             <div key={clientesli.idregistro} className="clientesli">
               <h4>Id Registro: {clientesli.idregistro}</h4>
               <h4>RTN: {clientesli.RTN}</h4>
               <h4>Nombre: {clientesli.Nombre}</h4>
              
             </div>
         ))}
       </div>
     );
}
export default ListarClientes;

