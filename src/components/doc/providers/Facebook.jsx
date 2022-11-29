import { Space } from "antd";
import LoomIframe from "../../helpers/LoomIframe";

const Facebook = () => {
  return (
    <Space
      id="facebook-provider"
      direction="vertical"
      style={{ width: "100%" }}
    >
      <h3>Facebook</h3>
      <p>
        Para descargar un reporte es necesario seleccionar al menos un{" "}
        <i>campo.</i>
      </p>

      <LoomIframe
        title="facebook-example"
        src="https://www.loom.com/embed/c938e3040c62448a90f2e2943c76f326"
      />

      <p>
        Cómo se menciona en el video, existen algunos campos que la API de
        Facebook responde un error si son consultados:
      </p>
      <ul>
        <li>app_id</li>
        <li>is_conversion_id_modeled</li>
        <li>skan_campaign_id</li>
        <li>skan_conversion_id</li>
        <li>user_segment_key</li>
      </ul>
    </Space>
  );
};

export default Facebook;
