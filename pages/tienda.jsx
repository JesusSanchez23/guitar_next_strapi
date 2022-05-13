import Layout from "../components/Layout"
import Guitarra from "../components/Guitarra";
import styles from "../styles/Guitarras.module.css";

const Tienda = ({guitarras}) => {
  
  return (

    <Layout pagina="Tienda">
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.tienda}>
        {guitarras.map(guitarra => (
          <Guitarra key={guitarra.id} guitarra={guitarra}/>
        ))}
        </div>
      </main>
    </Layout>
  )
}

export default Tienda


export async function getServerSideProps(){
  const url = `${process.env.API_URL}/guitarras?_sort=created_at:desc`;
  const respuesta = await fetch(url);
  const data = await respuesta.json();
  

  return {
    props:{
      guitarras : data
    }
  }
}