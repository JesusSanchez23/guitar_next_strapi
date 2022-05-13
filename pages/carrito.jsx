import Layout from "../components/Layout";
import styles from "../styles/Carrito.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const Carrito = ({ carrito, actualizarCantidad, eliminarGuitarra }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculoTotal = carrito.reduce((total,guitarra) => (guitarra.precio * guitarra.cantidad) + total ,0);
    setTotal(calculoTotal);
  }, [carrito]);


  return (
    <Layout pagina="carrito">
      <h1 className="heading">Carrito de compras</h1>
      <main className={`contenedor ${styles.contenido}`}>
        <div className={styles.carrito}>
          <h3>Articulos</h3>
          {carrito.length === 0
            ? "No hay productos en el carrito"
            : carrito.map((guitarra) => (
                <div key={guitarra.id} className={styles.producto}>
                  <div>
                    <Image
                      src={guitarra.imagen}
                      width={250}
                      height={500}
                      layout="responsive"
                      alt={`guitarra ${guitarra.nombre}`}
                    />
                  </div>

                  <div>
                    <p className={styles.nombre}>{guitarra.nombre}</p>
                    <div className={styles.cantidad}>
                      <p>Cantidad:</p>
                      <select
                        className={styles.select}
                        onChange={(e) =>
                          actualizarCantidad({
                            cantidad: e.target.value,
                            id: guitarra.id,
                          })
                        }
                        value={guitarra.cantidad}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </div>
                    <p className={styles.precio}>
                      $ <span>{guitarra.precio}</span>
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal: $ {""}
                      <span>{guitarra.precio * guitarra.cantidad}</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className={styles.eliminar}
                    onClick={() => eliminarGuitarra(guitarra.id)}
                  >
                    X
                  </button>
                </div>
              ))}
        </div>
        <div className={styles.resumen}>
          {total > 0 ? (
            <>
              <h3>Resumen del Pedido</h3>
              <p className={styles.pagar}>Total a Pagar: <span>{total}</span></p>
            </>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
