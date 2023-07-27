import { Space } from "antd";
import LoomIframe from "../../helpers/LoomIframe";

const Analytics4 = () => {
  return (
    <Space id="analytics4" direction="vertical" style={{ width: "100%" }}>
      <h2>Google Analytics 4</h2>
      <p>
        Para descargar un reporte es necesario seleccionar al menos una{" "}
        <i>dimensión</i> y una <i>métrica</i>.
      </p>
      <LoomIframe
        title="analytics4-example"
        src="https://www.loom.com/embed/57d672a0cd1f4f48b8389fb119bcdfb8"
      />
      <p>
        <b>
          <i>Sobre filas (other)</i>
        </b>
        : En muchas ocasiones se pueden detectar celdas que vienen con un valor{" "}
        <b>(other)</b>, esto es un "error" que genera la API de Google Analytics
        4 cuando se hacen reportes de alta cardinalidad, la forma de eliminar
        estas filas es hacer reportes más simples, con menos métricas y
        dimensiones para evitar que valores se vayan a esa fila (other)
      </p>
    </Space>
  );
};

export default Analytics4;
