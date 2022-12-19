import { Space } from "antd";
import LoomIframe from "../../helpers/LoomIframe";

const Tiktok = () => {
  return (
    <Space id="tiktok" direction="vertical" style={{ width: "100%" }}>
      <h2>TikTok</h2>
      <p>
        Para descargar un reporte es necesario seleccionar al menos un{" "}
        <i>nivel de datos</i>, al menos una <i>dimensión</i> y una{" "}
        <i>métrica.</i>
      </p>

      <LoomIframe
        title="tiktok-example"
        src="https://www.loom.com/embed/c347da7feef64fb2a2798dedaf3f7c66"
      />
      <p>
        Para descargar un reporte evitando errores al comunicarse con la API de
        TikTok es necesario tomar en cuenta las siguientes{" "}
        <strong>consideraciones:</strong>
      </p>
      <ol>
        <li>
          Al seleccionar un nivel de datos (cuenta, campaña, adgroup o anuncio)
          se necesita seleccionar la dimensión de ID correspondiente a ese
          nivel. <br />
          <i>
            Ejemplo: Si se selecciona el nivel de datos{" "}
            <strong>AUCTION_AD</strong> es necesario seleccionar la dimensión de{" "}
            <strong>ad_id</strong>.
          </i>
        </li>
        <li>
          Existen dimensiones de tipo ID (<strong>advertiser_id</strong>,{" "}
          <strong>campaign_id</strong>, <strong>adgroup_id</strong>,{" "}
          <strong>ad_id</strong>) y de tipo tiempo (
          <strong>stat_time_day</strong>, <strong>stat_time_hour</strong>), a lo
          máximo se pueden seleccionar una dimensión de cada tipo.
        </li>
        <li>
          La dimensión de <strong>country_code</strong> se puede usar siempre y
          cuando no se seleccione otra dimensión, es decir, no puede combinarse
          con más dimensiones.
        </li>
        <li>
          Si se selecciona la dimensión de <strong>stat_time_day</strong> el
          periodo de tiempo que se podrá consultar es de 30 días cómo máximo.
        </li>
        <li>
          Si se selecciona la dimensión de <strong>stat_time_hour</strong> el
          periodo de tiempo que se podrá consultar es de 1 día cómo máximo.
        </li>
        <li>
          Se debe seleccionar al menos una métrica del grupo{" "}
          <i>Basic Data Metrics</i>.
        </li>
        <li>
          No se puede consultar una métrica que ya se esta incluyendo como
          dimensión. Si lo que se requiere es agrupar la información, el dato en
          cuestión se selecciona como dimensión, de lo contrario, se selecciona
          como métrica.
        </li>
        <li>
          Al seleccionar métricas de identidad (<strong>campaign_name</strong>,{" "}
          <strong>adgroup_name</strong>, <strong>ad_name</strong>,{" "}
          <strong>advertiser_name</strong>) es necesario seleccionar un nivel de
          datos jerárquicamente igual o inferior a la métrica requerida.
          <br />
          <i>
            Ejemplo: Para obtener la métrica de <strong>ad_name</strong> es
            necesario seleccionar el nivel de datos <strong>AUCTION_AD</strong>.
          </i>
        </li>
      </ol>
    </Space>
  );
};

export default Tiktok;
