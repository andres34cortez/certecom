import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import flecha_izquierda from "./assets/icons/flecha-izquierda.svg";
import flecha_correcta from "./assets/icons/flecha-correcta.svg";

/* import bocinas from "./assets/images/bocinas.svg";
import cables from "./assets/images/cables.svg";
import disco from "./assets/images/disco.svg";
import mochila from "./assets/images/mochila.svg";
import proyector from "./assets/images/proyector.svg";
import camara from "./assets/images/camara.svg"; */

import a from "./assets/carrusel/1.jpeg";
import b from "./assets/carrusel/2.jpeg";
import c from "./assets/carrusel/3.jpeg";
import d from "./assets/carrusel/4.jpeg";
import e from "./assets/carrusel/5.jpeg";
import f from "./assets/carrusel/6.jpeg";
import g from "./assets/carrusel/7.jpeg";
import h from "./assets/carrusel/8.jpeg";
import i from "./assets/carrusel/9.jpeg";
import j from "./assets/carrusel/10.jpeg";
import k from "./assets/carrusel/11.jpeg";
import l from "./assets/carrusel/12.jpeg";
import m from "./assets/carrusel/13.jpeg";
import n from "./assets/carrusel/14.jpeg";

/* function Productos_carousel() {
  const [productIndicator, setproductIndicator] = useState(0);
  const productos__slider = document.getElementById("productos__slider");
  const move_slider_der = () => {
    if (productIndicator < 5) {
      setproductIndicator(productIndicator + 1);

      console.log(productIndicator);
    }
    if (productIndicator > 1) {
      productos__slider.scrollLeft += 400;
    }
  };
  const move_slider_izq = () => {
    if (productIndicator > 0) {
      setproductIndicator(productIndicator - 1);

      console.log(productIndicator);
    }
    if (productIndicator > 1) {
      productos__slider.scrollLeft -= 400;
    }
  };
  return (
    <section id="productos">
      <h2 className="section__title">PRODUCTOS</h2>
      <div className="slider__prod">
        <div
          className={`izq ${productIndicator == 0 ? "off" : ""}`}
          id=""
          onClick={move_slider_izq}
        >
          <img src={flecha_izquierda} />
        </div>

        <div className="productos__slider" id="productos__slider">
          <Link
            to={{
              pathname: "/productos/bocinas",
              id: "bocinas",
              producto: {
                bread_crum: "BOCINAS",
                img: bocinas,
                precio: "5000",
                unidad_precio: "Q",
                garantia: "10 años",
                descripcion:
                  "Esta cámara es resistente a la intemperie y cuenta con Obturador electrónico para diferentes entornos de vigilancia, ofrece mayor confianza en lugares de poca seguridad.  puede ser instalada en techo para mejor ángulo de visión",
              },
            }}
            // to="/productos/bocinas"
          >
            <div
              className={`producto__card ${productIndicator == 0 ? "on" : ""}`}
              id="0"
            >
              <img src={bocinas} />
              <p className="producto__text">BOCINAS</p>
            </div>
          </Link>
          <Link
            to={{
              pathname: "/productos/cables",
              id: "cables",
              producto: {
                bread_crum: "CABLES",
                img: cables,
                precio: "5000",
                unidad_precio: "Q",
                garantia: "10 años",
                descripcion:
                  "Esta cámara es resistente a la intemperie y cuenta con Obturador electrónico para diferentes entornos de vigilancia, ofrece mayor confianza en lugares de poca seguridad.  puede ser instalada en techo para mejor ángulo de visión",
              },
            }}
          >
            <div
              className={`producto__card ${productIndicator == 1 ? "on" : ""}`}
              id="1"
            >
              <img src={cables} />
              <p className="producto__text">CABLES</p>
            </div>
          </Link>
          <Link
            to={{
              pathname: "/productos/disco",
              id: "disco",
              producto: {
                bread_crum: "DISCOS DUROS",
                img: disco,
                precio: "5000",
                unidad_precio: "Q",
                garantia: "10 años",
                descripcion:
                  "Esta cámara es resistente a la intemperie y cuenta con Obturador electrónico para diferentes entornos de vigilancia, ofrece mayor confianza en lugares de poca seguridad.  puede ser instalada en techo para mejor ángulo de visión",
              },
            }}
          >
            <div
              className={`producto__card ${productIndicator == 2 ? "on" : ""}`}
              id="2"
            >
              <img src={disco} />
              <p className="producto__text">DISCOS DUROS</p>
            </div>
          </Link>
          <Link
            to={{
              pathname: "/productos/mochila",
              id: "mochila",
              producto: {
                bread_crum: "MOCHILA",
                img: mochila,
                precio: "5000",
                unidad_precio: "Q",
                garantia: "10 años",
                descripcion:
                  "Esta cámara es resistente a la intemperie y cuenta con Obturador electrónico para diferentes entornos de vigilancia, ofrece mayor confianza en lugares de poca seguridad.  puede ser instalada en techo para mejor ángulo de visión",
              },
            }}
          >
            <div
              className={`producto__card ${productIndicator == 3 ? "on" : ""}`}
              id="3"
            >
              <img src={mochila} />
              <p className="producto__text">MOCHILA</p>
            </div>
          </Link>
          <Link
            to={{
              pathname: "/productos/proyectores",
              id: "proyectores",
              producto: {
                bread_crum: "PROYECTORES",
                img: proyector,
                precio: "5000",
                unidad_precio: "Q",
                garantia: "10 años",
                descripcion:
                  "Esta cámara es resistente a la intemperie y cuenta con Obturador electrónico para diferentes entornos de vigilancia, ofrece mayor confianza en lugares de poca seguridad.  puede ser instalada en techo para mejor ángulo de visión",
              },
            }}
          >
            <div
              className={`producto__card ${productIndicator == 4 ? "on" : ""}`}
              id="4"
            >
              <img src={proyector} />
              <p className="producto__text">PROYECTORES</p>
            </div>
          </Link>
          <Link
            to={{
              pathname: "/productos/camaras",
              id: "camaras",
              producto: {
                bread_crum: "CÁMARAS",
                img: camara,
                precio: "11,000.00",
                unidad_precio: "Q.",
                garantia: "10 años",
                descripcion:
                  "Esta cámara es resistente a la intemperie y cuenta con Obturador electrónico para diferentes entornos de vigilancia, ofrece mayor confianza en lugares de poca seguridad.  puede ser instalada en techo para mejor ángulo de visión",
              },
            }}
          >
            <div
              className={`producto__card ${productIndicator == 5 ? "on" : ""}`}
              id="5"
            >
              <img src={camara} />
              <p className="producto__text">CÁMARAS</p>
            </div>
          </Link>
        </div>
        <div
          className={`der ${productIndicator == 5 ? "off" : ""}`}
          id=""
          onClick={move_slider_der}
        >
          <img src={flecha_correcta} />
        </div>
      </div>
    </section>
  );
} */


