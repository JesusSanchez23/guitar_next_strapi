import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/NoEncontrado.module.css";

const NoEntrontrado = () => {
  return (
   
        <main className={styles.contenedor}>
            <h1 className="heading">No encontrado</h1>

            <Link href="/">
                <a className={styles.btn}>
                Volver a Inicio
                </a>
                </Link>
        </main>
 
  )
}

export default NoEntrontrado;