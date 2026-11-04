import { Space } from "antd";

const Amazon = () => {
  return (
    <Space id="amazon" direction="vertical" style={{ width: "100%" }}>
      <h2>Amazon Ads</h2>
      <p>
        Para descargar un reporte selecciona primero el <i>tipo de reporte</i>,
        después las <i>dimensiones</i> y las <i>métricas</i>.
      </p>
      <ul>
        <li>
          Los tipos de reporte son de <strong>Sponsored Ads</strong> (Products,
          Ad, AdGroup, SBCampaign, SDAd, Keyword, SearchTerm, Placement) o de{" "}
          <strong>DSP</strong> (DSPOrder, DSPLineitem, DSPCreative).
        </li>
        <li>
          Las cuentas de Sponsored Ads y de DSP son distintas: Pitágoras te
          muestra solo las cuentas que corresponden al tipo de reporte elegido.
        </li>
        <li>
          La información se lee de tablas que se cargan de forma periódica, no
          en tiempo real.
        </li>
      </ul>
    </Space>
  );
};

export default Amazon;
