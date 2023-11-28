import React from 'react';

import ListagemUsuarios from './views/listagem-usuarios';
import ListagemProdutos from './views/listagem-produtos';
import ListagemAnuncios from './views/listagem-anuncios';
import ListagemProcuras from './views/listagem-procuras'; 
import ListagemLeiloes from './views/listagem-leiloes'; 
import ListagemConservacoes from './views/listagem-conservacoes';
import ListagemCategorias from './views/listagem-categorias'; 
import ListagemMarcas from './views/listagem-marcas'; 
    


import Login from './views/login';
import CadastroUsuario from './views/cadastro-usuario';
import CadastroProduto from './views/cadastro-produto';
import CadastroAnuncio from './views/cadastro-anuncio';
import CadastroProcura from './views/cadastro-procura';
import CadastroLeilao from './views/cadastro-leilao';
import CadastroConservacao from './views/cadastro-conservacao';
import CadastroCategoria from './views/cadastro-categoria';
import CadastroMarca from './views/cadastro-marca';

import Imagem from './views';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Rotas(props) {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}
        <Route
          path='/cadastro-usuarios/:idParam?'
          element={<CadastroUsuario />}
        />
        <Route path='/listagem-usuarios' element={<ListagemUsuarios />} />
      </Routes>

      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}
        <Route
          path='/cadastro-produto/:idParam?'
          element={<CadastroProduto />}
        />
        <Route path='/listagem-produtos' element={<ListagemProdutos />} />
      </Routes>

      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}
        <Route
          path='/cadastro-anuncio/:idParam?'
          element={<CadastroAnuncio />}
        />
        <Route path='/listagem-anuncios' element={<ListagemAnuncios />} />
      </Routes>

      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}
        <Route
          path='/cadastro-procura/:idParam?'
          element={<CadastroProcura />}
        />
        <Route path='/listagem-procuras' element={<ListagemProcuras />} />
      </Routes>

      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}
        <Route
          path='/cadastro-leilao/:idParam?'
          element={<CadastroLeilao />}
        />
        <Route path='/listagem-leiloes' element={<ListagemLeiloes/>} />
      </Routes>

      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}
        <Route
          path='/cadastro-categoria/:idParam?'
          element={<CadastroCategoria />}
        />
        <Route path='/listagem-categorias' element={<ListagemCategorias/>} />
      </Routes>

      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}
        <Route
          path='/cadastro-conservacao/:idParam?'
          element={<CadastroConservacao />}
        />
        <Route path='/listagem-conservacoes' element={<ListagemConservacoes/>} />
      </Routes>

      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}
        <Route
          path='/cadastro-marca/:idParam?'
          element={<CadastroMarca />}
        />
        <Route path='/listagem-marcas' element={<ListagemMarcas/>} />
      </Routes>

      <Routes>
      <Route path='/index' element={<Imagem/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default Rotas;
