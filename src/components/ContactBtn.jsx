import React from 'react'
import { Link } from 'react-router-dom'

function ContactBtn () {
  const handleLink = () => {
    window.scrollTo()
  }
  return (
    <div className='container d-flex justify-content-center align-items-center mt-4'>
      <a
        href="#contacto"
        id='botonDeContacto'
        className='btn texto-verde fw-light titulo-size15 ash text-white me-1 py-md-3'
        onClick={handleLink}
      >
        CONTACTANOS EN NUESTRAS REDES
      </a>
    </div>
  )
}

export default ContactBtn
