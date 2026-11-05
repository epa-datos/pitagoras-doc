import { Space } from "antd";
import "./_doc.scss";

const HowItWorks = () => {
  return (
    <Space id="how-it-works" direction="vertical" style={{ width: "100%" }}>
      <h1>Cómo funciona</h1>
      <ol>
        <li>
          Abres Pitágoras en Google Sheets. Te identifica por tu correo.
        </li>
        <li>
          Pitágoras consulta <strong>Newton</strong> y te muestra solo los{" "}
          <strong>clientes y cuentas</strong> a los que tienes permiso.
        </li>
        <li>
          Armas tu consulta: cliente, plataforma, cuentas, dimensiones,
          métricas y fechas.
        </li>
        <li>
          Pitágoras pide la información a la plataforma con las credenciales de
          EPA y la escribe en tu hoja. Puedes guardar la consulta y programarla
          para que se refresque sola.
        </li>
        <li>
          Cada consulta queda registrada (quién, qué plataforma, cuántas filas)
          y existen límites de uso por persona para no saturar las cuotas de las
          plataformas.
        </li>
      </ol>

      <h2>¿Qué es Newton?</h2>
      <p>
        Newton es el panel de administración de EPA Digital. Ahí se dan de alta
        los <strong>clientes</strong>, sus <strong>cuentas de medios</strong>{" "}
        (plataforma, ID, moneda, zona horaria, vertical, unidad de negocio y el
        correo de EPA que tiene el acceso a esa cuenta) y los{" "}
        <strong>usuarios</strong> con su permiso por cliente.
      </p>
      <ul>
        <li>
          Si una cuenta <strong>no está en Newton, no aparece en Pitágoras</strong>
          , aunque exista en la plataforma.
        </li>
        <li>
          Si no tienes permiso sobre un cliente, no lo verás. Los permisos los
          da el administrador (ver <a href="#faqs">FAQs</a>).
        </li>
        <li>
          Las cuentas que se dan de alta para un cliente le aparecen a{" "}
          <strong>todas</strong> las personas con acceso a ese cliente.
        </li>
      </ul>
    </Space>
  );
};

export default HowItWorks;
