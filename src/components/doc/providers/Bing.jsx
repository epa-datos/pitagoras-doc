import { Space } from "antd";
import LoomIframe from "../../helpers/LoomIframe";

const Bing = () => {
  return (
    <Space id="bing-provider" direction="vertical" style={{ width: "100%" }}>
      <h3>Bing</h3>
      <p>
        Para descargar un reporte es necesario seleccionar un <i>nivel</i> y una{" "}
        <i>columna.</i>
      </p>

      <LoomIframe
        title="bing-example"
        src="https://www.loom.com/embed/0676054d20574761af9feeb39b7592db"
      />
    </Space>
  );
};

export default Bing;