function Productos_carousel() {
  const [productIndicator, setproductIndicator] = useState(0);
  const productos__slider = document.getElementById("productos__slider");
  const move_slider_der = () => {
    if (productIndicator < 5) {
      setproductIndicator(productIndicator + 1);

      console.log(productIndicator);
    }
    if (productIndicator > 1) {
      productos__slider.scrollLeft += 400;
    }
  };
  const move_slider_izq = () => {
    if (productIndicator > 0) {
      setproductIndicator(productIndicator - 1);

      console.log(productIndicator);
    }
    if (productIndicator > 1) {
      productos__slider.scrollLeft -= 400;
    }
  };
  return (
    <section id="productos">
      <h2 className="section__title">PRODUCTOS</h2>
      <div className="slider__prod">
        <div
          className={`izq ${productIndicator == 0 ? "off" : ""}`}
          id=""
          onClick={move_slider_izq}
        >
          <img src={flecha_izquierda} />
        </div>

        <div className="productos__slider" id="productos__slider">
          <Link
            to={{
              pathname: "/productos/bocinas",
              id: "bocinas",
              producto: {
                bread_crum: "BOCINAS",
                img: bocinas,
                precio: "5000",
                unidad_precio: "Q",
                garantia: "10 años",
                descripcion:
                  "Esta cámara es resistente a la intemperie y cuenta con Obturador electrónico para diferentes entornos de vigilancia, ofrece mayor confianza en lugares de poca seguridad.  puede ser instalada en techo para mejor ángulo de visión",
              },
            }}
            // to="/productos/bocinas"
          >
            <div
              className={`producto__card ${productIndicator == 0 ? "on" : ""}`}
              id="0"
            >
              <img src={bocinas} />
              <p className="producto__text">BOCINAS</p>
            </div>
          </Link>
          <Link
            to={{
              pathname: "/productos/cables",
              id: "cables",
              producto: {
                bread_crum: "CABLES",
                img: cables,
                precio: "5000",
                unidad_precio: "Q",
                garantia: "10 años",
                descripcion:
                  "Esta cámara es resistente a la intemperie y cuenta con Obturador electrónico para diferentes entornos de vigilancia, ofrece mayor confianza en lugares de poca seguridad.  puede ser instalada en techo para mejor ángulo de visión",
              },
            }}
          >
            <div
              className={`producto__card ${productIndicator == 1 ? "on" : ""}`}
              id="1"
            >
              <img src={cables} />
              <p className="producto__text">CABLES</p>
            </div>
          </Link>
          <Link
            to={{
              pathname: "/productos/disco",
              id: "disco",
              producto: {
                bread_crum: "DISCOS DUROS",
                img: disco,
                precio: "5000",
                unidad_precio: "Q",
                garantia: "10 años",
                descripcion:
                  "Esta cámara es resistente a la intemperie y cuenta con Obturador electrónico para diferentes entornos de vigilancia, ofrece mayor confianza en lugares de poca seguridad.  puede ser instalada en techo para mejor ángulo de visión",
              },
            }}
          >
            <div
              className={`producto__card ${productIndicator == 2 ? "on" : ""}`}
              id="2"
            >
              <img src={disco} />
              <p className="producto__text">DISCOS DUROS</p>
            </div>
          </Link>
          <Link
            to={{
              pathname: "/productos/mochila",
              id: "mochila",
              producto: {
                bread_crum: "MOCHILA",
                img: mochila,
                precio: "5000",
                unidad_precio: "Q",
                garantia: "10 años",
                descripcion:
                  "Esta cámara es resistente a la intemperie y cuenta con Obturador electrónico para diferentes entornos de vigilancia, ofrece mayor confianza en lugares de poca seguridad.  puede ser instalada en techo para mejor ángulo de visión",
              },
            }}
          >
            <div
              className={`producto__card ${productIndicator == 3 ? "on" : ""}`}
              id="3"
            >
              <img src={mochila} />
              <p className="producto__text">MOCHILA</p>
            </div>
          </Link>
          <Link
            to={{
              pathname: "/productos/proyectores",
              id: "proyectores",
              producto: {
                bread_crum: "PROYECTORES",
                img: proyector,
                precio: "5000",
                unidad_precio: "Q",
                garantia: "10 años",
                descripcion:
                  "Esta cámara es resistente a la intemperie y cuenta con Obturador electrónico para diferentes entornos de vigilancia, ofrece mayor confianza en lugares de poca seguridad.  puede ser instalada en techo para mejor ángulo de visión",
              },
            }}
          >
            <div
              className={`producto__card ${productIndicator == 4 ? "on" : ""}`}
              id="4"
            >
              <img src={proyector} />
              <p className="producto__text">PROYECTORES</p>
            </div>
          </Link>
          <Link
            to={{
              pathname: "/productos/camaras",
              id: "camaras",
              producto: {
                bread_crum: "CÁMARAS",
                img: camara,
                precio: "11,000.00",
                unidad_precio: "Q.",
                garantia: "10 años",
                descripcion:
                  "Esta cámara es resistente a la intemperie y cuenta con Obturador electrónico para diferentes entornos de vigilancia, ofrece mayor confianza en lugares de poca seguridad.  puede ser instalada en techo para mejor ángulo de visión",
              },
            }}
          >
            <div
              className={`producto__card ${productIndicator == 5 ? "on" : ""}`}
              id="5"
            >
              <img src={camara} />
              <p className="producto__text">CÁMARAS</p>
            </div>
          </Link>
        </div>
        <div
          className={`der ${productIndicator == 5 ? "off" : ""}`}
          id=""
          onClick={move_slider_der}
        >
          <img src={flecha_correcta} />
        </div>
      </div>
    </section>
  );
}

export default Productos_carousel;
