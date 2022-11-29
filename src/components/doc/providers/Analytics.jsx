import { Space } from "antd";

const Analytics = () => {
  return (
    <Space id="analytics-provider" direction="vertical">
      <h2>Analytics</h2>
      <p>
        Para descargar un reporte es necesario seleccionar al menos una{" "}
        <i>dimensión</i> y una <i>métrica</i>.
      </p>
    </Space>
  );
};

export default Analytics;
