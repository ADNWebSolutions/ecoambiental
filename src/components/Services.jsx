import React from 'react'

function Services () {
  return (
    <>
      <div
        id='servicios'
        className='d-flex row align-items-center justify-content-center mx-auto'
      >
        <h2 className='text-center mb-2 ash titulo-size3 titulo-cute'>
          SERVICIOS
        </h2>
        <p className='texto-negro px-3'>
          Con nuestro plan de control de plagas, ofrecemos un enfoque integral y
          proactivo para protegerlo. Desde la revisión inicial y el seguimiento
          continuo, hasta el monitoreo, la capacitación y el mantenimiento
          regular, nos aseguramos que su entorno esté libre de plagas y sea
          seguro para usted y su equipo.
        </p>
      </div>
      <div className='containerCirculoControlDePagas container-fluid'>
        <div className='row container-fluid'>
          <div className='col'></div>
          <div className='col-md-6 col-12 containerCircleBtn'>
            <div className='liRevision'>
              <i className='icon bi bi-plus-circle' id='iconRevision'></i>
              <p id='textRevision'>
                Inicia con una exhaustiva revisión de su propiedad. Nuestro
                equipo evaluará cuidadosamente el área para identificar posibles
                fuentes de infestación y determinar el alcance del problema.
                Esta revisión nos permite desarrollar un enfoque personalizado y
                efectivo para abordar las plagas específicas que pueda
                enfrentar.
              </p>
            </div>
            <div className='liMonitoreo'>
              <i className='icon bi bi-plus-circle' id='iconMonitoreo'></i>
              <p id='textMonitoreo'>
                Creemos en la importancia de la capacitación y la educación en
                el control de plagas. Ofrecemos programas de capacitación para
                propietarios y personal, brindando información sobre la
                prevención de plagas, identificación de signos de infestación y
                prácticas adecuadas de control de plagas.
              </p>
            </div>
            <div className='liMantenimiento'>
              <i className='icon bi bi-plus-circle' id='iconMantenimiento'></i>
              <p id='textMantenimiento'>
                Incluye un riguroso monitoreo de la actividad de las plagas en
                su propiedad. Utilizamos técnicas y herramientas avanzadas para
                detectar cualquier signo de infestación y evaluar su extensión.
                El monitoreo regular nos ayuda a identificar problemas
                emergentes y tomar medidas preventivas antes de que se
                conviertan en grandes plagas.
              </p>
            </div>
            <div className='liSeguimiento'>
              <i className='icon bi bi-plus-circle' id='iconSeguimiento'></i>
              <p id='textSeguimiento'>
                El seguimiento es un componente esencial de nuestro plan de
                control de plagas. Una vez implementadas las medidas iniciales,
                continua el monitoreo de cerca, para asegurarnos que las plagas
                estén siendo controladas de manera efectiva. Esto nos permite
                ajustar y adaptar nuestras estrategias.
              </p>
            </div>
            <div className='liCapacitacion'>
              <i className='icon bi bi-plus-circle' id='iconCapacitacion'></i>
              <p id='textCapacitacion'>
                El mantenimiento regular es fundamental para garantizar la
                efectividad continua de nuestro plan de control de plagas.
                Nuestro equipo realizará visitas periódicas programadas para
                asegurarse que las medidas de control estén funcionando
                correctamente.
              </p>
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
      <div className='accordion d-md-none' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header '>
            <button
              className='accordion-button collapsed titulo-size15'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              Revisión
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body p-servicios-ocultos'>
              Inicia con una exhaustiva revisión de su propiedad. Nuestro equipo
              evaluará cuidadosamente el área para identificar posibles fuentes
              de infestación y determinar el alcance del problema. Esta revisión
              nos permite desarrollar un enfoque personalizado y efectivo para
              abordar las plagas específicas que pueda enfrentar.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed titulo-size15'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              Monitoreo
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body p-servicios-ocultos'>
              Creemos en la importancia de la capacitación y la educación en el
              control de plagas. Ofrecemos programas de capacitación para
              propietarios y personal, brindando información sobre la prevención
              de plagas, identificación de signos de infestación y prácticas
              adecuadas de control de plagas.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed titulo-size15'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              Mantenimiento
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body p-servicios-ocultos'>
              Incluye un riguroso monitoreo de la actividad de las plagas en su
              propiedad. Utilizamos técnicas y herramientas avanzadas para
              detectar cualquier signo de infestación y evaluar su extensión. El
              monitoreo regular nos ayuda a identificar problemas emergentes y
              tomar medidas preventivas antes de que se conviertan en grandes
              plagas.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed titulo-size15'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseFour'
              aria-expanded='false'
              aria-controls='collapseFour'
            >
              Seguimiento
            </button>
          </h2>
          <div
            id='collapseFour'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body p-servicios-ocultos'>
              El seguimiento es un componente esencial de nuestro plan de
              control de plagas. Una vez implementadas las medidas iniciales,
              continua el monitoreo de cerca, para asegurarnos que las plagas
              estén siendo controladas de manera efectiva. Esto nos permite
              ajustar y adaptar nuestras estrategias.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed titulo-size15'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseFive'
              aria-expanded='false'
              aria-controls='collapseFive'
            >
              Capacitación
            </button>
          </h2>
          <div
            id='collapseFive'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body p-servicios-ocultos'>
              El mantenimiento regular es fundamental para garantizar la
              efectividad continua de nuestro plan de control de plagas. Nuestro
              equipo realizará visitas periódicas programadas para asegurarse
              que las medidas de control estén funcionando correctamente.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
