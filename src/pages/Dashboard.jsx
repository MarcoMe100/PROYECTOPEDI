import React from 'react';
import { Link } from 'react-router-dom';
//import Logo from '../assets/img/sigres-logo.jpeg';
import '../assets/css/Dashboard.css';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import Content from '../components/Content';



function Dashboard() {
  return (
    <div className="dashboard">
     <Header></Header>
     <Aside></Aside>
     <Content></Content>
     <Footer></Footer>
      
    </div>
  );
}

export default Dashboard;
