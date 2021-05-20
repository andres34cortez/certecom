import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./PageProductos.css";
import checkIcon2 from "./assets/icons/check_icon2.svg";
import delivery from "./assets/icons/delivery.svg";
import Productos_carousel from "./Productos_carousel";

class PageProductos extends React.Component {
  constructor(props) {
    super(props);
    // console.dir(props);
    console.log(props);
    console.log(props.location.producto.bread_crum);
    this.state = {
      bread_crum: props.location.producto.bread_crum,
      img: props.location.producto.img,
      precio: props.location.producto.precio,
      unidad_precio: props.location.producto.unidad_precio,
      garantia: props.location.producto.garantia,
      descripcion: props.location.producto.descripcion,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header></Header>
        <main className="main__productos" id="main__productos">
          <div className="breadCrum">
            <p>
              Productos / <span>{this.state.bread_crum}</span>
            </p>
          </div>
          <section className="info__producto">
            <div className="producto__principal">
              <div className="head__producto">
                <h2>Nombre del producto</h2>
                <div className="producto__precio">
                  <p>Precio</p>
                  <h1>
                    {this.state.unidad_precio} {this.state.precio}
                  </h1>
                </div>
              </div>
              <div className="imagen__producto">
                <img src={this.state.img} />
              </div>
              <div className="informacion__producto">
                <h2>Información del producto</h2>
                <div className="info__adicional">
                  <div className="garantia">
                    <img src={checkIcon2} />
                    <div className="garantia__text">
                      <p>Garantía</p>
                      <span>{this.state.garantia}</span>
                    </div>
                  </div>
                  <div className="envio">
                    <img src={delivery} />
                    <span>Envio Gratis!</span>
                    <p>Capial, Mixco, Villa Nueva, Carretera al Salvador</p>
                  </div>
                </div>
                <div className="descripcion">{this.state.descripcion}</div>
              </div>
            </div>
          </section>
          <Productos_carousel></Productos_carousel>
        </main>
        <Footer></Footer>
      </>
    );
  }
}

export default PageProductos;
