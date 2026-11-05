import { Space } from "antd";

const Walmart = () => {
  return (
    <Space id="walmart" direction="vertical" style={{ width: "100%" }}>
      <h2>Walmart Connect</h2>
      <p>
        Para descargar un reporte selecciona el <i>tipo de reporte</i>, las{" "}
        <i>dimensiones</i> y las <i>métricas</i>. La información se consulta
        directamente a Walmart Connect en el momento en que la solicitas.
      </p>
    </Space>
  );
};

export default Walmart;
