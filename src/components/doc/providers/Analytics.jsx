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
    </Space>
  );
};

export default Analytics;
