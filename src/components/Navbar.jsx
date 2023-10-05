import React from 'react'
import logo from '../assets/img/logo.svg'

function Navbar() {
    return (
        <nav className="flex flex-wrap items-center content-between py-3 px-4 fixed w-screen text-black glass backdrop-blur">
            <div className="container mx-auto sm:px-4 justify-center ">
                <div className="flex justify-between mx-4 ">
                    <a className="pt-1 pb-1 mr-4 text-lg whitespace-nowrap" href="#">
                        <img src={logo} alt="logo" className='bg-white h-16 w-11' />
                    </a>
                    <div className="flex justify-center items-center self-center flex-wrap" id="titulo-navbar">
                        <p className="texto-negro titulo-size15 mb-0 ash">ECOAMBIENTAL</p>
                        <p className="texto-verde titulo-size15 lg:mx-0 mx-1 mb-0 ash">DESINFECCIONES</p>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center fw-bold" id="navbarNav">
                    <ul className="navbar-nav fw-bold">
                        <li className="nav-item">
                            <a className="nav-link" href="#inicio">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#quienesSomos">¿Quienes somos?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#servicios">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#clientes">Nuestros Clientes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar