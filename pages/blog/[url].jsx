import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Blog.module.css";
import { formatearFecha } from "../../helpers";


const EntradaBlog = ({data}) => {

 
    const {titulo, resumen, contenido, published_at, imagen} = data[0];
    const image = imagen.url;


  return (
    <Layout pagina="blog">
      <main className={`contenedor ${styles.entrada}`}>
          <h1 className="heading">{titulo}</h1>
          <div className={styles.blog}>
          <div>
            <Image property="true" alt={`blog ${titulo}`} src={image} width={800} height={600} layout="responsive"/>
          </div>
          <div className={styles.contenido}>
            
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
          </div>
      </main>
    </Layout>
  )
}

// export async function getServerSideProps({query}){
// const {id} = query;

//   const url = `${process.env.API_URL}/blogs/${id}`;
// const respuesta = await fetch(url);
// const data = await respuesta.json();

// console.log(id);
//     return {
//         props: {
//             data
//         }
//     }
// }

export async function getStaticPaths(){
    const url = `${process.env.API_URL}/blogs`;
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    // console.log(data);

    const paths = data.map(blog=>({
        params:{
            url: blog.url
        }
    }))

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const {url} = params;
    
  
   
    const url_api = `${process.env.API_URL}/blogs?url=${url}`;
    const respuesta = await fetch(url_api);
    const data = await respuesta.json();

    
 
        return {
            props: {
                data
            }
        }
    }
    


export default EntradaBlog