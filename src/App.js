import React from 'react';
import 'bootstrap';
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.png';
import About from './About';

 
function containerTrasition (){
  
}

function App() {
  return (
    <div className="p-0">
      <nav class="navbar navbar-expand-sm m-5">
        <a class="navbar-brand" href="#"><img className ="logo7"src={logo} alt=""/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
          <ul class="navbar-nav justify-content-end">
            <li class="nav-item active">
              <a class="nav-link" href="#">Sobre <span class="sr-only">(Página atual)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Serviços</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Time</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Cliente</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contatos</a>
            </li>
          </ul>
        </div>
      </nav>
      <About></About>
    </div>
  );
}

export default App;
