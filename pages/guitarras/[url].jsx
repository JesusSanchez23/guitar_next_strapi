import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Guitarra.module.css";
import {useState} from 'react';

const Producto = ({guitarra, agregarCarrito}) => {
const [cantidad, setCantidad] = useState(1);

  const {nombre,descripcion,precio,imagen,id} = guitarra;
  const image = imagen[0].url;

  const handleSubmit =(e)=>{
    e.preventDefault();


    if(cantidad < 1){
      alert('La cantidad debe ser mayor a 1');
      return;
    }
    // agregarCarrito

    const guitarraSeleccionada = {
      id,
      imagen: imagen[0].url,
      nombre,
      precio,
      cantidad
    }
    agregarCarrito(guitarraSeleccionada);
  }

  return (
    <Layout pagina={nombre}>
      <main className="container">
      <div className={`container ${styles.layout}`}>
        <div className={styles.guitarra}>
        <Image src={image} width={160} height={350} layout="responsive" alt={`imagen ${nombre}`} />
        </div>
        <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>

        <form className={styles.formulario} onSubmit={handleSubmit}>
          <label htmlFor="cantidad">cantidad:</label>

          <select  onChange={e=>setCantidad(parseInt(e.target.value))} value={cantidad}>

            <option value="0">--Seleccione--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>

          <input type="submit" value="Agregar al carrito" />
        </form>
        </div>
    </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps({query:{url}}){

  // const url = `${process.env.API_URL}/guitarras/${req.params.url}`;
  const url_api = `${process.env.API_URL}/guitarras?url=${url}`;
  const respuesta = await fetch(url_api);
  const data = await respuesta.json();


  return {
    props:{
      guitarra:data[0]
    }
  }
}

export default Producto