import React from 'react'

function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg navbar-fixed-top my-0 py-0 px-2 px-sm-0'>
      <div className='container justify-content-center '>
        <div className='d-flex justify-content-between mx-4 '>
          <a className='navbar-brand' href='#'>
            <img src='./src/assets/img/logo.svg' alt='logo' />
          </a>
          <div
            className='d-flex justify-content-center align-items-center align-self-center flex-wrap'
            id='titulo-navbar'
          >
            <p className='texto-negro titulo-size15 mb-0 ash '>ECOAMBIENTAL</p>
            <p className='texto-verde titulo-size15 mx-0-lg mx-1 mb-0 ash'>
              DESINFECCIONES
            </p>
          </div>
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-center fw-bold'
          id='navbarNav'
        >
          <ul className='navbar-nav fw-bold'>
            <li className='nav-item'>
              <a className='nav-link' href='#inicio'>
                Inicio
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#quienesSomos'>
                ¿Quienes somos?
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#servicios'>
                Servicios
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#clientes'>
                Nuestros Clientes
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contacto'>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
