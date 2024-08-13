import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';

import NavbarItem from './navbarItem';

function Navbar(props) {
  return (
    <div className='navbar navbar-expand-lg fixed-top navbar-dark bg-primary'>
      <div className='container'>
        <a href='/index' className='navbar-brand'>
          Arcade Point
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-pessoas'
              label='Pessoas'
            />
          </ul>

          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-marcas'
              label='Marcas'
            />
          </ul>

          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-localidades'
              label='Localidades'
            />
          </ul>

          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-telefones'
              label='Telefones'
            />
          </ul>

          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-produtos'
              label='Produtos'
            />
          </ul>

          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-categorias'
              label='Categorias'
            />
          </ul>

          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-conservacoes'
              label='Conservações'
            />
          </ul> 

          
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-anuncios'
              label='Anúncios'
            />
          </ul>

          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-procuras'
              label='Procuras'
            />
          </ul>

          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-leiloes'
              label='Leilões'
            />
          </ul>

          {/* <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/Compra-l-anuncio'
              label='C-Anúncio'
            />
          </ul> */}

          {/* <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/Compra-l-procura'
              label='C-Procura'
            />
          </ul> */}

          {/* <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/Compra-l-leilao'
              label='C-Leilão'
            />
          </ul> */}

          
          {/* <ul className='navbar-nav'>
            <NavbarItem render='true' href='/login' label='Entrar' />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem render='true' href='/' label='Sair' />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
