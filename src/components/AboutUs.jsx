import React from 'react'

function AboutUs () {
  return (
    <div id='quienesSomos' className='container-fluid'>
      <h2 className='text-center ash d-none d-md-block m-4 titulo-size3 texto-negro titulo-cute'>
        QUIENES SOMOS
      </h2>
      <div className='row my-4 d-flex '>
        <div className='quienesSomosCard col-md  d-flex flex-column  align-items-center justify-content-start p-3 rounded-1 text-white'>
          <i id='uno' className='bi bi-hand-index-thumb'></i>
          <h3 className='front ash titulo-size3 text-center texto-negro'>
            MISIÓN
          </h3>
          <p className='back d-flex p-3 align-self-center align-items-center justify-content-center texto-negro'>
            Nuestra misión es proteger la salud y el bienestar de las personas y
            el medio ambiente a través de nuestros servicios de desinfección.
            Ofrecemos soluciones confiables y eficientes para combatir la
            propagación de enfermedades y garantizar espacios limpios y libres
            de gérmenes. Trabajamos con pasión y dedicación para superar las
            expectativas de nuestros clientes.
          </p>
        </div>
        <div className='col-md  d-flex flex-column  align-items-center justify-content-start rounded-1'>
          <h2 className='text-center mb-0 d-md-none titulo-size2 ash texto-negro titulo-cute'>
            QUIENES SOMOS
          </h2>
          <p
            id='texto-quienes-somos'
            className='col-md mx-lg-5 d-flex align-items-md-start align-items-center justify-content-center p-1 pt-3 rounded-1'
          >
            EcoAmbiental es una empresa familiar con una trayectoria de dos
            generaciones en el campo de las desinfecciones. Estamos ubicados en
            Córdoba, Argentina, y comenzamos nuestra actividad en 1996. Durante
            todos estos años, nos hemos especializado en ofrecer servicios de
            desinfección en hogares, industrias y empresas. Nos enorgullece
            contar con un equipo de profesionales altamente capacitados y
            comprometidos con la calidad y la satisfacción del cliente.
          </p>
        </div>
        <div className='quienesSomosCard col-md  d-flex flex-column  align-items-center justify-content-start p-3 rounded-1 text-white'>
          <i id='dos' className='bi bi-hand-index-thumb'></i>
          <h3 className='front  ash text-center titulo-size3 texto-negro'>
            VISIÓN
          </h3>
          <p className='back d-flex p-3 align-self-center align-items-center justify-content-center texto-negro'>
            Nuestra visión es convertirnos en la empresa líder en servicios de
            desinfección en la provincia de Córdoba y expandir nuestra capacidad
            operativa. Buscamos ser reconocidos por nuestra excelencia en el
            servicio al cliente, la calidad de nuestros trabajos y la
            implementación de prácticas sostenibles. Nuestro objetivo es seguir
            creciendo y adaptándonos a las necesidades cambiantes del mercado,
            brindando soluciones efectivas que promuevan la salud y el bienestar
            de la comunidad y el entorno en general.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
