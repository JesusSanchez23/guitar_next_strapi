import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import Guitarra from "../components/Guitarra";
import styles from "../styles/Inicio.module.css";
import Curso from "../components/Curso";
import Entrada from "../components/Entrada";
import ListadoBlog from "../components/ListadoBlog";


export default function Home({guitarras,cursos,blogs}) {


  return (
    <div>
      <Layout pagina = "inicio"
      guitarra={guitarras[3]}>

      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.tienda}>
        {guitarras.map(guitarra => (
          <Guitarra key={guitarra.id} guitarra={guitarra}/>
        ))}
        </div>
      </main>
      <Curso cursos={cursos}/>

      <ListadoBlog blogs={blogs}/>

      </Layout>


    </div>
  );
}



export async function getServerSideProps(){

// Incorrecta

  // const url = `${process.env.API_URL}/guitarras?_sort=created_at:desc`;
  // const respuesta = await fetch(url);
  // const data = await respuesta.json();
  
  // const url = `${process.env.API_URL}/cursos?_sort=created_at:desc`;
  // const respuesta = await fetch(url);
  // const data = await respuesta.json();

  // const url = `${process.env.API_URL}/blogs?_sort=published_at:desc`;
  // const respuesta =await fetch(url);
  // const data = await respuesta.json();
  


  // correcta
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=created_at:desc`;
  const urlCursos = `${process.env.API_URL}/cursos?_sort=created_at:desc`;
  const urlBlogs = `${process.env.API_URL}/blogs?_limit=3&_sort=published_at:desc`;

  const [respuestaGuitarras, respuestaCursos, respuestaBlogs] = await Promise.all([fetch(urlGuitarras), fetch(urlCursos), fetch(urlBlogs)]);

  const [dataGuitarras, dataCursos,dataBlogs] = await Promise.all([respuestaGuitarras.json(), respuestaCursos.json(), respuestaBlogs.json()]);

  

  return {
    props:{
      guitarras : dataGuitarras,
      cursos : dataCursos,
      blogs : dataBlogs
    }
  }
}