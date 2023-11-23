import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso, mensagemErro } from '../components/toastr';

import '../custom.css';

import axios from 'axios';
import { BASE_URL } from '../config/axios';

function CadastroUsuario() {
  const { idParam } = useParams();

  const navigate = useNavigate();

  const baseURL = `${BASE_URL}/usuarios`;

  const [id, setId] = useState('');
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');
  const [complemento, setComplemento] = useState('');
  const [numero, setNumero] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaRepeticao, setSenhaRepeticao] = useState('');
  const [admin, setAdmin] = useState(false);

  const [dados, setDados] = useState([]);

  function inicializar() {
    if (idParam == null) {
      setId('');
      setCpf('');
      setNome('');
      setEmail('');
      setTel('');
      setCep('');
      setUf('');
      setCidade('');
      setComplemento('');
      setNumero('');
      setSenha('');
      setSenhaRepeticao('');
      setAdmin(false);
    } else {
      setId(dados.id);
      setCpf(dados.cpf);
      setNome(dados.nome);
      setEmail(dados.email);
      setTel(dados.tel);
      setCep(dados.cep);
      setUf(dados.uf);
      setCidade(dados.cidade);
      setComplemento(dados.complemento);
      setNumero(dados.numero)
      setSenha('');
      setSenhaRepeticao('');
      setAdmin(dados.admin);
    }
  }

  async function salvar() {
    let data = { id, cpf, nome, email, tel, cep, uf, cidade, complemento, numero, senha, senhaRepeticao, admin };
    data = JSON.stringify(data);
    if (idParam == null) {
      await axios
        .post(baseURL, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Usuário ${nome} cadastrado com sucesso!`);
          navigate(`/listagem-usuarios`);
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
          mensagemSucesso(`Usuário ${nome} alterado com sucesso!`);
          navigate(`/listagem-usuarios`);
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
      setCpf(dados.cpf);
      setNome(dados.nome);
      setEmail(dados.email);
      setTel(dados.tel);
      setCep(dados.cep);
      setUf(dados.uf);
      setCidade(dados.cidade);
      setComplemento(dados.complemento);
      setNumero(dados.numero)
      setSenha('');
      setSenhaRepeticao('');
      setAdmin(dados.admin);
    }
  }

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  if (!dados) return null;

  return (
    <div className='container'>
      <Card title='Cadastro de Usuário'>
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
              <FormGroup label='Cpf: *' htmlFor='inputCpf'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputCpf'
                  value={cpf}
                  className='form-control'
                  name='cpf'
                  onChange={(e) => setCpf(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='E-mail: *' htmlFor='inputEmail'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputEmail'
                  value={email}
                  className='form-control'
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Telefone: *' htmlFor='inputTel'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputTel'
                  value={tel}
                  className='form-control'
                  name='tel'
                  onChange={(e) => setTel(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Cep: *' htmlFor='inputCep'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputCep'
                  value={cep}
                  className='form-control'
                  name='cep'
                  onChange={(e) => setCep(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Uf: *' htmlFor='inputUf'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputUf'
                  value={uf}
                  className='form-control'
                  name='uf'
                  onChange={(e) => setUf(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Cidade: *' htmlFor='inputCidade'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputCidade'
                  value={cidade}
                  className='form-control'
                  name='cidade'
                  onChange={(e) => setCidade(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Complemento: *' htmlFor='inputComplemento'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputComplemento'
                  value={complemento}
                  className='form-control'
                  name='complemento'
                  onChange={(e) => setComplemento(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Número: *' htmlFor='inputNumero'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputNumero'
                  value={numero}
                  className='form-control'
                  name='numero'
                  onChange={(e) => setNumero(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Senha: *' htmlFor='inputSenha'>
                <input
                  type='password'
                  id='inputSenha'
                  value={senha}
                  className='form-control'
                  name='senha'
                  onChange={(e) => setSenha(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Repita a Senha: *' htmlFor='inputRepitaSenha'>
                <input
                  type='password'
                  id='inputRepitaSenha'
                  value={senhaRepeticao}
                  className='form-control'
                  name='senhaRepeticao'
                  onChange={(e) => setSenhaRepeticao(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='checkAdmin'
                  checked={admin}
                  name='admin'
                  onChange={(e) => setAdmin(e.target.checked)}
                />
                Administrador
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

export default CadastroUsuario;
