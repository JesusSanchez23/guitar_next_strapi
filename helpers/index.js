export const formatearFecha = (date) => {
  const fechaNueva = new Date(date);
  const opt = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return fechaNueva.toLocaleDateString("es-ES", opt);
};
