import { Space } from "antd";
import LoomIframe from "../helpers/LoomIframe";

export const Reports = () => {
  return (
    <Space id="reports" direction="vertical" style={{ width: "100%" }}>
      <h3>Creación de reportes</h3>
      <p>
        Para crear un reporte combinando la información de múltiples proveedores
        sigue los pasos que se muestran a continuación:
      </p>
      <LoomIframe
        title="reports"
        src="https://www.loom.com/embed/12ff66be3edf4a2290c3ce0046352bad"
      />
    </Space>
  );
};

export default Reports;
