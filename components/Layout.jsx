import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pagina, guitarra }) => {
  const caitalicePage = pagina.charAt(0).toUpperCase() + pagina.slice(1);
  return (
    <div>
      <Head>
        <title>GuitarMX - {caitalicePage}</title>
        <meta name="description" content="Sitio web de venta de guitarras" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header guitarra={guitarra} />
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitarra: null
}

export default Layout;
