import { Space } from "antd";
import LoomIframe from "../../helpers/LoomIframe";

const Adwords = () => {
  return (
    <Space id="adwords-provider" direction="vertical" style={{ width: "100%" }}>
      <h3>Adwords</h3>
      <p>
        Para descargar un reporte es necesario seleccionar <i>recurso</i>,{" "}
        <i>atributos</i>, <i>segmentos</i> y <i>métricas</i>.
      </p>
      <LoomIframe
        title="adwords-example"
        src="https://www.loom.com/embed/5f5d5a7d26614a789feca9dedeeddf19"
      />
    </Space>
  );
};

export default Adwords;
