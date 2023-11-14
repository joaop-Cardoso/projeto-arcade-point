import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso, mensagemErro } from '../components/toastr';

import '../custom.css';

import axios from 'axios';
import { BASE_URL2 } from '../config/axios2';
import { BASE_URL } from '../config/axios';

function CadastroAnuncio() {
  const { idParam } = useParams();

  const navigate = useNavigate();

  const baseURL = `${BASE_URL2}/anuncios`;

  const [id, setId] = useState('');
  const [idProduto, setIdProduto] = useState(0);
  const [descricao, setDecricao] = useState('');
  const [idCategoria, setIdCategoria] = useState(0);
  const [estadoConservacao, setEstadoConservacao] = useState('');
  const [valor, setValor] = useState('');


  const [dados, setDados] = useState([]);

  function inicializar() {
    if (idParam == null) {
      setId('');
      setIdProduto(0);
      setDecricao('');
      setIdCategoria(0);
      setEstadoConservacao('');
      setValor('')
    } else {
      setId(dados.id);
      setIdProduto(dados.idProduto);
      setDecricao(dados.descricao);
      setIdCategoria(dados.idCategoria);
      setEstadoConservacao(dados.estadoConservacao);
      setValor(dados.valor)
    }
  }

  async function salvar() {
    let data = { id, idProduto, descricao, idCategoria, estadoConservacao, valor };
    data = JSON.stringify(data);
    if (idParam == null) {
      await axios
        .post(baseURL, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Anúncio cadastrado com sucesso!`);
          navigate(`/listagem-anuncios`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    } else {
      await axios
        .put(`${baseURL}/${idParam}`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Anúncio alterado com sucesso!`);
          navigate(`/listagem-anuncios`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    }
  }

  async function buscar() {
    if (idParam != null) {
      await axios.get(`${baseURL}/${idParam}`).then((response) => {
        setDados(response.data);
      });
      setId(dados.id);
      setIdProduto(dados.idProduto);
      setDecricao(dados.descricao);
      setIdCategoria(dados.idCategoria);
      setEstadoConservacao(dados.estadoConservacao);
      setValor(dados.valor);
    }
  }

  const [dadosProdutos, setDadosProdutos] = React.useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL2}/produtos`).then((response) => {
      setDadosProdutos(response.data);
    });
  }, []);


  const [dadosCategorias, setDadosCategorias] = React.useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/categorias`).then((response) => {
      setDadosCategorias(response.data);
    });
  }, []);

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  if (!dados) return null;
  if (!dadosProdutos) return null;
  if (!dadosCategorias) return null;

  return (
    <div className='container'>
      <Card title='Cadastro de Anuncio'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
              <FormGroup label='Produto: *' htmlFor='selectProduto'>
                <select
                  className='form-select'
                  id='selectProduto'
                  name='idProduto'
                  value={idProduto}
                  onChange={(e) => setIdProduto(e.target.value)}
                >
                  <option key='0' value='0'>
                    {' '}
                  </option>
                  {dadosProdutos.map((dado) => (
                    <option key={dado.id} value={dado.id}>
                      {dado.nome}
                    </option>
                  ))}
                </select>
              </FormGroup>
              <FormGroup label='Descrição: ' htmlFor='inputDescricao'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputDescricao'
                  value={descricao}
                  className='form-control'
                  name='descricao'
                  onChange={(e) => setDecricao(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Categoria: *' htmlFor='inputCategoria'>
                <select
                  className='form-select'
                  id='selectCategoria'
                  name='idCategoria'
                  value={idCategoria}
                  onChange={(e) => setIdCategoria(e.target.value)}
                >
                  <option key='0' value='0'>
                    {' '}
                  </option>
                  {dadosCategorias.map((dado) => (
                    <option key={dado.id} value={dado.id}>
                      {dado.nome}
                    </option>
                  ))}
                </select>
              </FormGroup>
              <FormGroup label='Estado de Conservação: *' htmlFor='inputConservacao'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputConservacao'
                  value={estadoConservacao}
                  className='form-control'
                  name='Estado de Conservação'
                  onChange={(e) => setEstadoConservacao(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Valor: *' htmlFor='inputValor'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputValor'
                  value={valor}
                  className='form-control'
                  name='Valor'
                  onChange={(e) => setValor(e.target.value)}
                />
              </FormGroup>
              <Stack spacing={1} padding={1} direction='row'>
                <button
                  onClick={salvar}
                  type='button'
                  className='btn btn-success'
                >
                  Salvar
                </button>
                <button
                  onClick={inicializar}
                  type='button'
                  className='btn btn-danger'
                >
                  Cancelar
                </button>
              </Stack>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CadastroAnuncio;
