import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ListarClientes from './pages/ListarClientes';
import GuardarClientes from './pages/GuardarCliente';
 import ListarTipoProducto from './pages/ListarTipoProducto';
import ListarPedido from './pages/ListarPedido';
import GuardarPedido from './pages/GuardarPedido';
import ListarMesasArea from './pages/ListarMesasArea';
import SeleccionarAreas from './pages/SeleccionarAreas';
import ElegirTipoproducto from './pages/ElegirTipoProducto';


function App() {
  return (
    <React.Fragment>
      

      <Routes>
      
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/listarclientes' element={<ListarClientes />} />
        <Route path='/guardarclientes' element={<GuardarClientes />} />
        
        <Route path='/listartipoproductos' element={<ListarTipoProducto />} />
        <Route path='/listarpedidos' element={<ListarPedido />} />
        <Route path='/guardarpedido' element={<GuardarPedido />} />
        <Route path='/listarmesasarea' element={<ListarMesasArea />} />
        <Route path='/seleccionararea' element={<SeleccionarAreas />} />
        <Route path='/elegirtipoproducto' element={<ElegirTipoproducto />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
