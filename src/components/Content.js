import React from "react";
import { Link } from "react-router-dom";

export default function Content() {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard v3</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard v3</li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <h3 className="card-title">CLIENTES</h3>
                    
                  </div>
                </div>

                <div className="card-body">
                  <div className="d-flex">
                    <p className="d-flex flex-column">
                      <Link to="/guardarclientes">
                        <button type="button" className="btn btn-block btn-primary btn-lg">
                          Guardar clientes
                        </button>
                      </Link>

                      <p></p>

                      <Link to="/listarclientes">
                        <button type="button" className="btn btn-block btn-primary btn-lg">
                          Listar Clientes
                        </button>
                      </Link>
                    </p>
                  </div>
                  {/* /.d-flex */}
                </div>
              </div>
              {/* /.card */}

              {/* /.card */}
            </div>
            {/* /.col-md-6 */}
            <div className="col-lg-6 ">
              <div className="card">
                <div className="card-header border-0">
                  <div className="d-flex justify-content-between">
                    <h3 className="card-title">Guardar Pedidos</h3>
                    
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex">
                    <p className="d-flex flex-column">
                    <Link to="/seleccionararea">
                        <button type="button" className="btn btn-block btn-primary btn-lg">
                          Seleccionar Area
                        </button>
                      </Link>

                      <p></p>

                      <Link to="/listartipoproductos">
                        <button type="button" className="btn btn-block btn-primary btn-lg">
                       Listar Categoria Producto
                        </button>
                      </Link>
                     
                    </p>
                  </div>
                  {/* /.d-flex */}
                  
                
                </div>
              </div>
              {/* /.card */}
            </div>
            {/* /.col-md-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content */}
    </div>
  );
}
