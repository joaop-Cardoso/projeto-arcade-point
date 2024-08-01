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

function CadastroProduto() {
  const { idParam } = useParams();

  const navigate = useNavigate();

  const baseURL = `${BASE_URL2}/produtos`;

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [idMarca, setIdMarca] = useState('');
  const [idPessoa, setIdPessoa] = useState('');
  const [descricao, setDescricao] = useState('');
  const [idConservacao, setIdConservacao] = useState('');
  const [idCategoriaProduto, setIdCategoriaProduto] = useState('');

  const [dados, setDados] = useState([]);

  function inicializar() {
    if (idParam == null) {
      setId('');
      setNome('');
      setIdMarca(0);
      setIdPessoa(0);
      setDescricao('');
      setIdConservacao(0);
      setIdCategoriaProduto(0);

    } else {
      setId(dados.id);
      setNome(dados.login);
      setIdMarca(dados.idMarca);
      setIdPessoa(dados.idPessoa);
      setDescricao(dados.descricao);
      setIdConservacao(dados.idConservacao);
      setIdCategoriaProduto(dados.idCategoriaProduto);
    }
  }

  async function salvar() {
    let data = { id, nome, idMarca };
    data = JSON.stringify(data);
    if (idParam == null) {
      await axios
        .post(baseURL, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Produto ${nome} cadastrado com sucesso!`);
          navigate(`/listagem-produtos`);
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
          mensagemSucesso(`Produto ${nome} alterado com sucesso!`);
          navigate(`/listagem-produtos`);
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
      setNome(dados.nome);
      setIdMarca(dados.idMarca);
      setIdPessoa(dados.idPessoa);
      setDescricao(dados.descricao);
      setIdConservacao(dados.idConservacao);
      setIdCategoriaProduto(dados.idCategoriaProduto);
    }
  }

  const [dadosMarcas, setDadosMarcas] = React.useState(null);
  const [dadosPessoas, setDadosPessoas] = React.useState(null);
  const [dadosConservacoes, setDadosConservacoes] = React.useState(null);
  const [dadosCategoriaProdutos, setDadosCategoriaProdutos] = React.useState(null);


  useEffect(() => {
    axios.get(`${BASE_URL}/pessoas`).then((response) => {
      setDadosPessoas(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${BASE_URL}/conservacoes`).then((response) => {
      setDadosConservacoes(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${BASE_URL}/CategoriaProdutos`).then((response) => {
      setDadosCategoriaProdutos(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${BASE_URL}/marcas`).then((response) => {
      setDadosMarcas(response.data);
    });
  }, []);

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  if (!dados) return null;
  if (!dadosMarcas) return null;
  if (!dadosPessoas) return null;
  if (!dadosConservacoes) return null;
  if (!dadosCategoriaProdutos) return null;


  return (
    <div className='container'>
      <Card title='Cadastro de Produto'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
              <FormGroup label='Nome: *' htmlFor='inputNome'>
                <input
                  type='text'
                  id='inputNome'
                  value={nome}
                  className='form-control'
                  name='nome'
                  onChange={(e) => setNome(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Descrição: *' htmlFor='inputDescrição'>
                <input
                  type='text'
                  id='inputDescrição'
                  value={descricao}
                  className='form-control'
                  name='descrição'
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Marca: *' htmlFor='inputMarca'>
                <select
                  className='form-select'
                  id='selectMarca'
                  name='idMarca'
                  value={idMarca}
                  onChange={(e) => setIdMarca(e.target.value)}
                >
                  <option key='0' value='0'>
                    {' '}
                  </option>
                  {dadosMarcas.map((dado) => (
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
              <FormGroup label='Pessoa: *' htmlFor='inputPessoa'>
                <select
                  className='form-select'
                  id='selectPessoa'
                  name='idPessoa'
                  value={idPessoa}
                  onChange={(e) => setIdPessoa(e.target.value)}
                >
                  <option key='0' value='0'>
                    {' '}
                  </option>
                  {dadosPessoas.map((dado) => (
                    <option key={dado.id} value={dado.id}>
                      {dado.nome}
                    </option>
                  ))}
                </select>
              </FormGroup>
              <FormGroup label='Categoria: *' htmlFor='inputCategoriaProduto'>
                <select
                  className='form-select'
                  id='selectCategoriaProduto'
                  name='idCategoriaProduto'
                  value={idCategoriaProduto}
                  onChange={(e) => setIdCategoriaProduto(e.target.value)}
                >
                  <option key='0' value='0'>
                    {' '}
                  </option>
                  {dadosCategoriaProdutos.map((dado) => (
                    <option key={dado.id} value={dado.id}>
                      {dado.nome}
                    </option>
                  ))}
                </select>
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

export default CadastroProduto;
