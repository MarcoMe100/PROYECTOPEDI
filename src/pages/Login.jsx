import React from "react";
//css
import '../assets/css/Login.css';
//imagen
import Logo from '../assets/img/sigres-logo.jpeg';
//services
import { Api } from '../Services/api';
import axios from "axios";
import { Navigate } from "react-router-dom";


class Login extends React.Component {
    
    state = {
        form: {
            "LoginUsuario": "",
            "Contrasena": ""
        },
        error: false,
        errorMsg: "",
        response: null
        
    }


    manejadorSubmit(e) {
        e.preventDefault();
    }

    manejadorChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        // console.log(this.state.form);
    }


    manejadorBoton = async () => {
        
        let url = Api + 'autenticacion/iniciosesion';
       // console.log(url);
        axios.defaults.baseURL = 'http://192.168.0.108:3307/api/';
        axios.defaults.headers.post['Content-type'] = 'application/json';
       
         await axios
          .post(url, this.state.form)
          .then((response) => {
            this.setState({response:response})
            console.log(response);
           
          })
          .catch((error) => {
            console.log(error);
            this.setState({
              error: true,
              errorMsg: 'Error',
            });
          });
        
      };
      

    render() {
        return (
            <React.Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                                      {
                                        this.state.response && (<Navigate to="/dashboard" replace={true} />)
                                      }


                        <div className="fadeIn first">
                            <br /> <br />
                            <img src={Logo} width="100px" alt="User Icon" />
                            <br /> <br />
                        </div>

                        <form onSubmit={this.manejadorSubmit}>
                            <input type="text" className="fadeIn second" name="LoginUsuario" placeholder="Usuario" onChange={this.manejadorChange} />
                            <input type="password" className="fadeIn third" name="Contrasena" placeholder="Contraseña" onChange={this.manejadorChange} />
                            <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejadorBoton} />
                        </form>
                
                   {this.state.error === true &&
                        <div className="alert alert-danger" role="alert">
                           {this.state.errorMsg}
                        </div>
                  }


                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Login