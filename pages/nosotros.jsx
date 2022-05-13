import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
   <Layout pagina="nosotros">
       <main className="contenedor">
         <h2 className="heading">Nosotros</h2>
         <div className={styles.contenido}>
         <div className="imagen">
           <Image src="/img/nosotros.jpg" width={600} height={450} layout="responsive" alt="Imagen sobre nosotros"/>
         </div>
         <div className={styles.texto}>
           <p className="texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis omnis odit tenetur, harum delectus quidem sit nostrum numquam inventore error modi incidunt explicabo, impedit deleniti iure minima facere. Vero distinctio enim culpa nihil modi fugit nulla nostrum necessitatibus at facere.</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque reprehenderit expedita delectus natus ab dolore obcaecati non necessitatibus nihil voluptatum.</p>
         </div>
         </div>
       </main>
   </Layout>
  )
}

export default Nosotros