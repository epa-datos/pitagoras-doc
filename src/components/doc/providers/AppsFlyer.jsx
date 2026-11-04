import { Space } from "antd";

const AppsFlyer = () => {
  return (
    <Space id="appsflyer" direction="vertical" style={{ width: "100%" }}>
      <h2>AppsFlyer</h2>
      <p>
        Hay dos opciones en el selector de plataformas:
      </p>
      <ul>
        <li>
          <strong>AppsFlyer (API)</strong>: consulta la API de AppsFlyer en el
          momento. La cuota de AppsFlyer es por cuenta y por reporte, así que
          evita repetir consultas pesadas el mismo día.
        </li>
        <li>
          <strong>AppsFlyer (BigQuery)</strong>: lee el export que AppsFlyer
          envía a BigQuery (tipos <i>inapps</i>, <i>inapps_retargeting</i> e{" "}
          <i>installs</i>). Solo aplica a clientes que tienen ese export.
        </li>
      </ul>
    </Space>
  );
};

export default AppsFlyer;
