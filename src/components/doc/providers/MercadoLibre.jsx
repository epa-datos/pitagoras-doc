import { Space } from "antd";

const MercadoLibre = () => {
  return (
    <Space id="mercadolibre" direction="vertical" style={{ width: "100%" }}>
      <h2>Mercado Libre Ads</h2>
      <p>
        Mercado Libre Ads tiene tres productos: <strong>Product Ads</strong>,{" "}
        <strong>Brand Ads</strong> y <strong>Display</strong>. Para descargar un
        reporte selecciona el <i>tipo de reporte</i>, las <i>dimensiones</i> y
        las <i>métricas</i>.
      </p>
      <ul>
        <li>
          Cada anunciante se da de alta en Newton <strong>una vez por
          producto</strong>. En el selector verás nombres como{" "}
          <i>Kotex - Product Ads</i> y <i>Kotex - Display</i>; elige la cuenta
          del mismo producto que el tipo de reporte.
        </li>
        <li>El rango de fechas de cada consulta es de máximo 90 días.</li>
        <li>
          Mercado Libre actualiza sus datos diariamente a las 10:00 (hora
          GMT-3). Antes de esa hora el día anterior puede estar incompleto.
        </li>
        <li>
          Un solo acceso del usuario de analytics de EPA cubre todos los
          anunciantes que el cliente haya compartido con ese usuario.
        </li>
      </ul>
    </Space>
  );
};

export default MercadoLibre;
