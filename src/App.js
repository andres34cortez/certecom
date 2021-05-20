import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import check_icon from "./assets/icons/check_icon.svg";
import cog_icon from "./assets/icons/cog_icon.svg";
import lock_icon from "./assets/icons/lock_icon.svg";
import tool_icon from "./assets/icons/tool_icon.svg";
import flecha_izquierda from "./assets/icons/flecha-izquierda.svg";
import flecha_correcta from "./assets/icons/flecha-correcta.svg";

/* import beneficios_sl1 from "./assets/images/beneficios_sl1.svg";
import building1_icon from "./assets/icons/building1_icon.svg";
import call_center_icon from "./assets/icons/call_center_icon.svg";
import office_icon from "./assets/icons/office_icon.svg";
import corp_building_icon from "./assets/icons/corp_building_icon.svg";
import hospital_icon from "./assets/icons/hospital_icon.svg";
import home_sl1 from "./assets/images/home_sl1.svg";

 */
import BaseMap from "./BaseMap";

import Header from "./Header";
import Footer from "./Footer";
import Productos_carousel from "./Productos_carousel";
import PageProductos from "./PageProductos";
import React, { useState, useEffect } from "react";
import axios from "axios";

import agroamerica from "./assets/images/agroamerica.png";
import platino from "./assets/images/platino.png";
import interlogic from "./assets/images/interlogic.png";
import marex from "./assets/images/marex.PNG";
import cinepolis from "./assets/images/cinepolis.png";
import magdalena from "./assets/images/magdalena.png";
import municipio from "./assets/images/municipio.jpg";
import banasa from "./assets/images/banasa.jpg";
import caesars from "./assets/images/caesars.jpg";
import anacafe from "./assets/images/anacafe.png";
import wendys from "./assets/images/wendys.png";

import iconos_01 from "./assets/icons/iconos-01.png";
import iconos_02 from "./assets/icons/iconos-02.png";
import iconos_03 from "./assets/icons/iconos-03.png";
import iconos_04 from "./assets/icons/iconos-04.png";
import iconos_05 from "./assets/icons/iconos-05.png";
import iconos_06 from "./assets/icons/iconos-06.png";

