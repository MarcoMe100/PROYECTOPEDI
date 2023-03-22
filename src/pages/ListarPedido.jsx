import axios from "axios";
import { useEffect, useState } from "react";
import { Api } from '../Services/api';
import '../assets/css/ListarPedido.css';

const ListarPedido = () => {
  const [pedidoslistar, setPeidol] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get(Api + 'pedido/listar')
      .then(response => setPeidol(response.data.data))
      .catch(error => console.log(error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPedidos = pedidoslistar.filter(pedidoli =>
    pedidoli.NumeroPedido.toString().includes(searchTerm)
  );

  return (
    <div className="pedidoslistar">
      <h2>Lista de Pedidos:</h2>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Buscar" />
      {filteredPedidos.map(pedidoli => (
        <div key={pedidoli.NumeroPedido} className="pedidoli">
          <h4>NumeroPedido: {pedidoli.NumeroPedido}</h4>
          <h4>Id Mesero: {pedidoli.idmesero}</h4>
          <h4>Fecha Hora: {pedidoli.fechahora}</h4>
          <h4>Activo: {pedidoli.activo}</h4>
          <h4>Modalidad: {pedidoli.modalidad}</h4>
          <h4>Estado: {pedidoli.estado}</h4>
        </div>
      ))}
      {searchTerm === '' && pedidoslistar.length === 0 && (
        <div>No hay pedidos disponibles</div>
      )}
      {searchTerm === '' && pedidoslistar.length > 0 && (
        <div>
          <h4>Mostrando todos los pedidos:</h4>
          {pedidoslistar.map(pedidoli => (
            <div key={pedidoli.NumeroPedido} className="pedidoli">
              <h4>NumeroPedido: {pedidoli.NumeroPedido}</h4>
              <h4>Id Mesero: {pedidoli.idmesero}</h4>
              <h4>Fecha Hora: {pedidoli.fechahora}</h4>
              <h4>Activo: {pedidoli.activo}</h4>
              <h4>Modalidad: {pedidoli.modalidad}</h4>
              <h4>Estado: {pedidoli.estado}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListarPedido;
