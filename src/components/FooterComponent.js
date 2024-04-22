import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope, faPhone, faLocationDot} from "@fortawesome/free-solid-svg-icons"
import "../styles/Footer.css"
import logoIVETEC from "../img/logoIVETEC.webp";
import axios from "axios";
import { useEffect, useState } from "react";

function FooterComponent(){
    const [contactosJson, setContactosJson] = useState();

    const loadData = async() => {
       const resultContactosJson = await axios("data/contactos.json");
       if (resultContactosJson.data.length === 0 ){
           const dataContactosLocal = require("../data/contactos.json");
           setContactosJson(dataContactosLocal);
       }else {
           setContactosJson(resultContactosJson.data);
       }        
   }

   useEffect(() => {
       loadData();
   },[]);

     return(!contactosJson ? (
        <h2>Cargando..</h2>
    ) : (
        <footer>
            <div className = "container-footer">
                <img className = "logo-footer" src = {logoIVETEC} alt = "logo.webp" />
                <ul className = "list-icons">
                    <li className = "icon-item"><FontAwesomeIcon icon = {faEnvelope}/> Email <br/>
                        <a href={`mailto:${contactosJson.correo}`} className = "span-item">{contactosJson.correo}</a>
                    </li>
                    <li className = "icon-item"><FontAwesomeIcon icon = {faPhone}/> Telefonos <br/>
                        <ul className = "container-footer-subList">
                            {contactosJson.telefonos.map(item => (
                                <li key={Math.floor(Math.random() * 100000)}>
                                    <a href={`tel:+51${item.numero}`}>{item.numero}</a> <strong>({item.sede})</strong>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className = "icon-item"><FontAwesomeIcon icon = {faLocationDot}/> Direcciones <br/>
                        <ul className = "container-footer-subList">
                            {contactosJson.direcciones.map(item => (
                                <li className="container-footer-direcionItem" key={Math.floor(Math.random() * 100000)}>
                                    {item.ubicacion} <strong>({item.sede})</strong>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </footer>
        )       
    );
}

export default FooterComponent;