function App() {
  const [testimIndicator, settestimIndicator] = useState(0);
  const testim__slider = document.getElementById("testim__slider");
  const move_test_der = () => {
    console.log(testimIndicator);
    if (testimIndicator < 10) {
      settestimIndicator(testimIndicator + 1);

      console.log(testimIndicator);
    }
    if (testimIndicator > 1) {
      testim__slider.scrollLeft += 300;
    }
  };
  const move_test_izq = () => {
    console.log(testimIndicator);
    if (testimIndicator > 0) {
      settestimIndicator(testimIndicator - 1);

      console.log(testimIndicator);
    }
    if (testimIndicator > 1 && testimIndicator < 8) {
      console.log("aqui hay que reducir");
      testim__slider.scrollLeft -= 300;
    }
  };
  const sendMessage = () => {
    console.log("enviando mensaje");
  };

  function sendEmail(e) {
    e.preventDefault();
    console.log("hola");
    const allInit = document.getElementById("back__opacity");
    allInit.classList.remove("hide__el");
    const body = document.getElementById("div__alert");
    body.classList.remove("hide__el");
    const dataEmail = {
      emailfrom: "marketing@certecom.net",
      subject: "Nuevo mensaje desde la web de Certecom",
      emailto: document.getElementsByName("user_email")[0].value,
      nameto: document.getElementsByName("user_name")[0].value,
      numbercontact: document.getElementsByName("user_tel")[0].value,
      lang: "en_US",
      message: document.getElementsByName("user_message")[0].value,
    };
    const options = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
        "Content-Type": "application/json",
      },
    };
    axios
      .post(`https://certecom-mail.herokuapp.com/sendEmail`, dataEmail, options)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }
  const closeAlert = () => {
    const allInit = document.getElementById("back__opacity");
    allInit.classList.add("hide__el");
    // disableScroll.off();
  };
  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => (
          <>
            <div className="back__opacity hide__el" id="back__opacity">
              <div className="div__alert hide__el" id="div__alert">
                <h1 className="">Gracias</h1>
                <h3>Nos comunicaremos muy pronto contigo.</h3>
                <button className="button" onClick={closeAlert}>
                  Ok
                </button>
              </div>
            </div>
            <Header></Header>
            <main className="main">
              <section id="home">
                <div className="home__slider">
                  <div className="slide">
                    <div className="slide__img"></div>
                    {/* <img className="slide__img" src={home_sl1} /> */}
                    <div className="slide__text">
                      <span className="small__text">Tecnología</span>
                      <br />
                      sin límites
                    </div>
                  </div>
                  <div className="slide__indicator">
                    <span className="indicator__dot"></span>
                    <span className="indicator__dot"></span>
                    <span className="indicator__dot"></span>
                  </div>
                </div>
              </section>
              <section id="nosotros">
                <div className="nosotros__about">
                  <div className="title__label">
                    ACERCA DE <strong>NOSOTROS</strong>
                  </div>
                  <div className="nosotros__separator">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="nosotros__text">
                    Somos una empresa guatemalteca, fundada en el año 2013,
                    nuestra misión es optimizar y evolucionar los sistemas de
                    Telecomunicaciones de nuestros clientes, para un desempeño
                    óptimo que les permita reducir costos y desarrollar su
                    negocio con tecnologías modernas y de la mejor calidad.
                  </div>
                </div>
                <div className="nosotros__mision">
                  <div className="title__label">
                    <strong>VISIÓN</strong>
                  </div>
                  <div className="nosotros__separator2">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="nosotros__text">
                    Ser reconocidos como líderes en la implementación de
                    proyectos tecnológicos, siguiendo estándares
                    internacionales, establecer un cambio en el acceso a la
                    información específicamente en  la región rural de
                    Centroamérica.
                  </div>
                </div>
                <div className="nosotros__vision">
                  <div className="title__label">
                    <strong>VALORES</strong>
                  </div>
                  <div className="nosotros__separator">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="nosotros__text">
                    <ul>
                      <li>Honestidad</li>
                      <li>Confianza</li>
                      <li>Pasión</li>
                      <li>Integridad</li>
                      <li>Responsabilidad</li>
                    </ul>
                  </div>
                </div>
              </section>
              <section id="beneficios">
                <div className="beneficios__grid">
                  <div className="beneficios__slider">
                    <div className="slide sl1"></div>
                  </div>
                  <div className="beneficios__cards">
                    <div className="card">
                      <img src={check_icon} />
                      <p className="card__title">PERSONAL CALIFICADO</p>
                      <p className="card__text">
                        Nuestro personal cuenta con certificaciones
                        internacionales, las cuales nos hacen posible
                        desarrollar proyecto tecnológicos de una forma eficiente
                        y única.
                      </p>
                    </div>
                    <div className="card">
                      <img src={cog_icon} />
                      <p className="card__title">PRODUCTOS LÍDERES</p>
                      <p className="card__text">
                        Los equipos utilizados son marcas reconocidas
                        internacionalmente que, al integrarlas ofrecen proyectos
                        de calidad mundial.
                      </p>
                    </div>
                    <div className="card">
                      <img src={lock_icon} />
                      <p className="card__title">SEGURIDAD</p>
                      <p className="card__text">
                        En la actualidad, la confiabilidad de una empresa ha
                        adquirido un valor inestimable por lo que, la seguridad
                        es una de nuestras prioridades.
                      </p>
                    </div>
                    <div className="card">
                      <img src={tool_icon} />
                      <p className="card__title">SOPORTE</p>
                      <p className="card__text">
                        Los estándares utilizados en las instalaciones nos
                        permiten una cobertura de hasta 4 años de garantía por
                        desperfectos de fábrica.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section id="servicios">
                <div className="div__servicios">
                  <div className="servicios__icons">
                    <div className="icons__title">
                      <span className="small__text">NUESTROS</span>
                      <br />
                      SERVICIOS
                    </div>
                    <div className="icons">
                      <div className="icon__group">
                        <img src={iconos_01} />
                        {/* <p className="icon__text">Edificios de apartamentos</p> */}
                      </div>
                      <div className="icon__group">
                        <img src={iconos_02} />
                        {/* <p className="icon__text">Call Center</p> */}
                      </div>
                      <div className="icon__group">
                        <img src={iconos_03} />
                        {/* <p className="icon__text">Oficinas</p> */}
                      </div>
                      <div className="icon__group">
                        <img src={iconos_04} />
                        {/* <p className="icon__text">Edificios Corporativos</p> */}
                      </div>
                      <div className="icon__group">
                        <img src={iconos_05} />
                        {/* <p className="icon__text">Laboratorios y Hospitales</p> */}
                      </div>
                      <div className="icon__group">
                        <img src={iconos_06} />
                        {/* <p className="icon__text">Laboratorios y Hospitales</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="servicios__info">
                    <h4 className="info__title">
                      Estructura de Telecomunicaciones
                    </h4>
                    <p className="info__text">
                      Instalación de cableado horizontal con cables
                      <br />
                      Categoría 5, 5e, 6, 6A, 7.
                      <br />
                      Instalación de Fibra Óptica
                      <br />
                      Análisis y desempeño de Redes
                      <br />
                      Configuración de redes
                      <br />
                      Enlaces inalámbricos
                      <br />
                      Circuito cerrado de video vigilancia
                      <br />
                      Control de Acceso
                    </p>
                    <h4 className="info__title">Instalaciones Eléctricas</h4>
                    <p className="info__text">
                      Comerciales y Domésticas
                      <br />
                      Tierras Físicas
                    </p>
                  </div>
                </div>
              </section>
              {<Productos_carousel></Productos_carousel>}
              <section id="testimonios">
                <h2 className="section__title">CLIENTES</h2>
                <div className="slider__test">
                  <div
                    className={`izq ${testimIndicator == 0 ? "offT" : ""}`}
                    onClick={move_test_izq}
                  >
                    <img src={flecha_izquierda} />
                  </div>

                  <div className="testim__slider" id="testim__slider">
                    <div
                      className={`testm__card ${
                        testimIndicator == 0 ? "onT" : ""
                      }`}
                      id="0"
                    >
                      <img
                        className={`img__cliente ${
                          testimIndicator == 0 ? "onTImg" : ""
                        }`}
                        src={agroamerica}
                      />
                      {/* <p className="testm__frase">
                        Occaecat voluptate fugiat enim dolor dolore.
                      </p>
                      <div className="testm__info">
                        <img />
                        <p className="nombre">Stacey Johnston</p>
                      </div> */}
                    </div>
                    <div
                      className={`testm__card ${
                        testimIndicator == 1 ? "onT" : ""
                      }`}
                      id="0"
                    >
                      <img
                        className={`img__cliente ${
                          testimIndicator == 1 ? "onTImg" : ""
                        }`}
                        src={platino}
                      />
                    </div>
                    <div
                      className={`testm__card ${
                        testimIndicator == 2 ? "onT" : ""
                      }`}
                      id="0"
                    >
                      <img
                        className={`img__cliente ${
                          testimIndicator == 2 ? "onTImg" : ""
                        }`}
                        src={interlogic}
                      />
                    </div>
                    <div
                      className={`testm__card ${
                        testimIndicator == 3 ? "onT" : ""
                      }`}
                      id="0"
                    >
                      <img
                        className={`img__cliente ${
                          testimIndicator == 3 ? "onTImg" : ""
                        }`}
                        src={marex}
                      />
                    </div>
                    <div
                      className={`testm__card ${
                        testimIndicator == 4 ? "onT" : ""
                      }`}
                      id="0"
                    >
                      <img
                        className={`img__cliente ${
                          testimIndicator == 4 ? "onTImg" : ""
                        }`}
                        src={cinepolis}
                      />
                    </div>
                    <div
                      className={`testm__card ${
                        testimIndicator == 5 ? "onT" : ""
                      }`}
                      id="0"
                    >
                      <img
                        className={`img__cliente ${
                          testimIndicator == 5 ? "onTImg" : ""
                        }`}
                        src={magdalena}
                      />
                    </div>
                    <div
                      className={`testm__card ${
                        testimIndicator == 6 ? "onT" : ""
                      }`}
                      id="0"
                    >
                      <img
                        className={`img__cliente ${
                          testimIndicator == 6 ? "onTImg" : ""
                        }`}
                        src={municipio}
                      />
                    </div>
                    <div
                      className={`testm__card ${
                        testimIndicator == 7 ? "onT" : ""
                      }`}
                      id="0"
                    >
                      <img
                        className={`img__cliente ${
                          testimIndicator == 7 ? "onTImg" : ""
                        }`}
                        src={banasa}
                      />
                    </div>
                    <div
                      className={`testm__card ${
                        testimIndicator == 8 ? "onT" : ""
                      }`}
                      id="0"
                    >
                      <img
                        className={`img__cliente ${
                          testimIndicator == 8 ? "onTImg" : ""
                        }`}
                        src={caesars}
                      />
                    </div>
                    <div
                      className={`testm__card ${
                        testimIndicator == 9 ? "onT" : ""
                      }`}
                      id="0"
                    >
                      <img
                        className={`img__cliente ${
                          testimIndicator == 9 ? "onTImg" : ""
                        }`}
                        src={anacafe}
                      />
                    </div>
                    <div
                      className={`testm__card ${
                        testimIndicator == 10 ? "onT" : ""
                      }`}
                      id="0"
                    >
                      <img
                        className={`img__cliente ${
                          testimIndicator == 10 ? "onTImg" : ""
                        }`}
                        src={wendys}
                      />
                    </div>
                  </div>
                  <div
                    className={`der ${testimIndicator == 10 ? "offT" : ""}`}
                    id=""
                    onClick={move_test_der}
                  >
                    <img src={flecha_correcta} />
                  </div>
                </div>
              </section>
              <section id="contacto">
                <h2 className="section__title">CONTACTO</h2>
                <div className="contacto__separator">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="contacto__split_pannel">
                  <form className="contacto__form" onSubmit={sendEmail}>
                    <div className="input-1">
                      <input
                        className="input-form"
                        placeholder="Nombre"
                        name="user_name"
                      />
                    </div>
                    <div className="input-2">
                      <input
                        className="input-form"
                        placeholder="Teléfono"
                        name="user_tel"
                      />
                      <input
                        className="input-form"
                        placeholder="Correo"
                        name="user_email"
                      />
                    </div>
                    <div className="input-1">
                      <textarea
                        className="input-form"
                        placeholder="Comentarios"
                        rows="10"
                        name="user_message"
                      ></textarea>
                    </div>
                    <button type="submit">ENVIAR</button>
                  </form>
                  <div className="contact__location">
                    <BaseMap />
                  </div>
                </div>
              </section>
            </main>
            <Footer></Footer>
          </>
        )}
      />
      <Route path="/productos/:prodId" component={PageProductos} />
    </Router>
  );
}

export default App;
