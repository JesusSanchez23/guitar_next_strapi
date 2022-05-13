import Image from "next/image";
import styles from "../styles/Guitarra.module.css";
import Link from "next/link";


const Guitarra = ({guitarra}) => {
    const {nombre, precio, imagen, descripcion, url} = guitarra;
    const image = imagen[0].url;

  return (
    <div className={`container ${styles.layout}`}>
        <div className={styles.guitarra}>
        <Image src={image} width={160} height={350} layout="responsive" alt={`imagen ${nombre}`} />
        </div>
        <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`}><a className={styles.btn}> Ver Producto </a></Link>
        </div>
    </div>
  )
}

export default Guitarra