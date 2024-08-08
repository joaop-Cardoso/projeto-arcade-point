import React from 'react';

import ListagemPessoas from './views/listagem-pessoas';
import ListagemProdutos from './views/listagem-produtos';
import ListagemAnuncios from './views/listagem-anuncios';
import ListagemProcuras from './views/listagem-procuras'; 
import ListagemLeiloes from './views/listagem-leiloes'; 
import ListagemConservacoes from './views/listagem-conservacoes';
import ListagemCategorias from './views/listagem-categorias'; 
import ListagemMarcas from './views/listagem-marcas';
import CompraLAnuncios from './views/Compra-l-anuncio';
import CompraLLeilao from './views/Compra-l-leilao';
import CompraLProcura from './views/Compra-l-procura';
import ListagemLocalidades from './views/listagem-localidades';
import ListagemTelefones from './views/listagem-telefones';

    


import Login from './views/login';
import CadastroPessoa from './views/cadastro-pessoa';
import CadastroProduto from './views/cadastro-produto';
import CadastroAnuncio from './views/cadastro-anuncio';
import CadastroProcura from './views/cadastro-procura';
import CadastroLeilao from './views/cadastro-leilao';
import CadastroConservacao from './views/cadastro-conservacao';
import CadastroCategoria from './views/cadastro-categoria';
import CadastroMarca from './views/cadastro-marca';
import CadastroCAnuncio from './views/Compra-c-anuncio';
import CompraCLeilao from './views/Compra-c-leilao';
import CompraCProcura from './views/Compra-c-procura';
import CadastroLocalidade from './views/cadastro-localidade';
import CadastroTelefone from './views/cadastro-telefone';


import Imagem from './views';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CompraCAnuncio from './views/Compra-c-anuncio';

function Rotas(props) {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}
        <Route
          path='/cadastro-pessoa/:idParam?'
          element={<CadastroPessoa />}
        />
        <Route path='/listagem-pessoas' element={<ListagemPessoas/>} />
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
        {/* <Route path='/login' element={<Login />} /> */}
        <Route
          path='/Compra-c-Anuncio/:idParam?'
          element={<CadastroCAnuncio />}
        />
        <Route path='/Compra-l-anuncio' element={<CompraLAnuncios/>} />
      </Routes>

      <Routes>
      <Route path='/index' element={<Imagem/>} />
      </Routes>

      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}
        <Route
          path='/Compra-c-leilao/:idParam?'
          element={<CompraCLeilao />}
        />
        <Route path='/Compra-l-leilao' element={<CompraLLeilao/>} />
      </Routes>

      <Routes>
      <Route path='/index' element={<Imagem/>} />
      </Routes>

      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}
        <Route
          path='/Compra-c-procura/:idParam?'
          element={<CompraCProcura/>}
        />
        <Route path='/Compra-l-procura' element={<CompraLProcura/>} />
      </Routes>

      <Routes>
      <Route path='/index' element={<Imagem/>} />
      </Routes>

      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}
        <Route
          path='/cadastro-localidade/:idParam?'
          element={<CadastroLocalidade />}
        />
        <Route path='/listagem-localidades' element={<ListagemLocalidades/>} />
      </Routes>

      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}
        <Route
          path='/cadastro-telefone/:idParam?'
          element={<CadastroTelefone />}
        />
        <Route path='/listagem-telefones' element={<ListagemTelefones/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default Rotas;
