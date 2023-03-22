import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Api } from "../Services/api";
import Header from '../components/Header';
import Aside from '../components/Aside';
//import "../assets/css/SeleccionarAreas.css";

function AreaList() {
  // Se crean las variables de estado 'areas', 'selectedArea' y 'mesas'
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [mesas, setMesas] = useState([]);

  // Función que obtiene las mesas del área seleccionada desde la API
  const listarMesas = (area) => {
    axios
      .get(Api + "mesasarea/listar", {
        params: { CodigoArea: area.CodigoArea },
      })
      .then((response) => setMesas(response.data.data))
      .catch((error) => console.log(error));
  };

  // Hook useEffect que se ejecuta al montarse el componente y obtiene las áreas del restaurante
  useEffect(() => {
    axios
      .get(Api + "areas/listar")
      .then((response) => {
        setAreas(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // Hook useEffect que se ejecuta cuando se selecciona una nueva área y obtiene sus mesas
  useEffect(() => {
    if (selectedArea) {
      listarMesas(selectedArea);
    } else {
      setMesas([]);
    }
  }, [selectedArea]);

  const handleClickMesa = (mesa) => {
    const nuevoEstado = mesa.Estado === "L" ? "O" : "L";
    axios
      .put(Api + "mesasarea/editar", {
        idregistro: mesa.idregistro,
        Estado: nuevoEstado,
      })
      .then((response) => {
        console.log(response.data.data); // imprimir la respuesta de la API
        const newMesas = mesas.map((m) => {
          if (m.Mesa === mesa.Mesa) {
            return { ...m, Estado: nuevoEstado };
          }
          return m;
        });
        console.log(newMesas); // imprimir el nuevo estado de mesas
        setMesas(newMesas);
      })
      .catch((error) => {
        console.log(error);
        alert("Ocurrió un error al actualizar el estado de la mesa");
      });
  };
  

  // Función que maneja el click en un botón de área y actualiza el estado de 'selectedArea'
  const handleClickArea = (codigoArea) => {
    const area = areas.find((a) => a.CodigoArea === codigoArea);
    setSelectedArea(area);
  };

  // Renderizado del componente
  return (
    <>
    <Header></Header>
    <Aside></Aside>
    <div class="content">
      <h1>Seleccionar Área de Restaurante:</h1>
      {/* Renderizado de los botones de áreas */}
      {areas.map((area) => (
        <button type="button" className="btn btn-block btn-primary btn-lg"
          key={area.CodigoArea}
          onClick={() => handleClickArea(area.CodigoArea)}
        >
          {area.Area}
        </button>
      ))}
      {/* Si hay una área seleccionada, renderizar las mesas de esa área */}
      {selectedArea && (
        <div>
          <h2>{selectedArea.NombreArea}</h2>

          {/* Renderizado de los botones de mesas */}
          {mesas.map((mesa) => (
            <Link to="/elegirtipoproducto">
              <button type="button" className="btn btn-block btn-primary btn-lg"
               key={mesa.Mesa} onClick={() => handleClickMesa(mesa)}>
                Mesa {mesa.Mesa}: {mesa.Estado}
                {mesa.Estado ? " Estado" : " Ocupada"}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default AreaList;
