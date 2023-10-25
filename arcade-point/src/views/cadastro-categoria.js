import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso, mensagemErro } from '../components/toastr';

import '../custom.css';

import axios from 'axios';
import { BASE_URL } from '../config/axios';

function CadastroCategoria() {
  const { idParam } = useParams();

  const navigate = useNavigate();

  const baseURL = `${BASE_URL}/categorias`;

  // EMAIL	TELEFONE	CEP	UF	CIDADE	COMPLEMENTO	NUMERO

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');

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
      <Card title='Cadastro de Categorias'>
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

export default CadastroCategoria;
