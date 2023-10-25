import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso, mensagemErro } from '../components/toastr';

import '../custom.css';

import axios from 'axios';
import { BASE_URL } from '../config/axios2';

function CadastroLeilao() {
  const { idParam } = useParams();

  const navigate = useNavigate();

  const baseURL = `${BASE_URL}/leiloes`;

  // EMAIL	TELEFONE	CEP	UF	CIDADE	COMPLEMENTO	NUMERO

  const [id, setId] = useState('');
  const [produtoId, setProduto] = useState('');
  const [descricao, setDecricao] = useState('');
  const [categoriaId, setCategoria] = useState('');
  const [estadoConservacao, setEstadoConservacao] = useState('');
  const [valorInicial, setValorInicial] = useState('');
  const [valorAumento, setValorAumento] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [horaFim, setHoraFim] = useState('');
  

  const [dados, setDados] = useState([]);

  // function inicializar() {
  //   if (idParam == null) {
  //     setId('');
  //     setNome('');
  //     setCpf('');
  //     setSenha('');
  //     setSenhaRepeticao('');
  //     setAdmin(false);
  //   } else {
  //     setId(dados.id);
  //     setNome(dados.login);
  //     setCpf(dados.cpf);
  //     setSenha('');
  //     setSenhaRepeticao('');
  //     setAdmin(dados.admin);
  //   }
  // }

  // async function salvar() {
  //   let data = { id, nome, cpf, senha, senhaRepeticao, admin };
  //   data = JSON.stringify(data);
  //   if (idParam == null) {
  //     await axios
  //       .post(baseURL, data, {
  //         headers: { 'Content-Type': 'application/json' },
  //       })
  //       .then(function (response) {
  //         mensagemSucesso(`Usuário ${login} cadastrado com sucesso!`);
  //         navigate(`/listagem-usuarios`);
  //       })
  //       .catch(function (error) {
  //         mensagemErro(error.response.data);
  //       });
  //   } else {
  //     await axios
  //       .put(`${baseURL}/${idParam}`, data, {
  //         headers: { 'Content-Type': 'application/json' },
  //       })
  //       .then(function (response) {
  //         mensagemSucesso(`Usuário ${login} alterado com sucesso!`);
  //         navigate(`/listagem-usuarios`);
  //       })
  //       .catch(function (error) {
  //         mensagemErro(error.response.data);
  //       });
  //   }
  // }

  // async function buscar() {
  //   await axios.get(`${baseURL}/${idParam}`).then((response) => {
  //     setDados(response.data);
  //   });
  //   setId(dados.id);
  //   setNome(dados.nome);
  //   setCpf(dados.cpf);
  //   setSenha('');
  //   setSenhaRepeticao('');
  //   setAdmin(dados.admin);
  // }

  // useEffect(() => {
  //   buscar(); // eslint-disable-next-line
  // }, [id]);

  // if (!dados) return null;

  return (
    <div className='container'>
      <Card title='Cadastro de Leilões'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
              <FormGroup label='Produto: *' htmlFor='inputProduto'>
                <input
                  type='text'
                  id='inputProduto'
                  value={produtoId}
                  className='form-control'
                  name='produto'
                  onChange={(e) => setProduto(e.target.value)}
                />
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
                <input
                  type='text'
                  maxLength='11'
                  id='inputCategoria'
                  value={categoriaId}
                  className='form-control'
                  name='Categoria'
                  onChange={(e) => setCategoria(e.target.value)}
                />
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
                <FormGroup label='Valor Inicial: *' htmlFor='inputValorInicial'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputValorInicial'
                  value={valorInicial}
                  className='form-control'
                  name='Valor Inicial'
                  onChange={(e) => setValorInicial(e.target.value)}
                />
                </FormGroup>
                <FormGroup label='Valor Aumento: *' htmlFor='inputValorAumento'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputValorAumento'
                  value={valorAumento}
                  className='form-control'
                  name='Valor Aumento'
                  onChange={(e) => setValorAumento(e.target.value)}
                />
                </FormGroup>
                <FormGroup label='Data Início: *' htmlFor='inputDataInicio'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputDataInicio'
                  value={dataInicio}
                  className='form-control'
                  name='Data Inicio'
                  onChange={(e) => setDataInicio(e.target.value)}
                />
                </FormGroup>
                <FormGroup label='Hora Início: *' htmlFor='inputHoraInicio'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputHoraInicio'
                  value={horaInicio}
                  className='form-control'
                  name='Hora Inicio'
                  onChange={(e) => setHoraInicio(e.target.value)}
                />
                </FormGroup>
                <FormGroup label='Data Fim: *' htmlFor='inputDataFim'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputDataFim'
                  value={dataFim}
                  className='form-control'
                  name='Data Fim'
                  onChange={(e) => setDataFim(e.target.value)}
                />
                </FormGroup>
                <FormGroup label='Hora Fim: *' htmlFor='inputHoraFim'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputHoraFim'
                  value={horaFim}
                  className='form-control'
                  name='Hora Fim'
                  onChange={(e) => setHoraFim(e.target.value)}
                />
                </FormGroup>

              <Stack spacing={1} padding={1} direction='row'>
                <button
                  // onClick={salvar}
                  type='button'
                  className='btn btn-success'
                >
                  Salvar
                </button>
                <button
                  // onClick={inicializar}
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

export default CadastroLeilao;
