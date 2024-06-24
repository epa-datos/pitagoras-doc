import { Space } from "antd";

const Dv360 = () => {
  return (
    <Space id="dv360" direction="vertical" style={{ width: "100%" }}>
      <h2>Google Display & Video 360</h2>
      <p>
        Para descargar un reporte es necesario seleccionar una <i>agrupación</i>{" "}
        y una <i>métrica.</i>
      </p>

      <p>
        Aquí puedes encontrar la información oficial con descripciones sobre:
        <ul>
          <li>
            <a
              href="https://developers.google.com/bid-manager/reference/rest/v2/filters-metrics#filters"
              target="_blank"
              rel="noreferrer"
            >
              Agrupaciones(llamados aquí como filtros o dimensiones)
            </a>
          </li>
        </ul>
        y
        <ul>
          <li>
            <a
              href="https://developers.google.com/bid-manager/reference/rest/v2/filters-metrics#metrics"
              target="_blank"
              rel="noreferrer"
            >
              Métricas
            </a>
          </li>
        </ul>
      </p>
      <h3>Filtros en DV360</h3>
      <ul>
        <li>
          Por el momento, no es posible aplicar filtros en este proveedor.
        </li>
      </ul>
    </Space>
  );
};

export default Dv360;
