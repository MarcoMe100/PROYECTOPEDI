import axios from "axios";
import { useEffect, useState } from "react";
import { Api } from '../Services/api';
import '../assets/css/ListarMesasArea.css';

const ListarMesasArea = () => {
  const [mesasarealistar, setmesas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get(Api + 'mesasarea/listar')
      .then(response => setmesas(response.data.data))
      .catch(error => console.log(error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filtermesas = mesasarealistar.filter(mesasareali =>
    mesasareali.idregistro.toString().includes(searchTerm)
  );

  return (
    <div className="mesasarealistar">
      <h2>Lista de Mesas por Area:</h2>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Buscar" />
      {filtermesas.map(mesasareali => (
        <div key={mesasareali.idregistro} className="mesasareali">
          <h4>id registro: {mesasareali.idregistro}</h4>
          <h4>Codigo Area: {mesasareali.CodigoArea}</h4>
          <h4>Mesa: {mesasareali.Mesa}</h4>
          <h4>Estado: {mesasareali.Estado}</h4>
          <h4>Habilitada: {mesasareali.Habilitada}</h4>
          <h4>Orden: {mesasareali.orden}</h4>
          <h4>Columna: {mesasareali.columna}</h4>
          <h4>Activa: {mesasareali.activa}</h4>
          <h4>Nota: {mesasareali.nota}</h4>
        </div>
      ))}
      {searchTerm === '' && mesasarealistar.length === 0 && (
        <div>No hay mesas disponibles</div>
      )}
      {searchTerm === '' && mesasarealistar.length > 0 && (
        <div>
          <h4>Mostrando todos las mesas:</h4>
          {mesasarealistar.map(mesasareali => (
            <div key={mesasareali.idregistro} className="mesasareali">
              <h4>id registro: {mesasareali.idregistro}</h4>
              <h4>Codigo Area: {mesasareali.CodigoArea}</h4>
              <h4>Mesa: {mesasareali.Mesa}</h4>
              <h4>Estado: {mesasareali.Estado}</h4>
              <h4>Habilitada: {mesasareali.Habilitada}</h4>
              <h4>Orden: {mesasareali.orden}</h4>
              <h4>Columna: {mesasareali.columna}</h4>
              <h4>Activa: {mesasareali.activa}</h4>
              <h4>Nota: {mesasareali.nota}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListarMesasArea;
