import Image from 'next/image';
import {formatearFecha} from '../helpers';
import Link from 'next/link';
import styles from '../styles/Entrada.module.css';

const Entrada = ({blog}) => {
    const {titulo, contenido, id, resumen, imagen, createdAt,url} = blog; 
   const image = imagen.url;
    // const fecha = formatearFecha(createdAt);

  return (
    <article className={styles.article}>
        <Image priority="true" src={image} width={800} height={600} layout="responsive" alt={`Imagen blog ${titulo}`}/>
        <div className={styles.contenido}>
        <h2>{titulo}</h2>
        <p>{formatearFecha(createdAt)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/blog/${url}`}>
            <a className={styles.btn}>Mas Información</a></Link>
        </div>


    </article>
  )
}

export default Entrada