import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso, mensagemErro } from '../components/toastr';

import '../custom.css';

import axios from 'axios';
import { BASE_URL } from '../config/axios';

function CadastroPessoa() {
  const { idParam } = useParams();

  const navigate = useNavigate();

  const baseURL = `${BASE_URL}/pessoas`;

  const [id, setId] = useState('');
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idTelefone, setIdTelefone] = useState('');
  const [logradouro, setLogradouro] = useState('')
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [idLocalidade, setIdLocalidade] = useState('');
  const [cep, setCep] = useState('');
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
      setIdTelefone(0);
      setLogradouro('');
      setNumero('');
      setComplemento('');
      setBairro('');
      setIdLocalidade(0);
      setCep('');
      setSenha('');
      setSenhaRepeticao('');
      setAdmin(false);
    } else {
      setId(dados.id);
      setCpf(dados.cpf);
      setNome(dados.nome);
      setEmail(dados.email);
      setIdTelefone(dados.idTelefone);
      setLogradouro(dados.logradouro);
      setNumero(dados.numero);
      setComplemento(dados.complemento);
      setBairro(dados.bairro);
      setIdLocalidade(dados.idLocalidade);
      setCep(dados.cep);
      setSenha('');
      setSenhaRepeticao('');
      setAdmin(dados.admin);
    }
    navigate('/listagem-pessoas');
  }

  async function salvar() {
    let data = { id, cpf, nome, email, idTelefone, logradouro, numero, complemento, bairro, idLocalidade, cep, senha, senhaRepeticao, admin };
    data = JSON.stringify(data);
    if (idParam == null) {
      await axios
        .post(baseURL, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Pessoa ${nome} cadastrada com sucesso!`);
          navigate(`/listagem-pessoas`);
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
          mensagemSucesso(`Pessoa ${nome} alterada com sucesso!`);
          navigate(`/listagem-pessoas`);
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
      setIdTelefone(dados.idTelefone);
      setLogradouro(dados.logradouro);
      setNumero(dados.numero);
      setComplemento(dados.complemento);
      setBairro(dados.bairro);
      setIdLocalidade(dados.idLocalidade);
      setCep(dados.cep);
      setSenha('');
      setSenhaRepeticao('');
      setAdmin(dados.admin);
    }
  }

  const [dadosTelefones, setDadosTelefones] = React.useState(null);
  const [dadosLocalidades, setDadosLocalidades] = React.useState(null); 

  useEffect(() => {
    axios.get(`${BASE_URL}/telefones`).then((response) => {
      setDadosTelefones(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${BASE_URL}/localidades`).then((response) => {
      setDadosLocalidades(response.data);
    });
  }, []);

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  if (!dados) return null;
  if (!dadosTelefones) return null;
  if (!dadosLocalidades) return null;

  return (
    <div className='container'>
      <Card title='Cadastro de Pessoa'>
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
                  maxLength='320'
                  id='inputEmail'
                  value={email}
                  className='form-control'
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Telefone: *' htmlFor='inputTelefone'>
                <select
                  className='form-select'
                  id='selectTelefone'
                  name='idTelefone'
                  value={idTelefone}
                  onChange={(e) => setIdTelefone(e.target.value)}
                >
                  <option key='0' value='0'>
                    {' '}
                  </option>
                  {dadosTelefones.map((dado) => (
                    <option key={dado.id} value={dado.id}>
                      {dado.telefone}
                    </option>
                  ))}
                </select>
              </FormGroup>
              <FormGroup label='Localidade: *' htmlFor='inputLocalidade'>
                <select
                  className='form-select'
                  id='selectLocalidade'
                  name='idLocalidade'
                  value={idLocalidade}
                  onChange={(e) => setIdLocalidade(e.target.value)}
                >
                  <option key='0' value='0'>
                    {' '}
                  </option>
                  {dadosLocalidades.map((dado) => (
                    <option key={dado.id} value={dado.id}>
                      {dado.cidade}
                    </option>
                  ))}
                </select>
              </FormGroup>
              <FormGroup label='Logradouro: *' htmlFor='inputLogradouro'>
                <input
                  type='text'
                  maxLength='50'
                  id='inputLogradouro'
                  value={logradouro}
                  className='form-control'
                  name='logradouro'
                  onChange={(e) => setLogradouro(e.target.value)}
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
              <FormGroup label='Bairro: *' htmlFor='inputBairro'>
                <input
                  type='text'
                  maxLength='11'
                  id='inputBairro'
                  value={bairro}
                  className='form-control'
                  name='bairro'
                  onChange={(e) => setBairro(e.target.value)}
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

export default CadastroPessoa;
