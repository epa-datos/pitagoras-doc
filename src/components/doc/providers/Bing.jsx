import { Space } from "antd";
import LoomIframe from "../../helpers/LoomIframe";

const Bing = () => {
  return (
    <Space id="bing" direction="vertical" style={{ width: "100%" }}>
      <h2>Bing</h2>
      <p>
        Para descargar un reporte es necesario seleccionar un <i>nivel</i> y una{" "}
        <i>columna.</i>
      </p>

      <LoomIframe
        title="bing-example"
        src="https://www.loom.com/embed/0676054d20574761af9feeb39b7592db"
      />
      <p>
        Aquí puedes encontrar la información oficial con descripciones sobre:
        <ul>
          <li>
            <a href="https://learn.microsoft.com/en-us/advertising/guides/report-attributes-performance-statistics?view=bingads-13">
              Columnas
            </a>
          </li>
        </ul>
      </p>
      <h3>Filtros en Bing</h3>
      <ul>
        <li>
          Por el momento, no es posible aplicar filtros en este proveedor.
        </li>
      </ul>
    </Space>
  );
};

export default Bing;
