import '../styles/Navbar.css'
import { useEffect } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons"

//IMAGENES
import logoIVETEC from "../img/logoIVETEC.webp";

function NavbarComponent(){

    useEffect(() => {
        const menu = document.querySelector(".menu");
        const openMenuBtn = document.querySelector(".open-menu");
        const closeMenuBtn = document.querySelector(".close-menu");

        function toggleMenu(){
            menu.classList.toggle("menu_opened");
        }

        openMenuBtn.addEventListener("click", toggleMenu);
        closeMenuBtn.addEventListener("click", toggleMenu);

        const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

        // const observer = new IntersectionObserver((entries) => {
        //     entries.forEach(entry => {
        //         const id = entry.target.getAttribute("id");
        //         const menuLink = document.querySelector(`.menu a[href="#${id}"]`)

        //         if(entry.isIntersecting){
        //             menuLink.classList.add("selected");
        //         }else{
        //             menuLink.classList.remove("selected");
        //         }
        //     })
        // })

        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", function() {
                menu.classList.remove("menu_opened");
            })

            // const hash = menuLink.getAttribute("href");
            // const target = document.querySelector(hash);
            // if ( target ){
            //     observer.observe(target);
            // }
        })
    },[])

    return(
        <header className = "topheader">
            <nav className = "topnav">
                <img height = "80" width = "80" src = {logoIVETEC}  alt='logo' className = "logo"/>
                <button className = "open-menu" aria-label = "Abrir menú">
                    <FontAwesomeIcon className = "icon-open" icon = {faBars} />
                </button>
                <ul className = "menu">
                    <button className = "close-menu" aria-label = "Cerrar menú">
                        <FontAwesomeIcon className = "icon-close" icon = {faXmark} />
                    </button>
                    <li><a className = "menu-link" href = "#nosotros">Nosotros</a></li>
                    <li><a className = "menu-link" href = "#servicios">Servicios</a></li>
                    <li><a className = "menu-link" href = "#tarifas">Tarifas</a></li>
                    <li><a className = "menu-link" href = "#contactanos">Contáctanos</a></li>
                </ul>
            </nav>
        </header>
    );

};

export default NavbarComponent;