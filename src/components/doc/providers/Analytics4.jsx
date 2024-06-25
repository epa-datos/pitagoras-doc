import { Space } from "antd";
import LoomIframe from "../../helpers/LoomIframe";

const Analytics4 = () => {
  return (
    <Space id="analytics4" direction="vertical" style={{ width: "100%" }}>
      <h2>Google Analytics 4</h2>
      <p>
        Para descargar un reporte es necesario seleccionar al menos una{" "}
        <a
          href="https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema"
          target="_blank"
          rel="noreferrer"
        >
          <i>dimensión</i> y una <i>métrica</i>.
        </a>
      </p>
      <LoomIframe
        title="analytics4-example"
        src="https://www.loom.com/embed/381c015f965d4a94ac03ad25bb42e0d7?sid=eed254ba-726a-4467-9b2d-57c60045d6aa"
      />

      <br />
      <p>
        <b>
          <i>Sobre filas (other)</i>
        </b>
        : En muchas ocasiones se pueden detectar celdas que vienen con un valor{" "}
        <b>(other)</b>, esto es un "error" que genera la API de Google Analytics
        4 cuando se hacen reportes de{" "}
        <a
          href="https://analyticscanvas.com/what-is-other-in-ga4/"
          rel="noreferrer"
          target="_blank"
        >
          <b>
            <i>alta carnidalidad</i>
          </b>
        </a>
        , la forma de eliminar estas filas es hacer reportes más simples, con
        menos métricas y dimensiones para evitar que valores se vayan a esa fila
        (other), también considera que puede que aún haciendo reportes
        sencillos, GA4 agrupe estos valores si son menos frecuentes que los
        demás valores posibles.{" "}
        <a
          href="https://support.google.com/analytics/answer/13331684?hl=en#:~:text=What%20causes%20the%20(other)%20row,labels%20them%20as%20(other)."
          rel="noreferrer"
          target="_blank"
        >
          <i>
            <b>Ver más</b>
          </i>
        </a>
      </p>
      <p>
        Aquí puedes encontrar la información oficial con descripciones sobre:
        <ul>
          <li>
            <a
              href="https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema"
              target="_blank"
              rel="noreferrer"
            >
              Dimensiones y Métricas
            </a>
          </li>
        </ul>
      </p>
      <h3>Filtros en Google Analytics 4</h3>
      <ul>
        <li>
          Únicamente es posible filtrar en base a las dimensiones cuyos valores
          sean cadenas de texto.
        </li>
        <li>
          Los operadores disponibles son "Contains" y "Does not contain", mismos
          que verifican que la cadena de texto que se ingresa en el filtro se
          encuentra o no en los valores de la dimensión seleccionada.
        </li>
        <li>
          Se pueden combinar filtros con los operadores lógicos AND y OR.{" "}
          <a href="#filters">Aquí se explica su funcionamiento a detalle.</a>
        </li>
      </ul>
    </Space>
  );
};

export default Analytics4;
