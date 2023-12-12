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

function CompraCLeilao() {
  const { idParam } = useParams();

  const navigate = useNavigate();

  const baseURL = `${BASE_URL2}/leiloes`;

  const [id, setId] = useState('');
  const [idProduto, setIdProduto] = useState(0);
  const [nomeCliente, setNomeCliente] = useState('');
  const [valorInicial, setValorInicial] = useState('');




  const [dados, setDados] = useState([]);

  function inicializar() {
    if (idParam == null) {
      setId('');
      setIdProduto(0);
      setNomeCliente(''); 
      setValorInicial('');
    } else {
      setId(dados.id);
      setIdProduto(dados.idProduto);
      setNomeCliente(dados.nomeCliente);
      setValorInicial(dados.valorInicial);
    }
  }

  async function salvar() {
    let data = { id, idProduto, nomeCliente, valorInicial };
    data = JSON.stringify(data);
    if (idParam == null) {
      await axios
        .post(baseURL, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Leilão cadastrado com sucesso!`);
          navigate(`/Compra-l-leilao`);
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
          navigate(`/Compra-l-leilao`);
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
    setNomeCliente(dados.nomeCliente);
    setValorInicial(dados.valorInicial);
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
              <FormGroup label='Cliente: *' htmlFor='inputCliente'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputCliente'
                  value={nomeCliente}
                  className='form-control'
                  name='cliente'
                  onChange={(e) => setNomeCliente(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Lance: *' htmlFor='inputValorInicial'>
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

export default CompraCLeilao;
