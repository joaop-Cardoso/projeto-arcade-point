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

function CadastroLeilao() {
  const { idParam } = useParams();

  const navigate = useNavigate();

  const baseURL = `${BASE_URL2}/leiloes`;

  const [id, setId] = useState('');
  const [idProduto, setIdProduto] = useState(0);
  const [valorInicial, setValorInicial] = useState('');
  const [valorAumento, setValorAumento] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [horaFim, setHoraFim] = useState('');


  const [dados, setDados] = useState([]);

  function inicializar() {
    if (idParam == null) {
      setId('');
      setIdProduto(0);
      setValorInicial('');
      setValorAumento('');
      setDataInicio('');
      setHoraInicio('');
      setDataFim('');
      setHoraFim('');
    } else {
      setId(dados.id);
      setIdProduto(dados.idProduto);
      setValorInicial(dados.valorInicial);
      setValorAumento(dados.valorAumento);
      setDataInicio(dados.dataInicio);
      setHoraInicio(dados.horaInicio);
      setDataFim(dados.dataFim);
      setHoraFim(dados.horaFim);
    }
    navigate('/listagem-leiloes');
  }

  async function salvar() {
    let data = { id, idProduto, valorInicial, valorAumento, dataInicio, horaInicio, dataInicio, dataFim };
    data = JSON.stringify(data);
    if (idParam == null) {
      await axios
        .post(baseURL, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Leilão cadastrado com sucesso!`);
          navigate(`/listagem-leiloes`);
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
          mensagemSucesso(`Leilão alterado com sucesso!`);
          navigate(`/listagem-leiloes`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    }
  }

  async function buscar() {
    if (idParam != null){
    await axios.get(`${baseURL}/${idParam}`).then((response) => {
      setDados(response.data);
    });
    setId(dados.id);
    setIdProduto(dados.idProduto);
    setValorInicial(dados.valorInicial);
    setValorAumento(dados.valorAumento);
    setDataInicio(dados.dataInicio);
    setHoraInicio(dados.horaInicio);
    setDataFim(dados.dataFim);
    setHoraFim(dados.horaFim);
  }
}

  const [dadosProdutos, setDadosProdutos] = React.useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL2}/produtos`).then((response) => {
      setDadosProdutos(response.data);
    });
  }, []);

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  if (!dados) return null;
  if (!dadosProdutos) return null;

  return (
    <div className='container'>
      <Card title='Cadastro de Leilões'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
              <FormGroup label='Produto: *' htmlFor='inputProduto'>
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
                  type='date'
                  id='inputDataInicio'
                  value={dataInicio}
                  className='form-control'
                  name='Data Inicio'
                  onChange={(e) => setDataInicio(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Horário Início: *' htmlFor='inputHoraInicio'>
                <input
                  type='time'
                  id='inputHoraInicio'
                  value={horaInicio}
                  className='form-control'
                  name='Hora Inicio'
                  onChange={(e) => setHoraInicio(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Data Fim: *' htmlFor='inputDataFim'>
                <input
                  type='date'
                  id='inputDataFim'
                  value={dataFim}
                  className='form-control'
                  name='Data Fim'
                  onChange={(e) => setDataFim(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Horário Fim: *' htmlFor='inputHoraFim'>
                <input
                  type='time'
                  id='inputHoraFim'
                  value={horaFim}
                  className='form-control'
                  name='Hora Fim'
                  onChange={(e) => setHoraFim(e.target.value)}
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

export default CadastroLeilao;
