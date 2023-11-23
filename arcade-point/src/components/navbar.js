import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';

import NavbarItem from './navbarItem';

function Navbar(props) {
  return (
    <div className='navbar navbar-expand-lg fixed-top navbar-dark bg-primary'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
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
              href='/listagem-usuarios'
              label='Usuários'
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
