import Entrada from "./Entrada";
import styles from "../styles/ListadoBlogs.module.css";

const ListadoBlog = ({blogs}) => {
  return (
    <section className="contenedor">
      <h2 className="heading">Blog</h2>
        <div className={styles.layout}>
          {blogs.map(blog=>(
            <Entrada blog={blog} key={blog.id} />
          ))}
        </div>
      </section>
  )
}

export default ListadoBlog