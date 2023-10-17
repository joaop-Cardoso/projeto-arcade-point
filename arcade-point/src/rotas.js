import React from 'react';

import ListagemUsuarios from './views/listagem-usuarios';

import Login from './views/login';
import CadastroUsuario from './views/cadastro-usuario';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Rotas(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/cadastro-usuarios/:idParam?'
          element={<CadastroUsuario />}
        />
        <Route path='/listagem-usuarios' element={<ListagemUsuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
