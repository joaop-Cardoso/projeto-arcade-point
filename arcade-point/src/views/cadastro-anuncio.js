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
  const [idConservacao, setIdConservacao] = useState(0);
  const [valor, setValor] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');


  const [dados, setDados] = useState([]);

  function inicializar() {
    if (idParam == null) {
      setId('');
      setIdProduto(0);
      setDecricao('');
      setIdCategoria(0);
      setIdConservacao(0);
      setValor('')
      setDataInicio('')
      setDataFim('')
    } else {
      setId(dados.id);
      setIdProduto(dados.idProduto);
      setDecricao(dados.descricao);
      setIdCategoria(dados.idCategoria);
      setIdConservacao(dados.idConservacao);
      setValor(dados.valor)
      setDataInicio(dados.dataInicio)
      setDataFim(dados.dataFim)
    }
  }

  async function salvar() {
    let data = { id, idProduto, descricao, idCategoria, idConservacao, valor, dataInicio, dataFim };
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
      setIdConservacao(dados.idConservacao);
      setValor(dados.valor);
      setDataInicio(dados.dataInicio);
      setDataFim(dados.dataFim);
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

  const [dadosConservacoes, setDadosConservacoes] = React.useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/conservacoes`).then((response) => {
      setDadosConservacoes(response.data);
    });
  }, []);

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  if (!dados) return null;
  if (!dadosProdutos) return null;
  if (!dadosCategorias) return null;
  if (!dadosConservacoes) return null;

  return (
    <div className='container'>
      <Card title='Cadastro de Anúncio'>
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

              <FormGroup label='Conservação: *' htmlFor='inputConservacao'>
                <select
                  className='form-select'
                  id='selectConservacao'
                  name='idConservacao'
                  value={idConservacao}
                  onChange={(e) => setIdConservacao(e.target.value)}
                >
                  <option key='0' value='0'>
                    {' '}
                  </option>
                  {dadosConservacoes.map((dado) => (
                    <option key={dado.id} value={dado.id}>
                      {dado.nome}
                    </option>
                  ))}
                </select>
              </FormGroup>

              <FormGroup label='Valor: ' htmlFor='inputValor'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputValor'
                  value={valor}
                  className='form-control'
                  name='valor'
                  onChange={(e) => setValor(e.target.value)}
                />
              </FormGroup>

              <FormGroup label='Data Início: ' htmlFor='inputDataInicio'>
                <input
                  type='date'
                  maxLength='11'
                  id='inputDataInicio'
                  value={dataInicio}
                  className='form-control'
                  name='dataInicio'
                  onChange={(e) => setDataInicio(e.target.value)}
                />
              </FormGroup>
              
              <FormGroup label='Data Fim: ' htmlFor='inputDataFim'>
                <input
                  type='date'
                  maxLength='11'
                  id='inputDataFim'
                  value={dataFim}
                  className='form-control'
                  name='dataFim'
                  onChange={(e) => setDataFim(e.target.value)}
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
