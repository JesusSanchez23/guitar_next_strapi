import "../styles/normalize.css";
import "../styles/globals.css";
import {useState, useEffect} from 'react';

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);


  useEffect(()=>{
    const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? [];

    if(carritoLS.length !== 0){
      setCarrito(carritoLS);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('carrito', JSON.stringify(carrito));
  },[carrito])

  const agregarCarrito = (producto) => {

    if(carrito.some(articulo => articulo.id === producto.id)){
      const carritoActualizado = carrito.map(articulo=>{
        if(articulo.id === producto.id){
          return {
            ...articulo,
            cantidad: producto.cantidad
          }
        }
        return articulo
      }
      )
      setCarrito(carritoActualizado);
    }else{
      setCarrito([...carrito, producto]);
    }
  }

  const actualizarCantidad =  (datos) =>{
    const carritoActualizado = carrito.map(articulo=>{
      if(articulo.id === datos.id){
        return {
          ...articulo,
          cantidad: datos.cantidad
        }
      }
      return articulo
    });

    setCarrito(carritoActualizado);
  }

  const eliminarGuitarra = (id)=>{
    const confirmar = window.confirm('¿Estas seguro de eliminar?');

    if(confirmar){

      const actualizarCarrito = carrito.filter(guitarra=> guitarra.id !== id);
      setCarrito(actualizarCarrito);
    }
  }

  return <Component {...pageProps} carrito={carrito} agregarCarrito={agregarCarrito} actualizarCantidad={actualizarCantidad} eliminarGuitarra={eliminarGuitarra}/>;
}

export default MyApp;
