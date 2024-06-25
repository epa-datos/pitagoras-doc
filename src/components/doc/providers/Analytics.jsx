import { Space } from "antd";
import LoomIframe from "../../helpers/LoomIframe";

const Analytics = () => {
  return (
    <Space id="analytics" direction="vertical" style={{ width: "100%" }}>
      <h2>Analytics</h2>
      <p>
        Para descargar un reporte es necesario seleccionar al menos una{" "}
        <i>dimensión</i> y una <i>métrica</i>.
      </p>
      <LoomIframe
        title="analytics-example"
        src="https://www.loom.com/embed/57d672a0cd1f4f48b8389fb119bcdfb8"
      />
      <p>
        Aquí puedes encontrar la información oficial con descripciones sobre:
        <ul>
          <li>
            <a
              href="https://ga-dev-tools.google/dimensions-metrics-explorer/"
              target="_blank"
              rel="noreferrer"
            >
              Dimensiones y Métricas
            </a>
          </li>
        </ul>
        <strong>
          Debido a la aparición de GA4, es posible que algunas métricas (ej.
          Bounce Rate) ya no estén disponibles en UA. Cuando se trata de
          métricas calculadas se pueden obtener las métricas necesarias para el
          cálculo y obtenerlas mediante una formula en Google Sheets.
        </strong>
      </p>
      <h3>Filtros en Universal Analytics</h3>
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
        <li>
          Está habilitada la agrupación, que te permite crear filtros con
          condiciones más específicas. Estos filtros son más complejos, ten
          cuidado con el planteamiento de tus reglas para que funcione
          exactamente como lo esperas.
        </li>
      </ul>
    </Space>
  );
};

export default Analytics;
