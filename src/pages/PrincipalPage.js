import { Link } from "react-router-dom";
import "../styles/Principal.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import FooterComponent from "../components/FooterComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Fade from "../components/CarruselComponent";

// IMAGEES

import car_icon_2 from "../img/car-icon-2.webp";
import car_icon_3 from "../img/car-icon-3.webp";
import car_icon_4 from "../img/car-icon-4.webp";
import car_icon_6 from "../img/car-icon-6.webp";
import wspicon from "../img/icon-wsp-chat.webp";
import mapaicon from "../img/mapa.webp";

function PrincipalPage(){

    const [nosotrosJson, setNosotrosJson] = useState();
    const [tarifasJson, setTarifasJson] = useState();

     const loadData = async() => {
        const resultTarifasJson = await axios("data/tarifas.json");
        const resultNosotrosJson = await axios("data/nosotros.json");
        if (resultNosotrosJson.data.lenght === 0 ){
            const dataNosotrosLocal = require("../data/nosotros.json");
            const dataTarifaLocal = require("../data/tarifas.json");
            setTarifasJson(dataTarifaLocal);
            setNosotrosJson(dataNosotrosLocal);
        }else {
            setNosotrosJson(resultNosotrosJson.data);
            setTarifasJson(resultTarifasJson.data);
        }        
    }

    useEffect(() => {
        loadData();
    },[]);

    function enviarEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_da19ng1','template_rwlo7s8',e.target,'h2mT44mAGmMOsBoHn')
            .then(res=>{
                Swal.fire({
                    icon: 'success',
                    title: 'Enviado',
                    text: 'El correo fue enviado',
                })
        })
    }
    return(tarifasJson ? (<div>
        <Fade/> 
        <section className = "section-nosotros" id = "nosotros">    
                <div className = "container-nosotros"> 
                    <div className = "nosotros-datos">
                        <h2 className = "nosotros-title">Nosotros</h2> 
                        <p className = "nosotros-text">
                            {nosotrosJson.contenido}
                        </p>                           
                    </div>
                    <div className = "nosotros-caracteristicas">
                        <div className = "caracteristica-detalle">
                            <span className = "detalle-span">{nosotrosJson.caracteristicas[0].titulo}</span>
                            <p>{nosotrosJson.caracteristicas[0].descripcion}</p>
                        </div>
                        <div className = "caracteristica-detalle">
                                <span className = "detalle-span">{nosotrosJson.caracteristicas[1].titulo} <br/></span>
                                <table className = "horario-table">
                                        <thead>
                                            <tr>
                                                <td className="horario-cabecera">Sede</td>
                                                <td className="horario-cabecera">Dia - Hora</td>                                                                                            
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="horario-table-primeraFila">
                                                <td className="horario-sede">Jicamarca</td>
                                                <td className="horario-dia-hora">
                                                    {nosotrosJson.caracteristicas[1].horarios[0].horario.map(hora=>(
                                                        <tr key={Math.floor(Math.random() * 100000)}>{hora.dia} - {hora.hora}</tr>
                                                    ))}                                                                                                        
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="horario-sede">Manchay</td>
                                                <td className="horario-dia-hora">
                                                    {nosotrosJson.caracteristicas[1].horarios[1].horario.map(hora=>(
                                                        <tr key={Math.floor(Math.random() * 100000)}>{hora.dia} - {hora.hora}</tr>
                                                    ))}                                                                                                        
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="horario-sede">Rimac</td>
                                                <td className="horario-dia-hora">
                                                    {nosotrosJson.caracteristicas[1].horarios[2].horario.map(hora=>(
                                                        <tr key={Math.floor(Math.random() * 100000)}>{hora.dia} - {hora.hora}</tr>
                                                    ))}                                                                                                        
                                                </td>
                                            </tr>
                                        </tbody>
                                </table>
                            </div>                        
                    </div>
                </div> 
        </section>
        <h2 className = "ubicanos-text" id="ubicaciones">{nosotrosJson.caracteristicas[2].titulo}</h2>
        <div className = "container-ubicaciones">
            {nosotrosJson.caracteristicas[2].ubicaciones.map(ubicacion => (
                <div className = "ubicacion" key = {Math.floor(Math.random() * 100000)}>
                    <img className = "img-ubicacion" src = {ubicacion.imagen} alt="img.jpg"/>
                    <span className = "ubicacion-span">{ubicacion.ubicacion}</span>
                    <span className = "ubicacion-resolucion">Autorizados con R.D. {ubicacion.resolucion}</span>
                    <a target = "_blank" rel = "noreferrer" href = {ubicacion.mapa} className = "link-mapa"><button className = "btn-verMapa"><FontAwesomeIcon className = "icon-ver-mapa" icon = {faLocationDot}/> Maps</button></a>
                </div> 
            ))}
        </div>
        <section className = "section-servicios" id = "servicios">
            <h1 className = "servicios-title">Servicios</h1>
            <div className = "container-servicios">
                <div className = "servicio">
                    <img src = {car_icon_2} alt = "particular.png"/>
                    <div className = "servicio-datos">
                        <span className = "servicio-span">Vehículo particular</span>
                         <ul className = "servicio-text">
                              <li> Tarjeta de propiedad</li> 
                              <li> SOAT vigente</li>
                              <li> Revisión ténica anterior (no querido si es la primera inspección)</li>
                              <li> Certificado anual vigente de GLP/GNV (si el vehículo usa este combustible)</li>
                        </ul>
                    </div>
                </div>
                <div className = "servicio">
                    <img src = {car_icon_3} alt = "taxi.png"/>
                    <div className = "servicio-datos">
                        <span className = "servicio-span">Servicio de Taxi</span>
                         <ul className = "servicio-text">
                             <li>Tarjeta de propiedad</li>
                             <li>SOAT o Afocat vigente</li>
                             <li>Revisión técnica anterior (no requerido si es la primera inspección)</li>
                             <li>Certificado anual vigente de GLP/GNV (si el vehículo usa este combustible)</li>
                             <li>Tarjeta Única de Circulación (TUC) o permiso para el servicio de taxi</li>
                        </ul>
                    </div>
                </div>
                <div className = "servicio">
                    <img src = {car_icon_4} alt = "mercancia.png"/>
                    <div className = "servicio-datos">
                        <span className = "servicio-span">Transporte de Mercancías en General</span>
                        <ul className = "servicio-text">
                             <li>Tarjeta de propiedad</li>
                             <li>SOAT vigente</li>
                             <li>Revisión técnica anterior (no requerido si es la primera inspección)</li>
                             <li>Tarjeta Única de Circulación (TUC) o permiso para el servicio de transporte de mercancías</li>
                        </ul>
                    </div>
                </div>
                <div className = "servicio">
                    <img src = {car_icon_6} alt = "mercanciapeligrosa.png"/>
                    <div className = "servicio-datos">
                        <span className = "servicio-span">Transporte de mercancía peligrosa</span>                            
                        <ul className = "servicio-text">
                             <li>Tarjeta de propiedad</li>
                             <li>SOAT o Afocat vigente</li>
                             <li>Revisión técnica anterior (no requerido si es la primera inspección)</li>
                             <li>Tarjeta Única de Circulación (TUC) o permiso para el servicio de transporte de mercancías peligrosas</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <div className = "wave-servicios">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#125067" fillOpacity="1" d="M0,160L480,64L960,192L1440,32L1440,320L960,320L480,320L0,320Z"></path></svg>
        </div>
        <section className = "section-tarifas" id = "tarifas">
            <h2 className = "tarifas-title">Tarifas</h2>
            <table className = "table">
                <thead>
                    <tr>
                        <th className = "cabecera-table">VEHÍCULOS</th>
                        <th className = "cabecera-table">TARIFA DESDE</th>
                    </tr>
                </thead>
                <tbody>
                    {tarifasJson.map(tarifa => (
                        <tr key = {Math.floor(Math.random() * 100000)}>
                            <td className = "vehiculo-columna">{tarifa.vehiculo}</td>
                            <td className = "precio-columna">{tarifa.precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
        <section className = "section-contactenos">
            <div className = "container-contactanos">
                <form onSubmit={enviarEmail} className= "contactanos-formulario">
                    <h2 className = "contactanos-title" id = "contactanos">. : Contáctanos : .</h2>
                    <p className = "contactanos-text">Bríndenos sus datos y nos pondremos en contacto con Ud.</p>
                    <div className = "contactanos-formulario-inputs">
                        <div className = "formulario-input">
                            <label className = "span-input">Nombre</label>
                            <input id = "nombre" name = "nombre" className = "input-item" required type = "text"></input>
                        </div>
                        <div className = "formulario-input">
                            <label className = "span-input">E-mail</label>
                            <input id = "email" name = "email" className = "input-item" required type = "email"></input>
                        </div>
                        <div className = "formulario-input">
                            <label className = "span-input">Teléfono</label>
                            <input id = "telefono" name = "telefono" className = "input-item" required type = "text"></input>
                        </div>
                        <div className = "formulario-input">
                            <label className = "span-input">Mensaje</label>
                            <textarea style={{"height":"100px"}} id = "mensaje" name = "mensaje" className = "input-item" required type = "text"></textarea>
                        </div>
                    </div>
                    <button className = "btn-enviar" type = "submit">Enviar</button>
                </form>
            </div>
            <div className = "wave-servicios">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#125067" fillOpacity="1" d="M0,160L480,64L960,192L1440,32L1440,320L960,320L480,320L0,320Z"></path></svg>
            </div>
        </section>
        <a className = "btn-map" href = "#ubicaciones"><img src = {mapaicon} alt = "mapa.webp"/></a>
        <Link className = "btn-wsp" target = "_blank"  rel = "noreferrer" to = "https://api.whatsapp.com/send?phone=933751867"><img src = {wspicon} alt = "wspicon.webp" /></Link>
        <FooterComponent /> 
    </div>) :
        (<div className = "loader"></div>
        ));
}

export default PrincipalPage;