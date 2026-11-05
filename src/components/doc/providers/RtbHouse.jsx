import { Space } from "antd";

const RtbHouse = () => {
  return (
    <Space id="rtbhouse" direction="vertical" style={{ width: "100%" }}>
      <h2>RTB House</h2>
      <p>
        Para descargar un reporte selecciona el <i>tipo de reporte</i>, las{" "}
        <i>dimensiones</i> y las <i>métricas</i>.
      </p>
      <ul>
        <li>
          En RTB House la <strong>campaña</strong> se llama{" "}
          <strong>Subcampaign</strong>. Para ver el nombre de la campaña
          agrega la dimensión <i>Subcampaign</i> (o <i>Subcampaign Hash</i>{" "}
          para el ID).
        </li>
        <li>
          Tipos de reporte: <strong>Daily</strong> (día por subcampaña),{" "}
          <strong>Device</strong>, <strong>Country</strong>,{" "}
          <strong>Creative</strong>, <strong>Category</strong> y{" "}
          <strong>Conversions</strong>.
        </li>
        <li>
          El rango máximo es de 90 días; en Creative y Category es de 14 días.
        </li>
        <li>
          Las métricas de conversión (conversiones, valor, ROAS, CR, eCPA)
          requieren elegir una <i>Count convention</i>; sin métricas de
          conversión no se debe elegir.
        </li>
      </ul>
    </Space>
  );
};

export default RtbHouse;
