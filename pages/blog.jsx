
import Layout from "../components/Layout"
import Entrada from "../components/Entrada";
import styles from "../styles/Blog.module.css";

const Blog = ({blogs}) => {

  return (
    <Layout pagina="blog">
      <main className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.layout}>
          {blogs.map(blog=>(
            <Entrada blog={blog} key={blog.id} />
          ))}
        </div>
      </main>
    </Layout>
  )
}

// export async function getServerSideProps(){
//   const url = 'http://localhost:1337/blogs';
//   const respuesta =await fetch(url);
//   const data = await respuesta.json();
  
//   return {
//     props: {
//       blogs: data
//   }
// }
// }

export async function getStaticProps(){
  const url = `${process.env.API_URL}/blogs?_sort=published_at:desc`;
  const respuesta =await fetch(url);
  const data = await respuesta.json();
  
  return {
    props: {
      blogs: data
  }
}
}

export default Blog