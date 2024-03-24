import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import Home from './pages/home';
import CadastroTitular from './pages/cadastroTitular';
import CadastroDependente from './pages/cadastroDependente';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro/titular" element={<CadastroTitular />} />
        <Route path="/cadastro/dependente" element={<CadastroDependente />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
