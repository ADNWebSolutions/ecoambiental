import React from 'react'
import wapFooter from '../assets/img/footer/whatsapp-footer.png'
import instaFooter from '../assets/img/footer/instagram-footer.png'
import facebookFooter from '../assets/img/footer/facebook-footer.png'
import emailFooter from '../assets/img/footer/email-footer.png'
import telefonoFooter from '../assets/img/footer/telefono-footer.png'

function Footer() {
    return (
        <>
            <footer>
                <div id="contacto" className="flex md:flex-row-reverse flex-col lg:flex-row-reverse">
                    {/* <!--Estilo https://www.neoplagas.cl/
            Links a Sectores de la página || Contacto formulario--> */}
                    <div className="container-footer-1">
                        <form className="contact-form">
                            <h2 className="ash titulo-size2">CONTACTANOS!</h2>
                            <label htmlFor="name">Nombre / Empresa</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" name="message" rows="5"></textarea>
                            <button className="btn-footer" type="submit" value="send" role="submit">Enviar</button>
                        </form>
                    </div>
                    <div className="container-footer-2 d-flex flex-sm-column ">
                        <div className="icons-container">
                            <a className="footer-icons" href="https://wa.link/huw2rx" target="_blank"><img
                                src={wapFooter} alt="" width="30" height="30" /></a>
                            <a className="footer-icons" href="https://www.instagram.com/controldeplagas.ecoambiental/?hl=es-la"
                                target="_blank"><img src={instaFooter} alt="" width="35" height="35" /></a>
                            <a className="footer-icons"
                                href="https://www.facebook.com/people/Eco-Ambiental-Desinfecciones/100085657702852/?paipv=0&eav=AfaEi6GSorZDn5xN8EEM9hHP1NSde_TfXa-nWokDo2X8Hqxf0cCBgsc6Peyqsp_tfng&_rdr"
                                target="_blank"><img src={facebookFooter} alt="" width="30" height="30" /></a>
                            <a className="footer-icons" href="mailto:ecoambientaldesinfecciones@gmail.com"><img
                                src={emailFooter} alt="" width="30" height="30" /></a>
                            <p className="telefono"><img src={telefonoFooter} alt="" width="40" height="40" />Tel.:
                                351
                                386-0091</p>
                        </div>
                    </div>
                </div>
                {/* <!--Estilo https://www.neoplagas.cl/
            Links a Sectores de la página || Contacto formulario--> */}
            </footer>
            <div className="container-footer-3 flex px-sm-6 ">
                <p className="pFooter fs-6 w-75  mb-0 text-start text-sm-center ">Sitio web diseñado y desarrollado por ADN Web Solutions</p>
            </div>
        </>
    )
}

export default Footer