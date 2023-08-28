import { Space } from "antd";
import LoomIframe from "../../helpers/LoomIframe";

const Adwords = () => {
  return (
    <Space id="adwords" direction="vertical" style={{ width: "100%" }}>
      <h2>Adwords</h2>
      <p>
        Para descargar un reporte es necesario seleccionar <i>recurso</i>,{" "}
        <i>atributos</i>, <i>segmentos</i> y <i>métricas</i>.
      </p>
      <LoomIframe
        title="adwords-example"
        src="https://www.loom.com/embed/5f5d5a7d26614a789feca9dedeeddf19"
      />
      <p>
        Aquí puedes encontrar la información oficial con descripciones sobre:
        <ul>
          <li>
            <a href="https://developers.google.com/google-ads/api/fields/v14/overview#list-of-all-resources">
              Recursos
            </a>
          </li>
          <li>
            <a href="https://developers.google.com/google-ads/api/fields/v14/accessible_bidding_strategy">
              Atributos
            </a>
          </li>
          <li>
            <a href="https://developers.google.com/google-ads/api/fields/v14/segments">
              Segmentos
            </a>
          </li>
          <li>
            <a href="https://developers.google.com/google-ads/api/fields/v14/metrics">
              Metricas
            </a>
          </li>
        </ul>
        <h3>Filtros en Adwords</h3>
        <ul>
          <li>
            Únicamente es posible filtrar en base a los atributos cuyos valores
            sean cadenas de texto.
          </li>
          <li>
            Los operadores disponibles son "Contains" y "Does not contain",
            mismos que verifican que la cadena de texto que se ingresa en el
            filtro se encuentra o no en los valores del atributo seleccionado.
          </li>
          <li>
            Se pueden combinar filtros con los operadores lógicos AND y OR.{" "}
            <a href="#filters">Aquí se explica su funcionamiento a detalle.</a>
          </li>
        </ul>
      </p>
    </Space>
  );
};

export default Adwords;
