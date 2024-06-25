import { Space } from "antd";
import LoomIframe from "../../helpers/LoomIframe";

const Facebook = () => {
  return (
    <Space id="facebook" direction="vertical" style={{ width: "100%" }}>
      <h2>Facebook</h2>
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
      <p>
        Aquí puedes encontrar la información oficial con descripciones sobre:
        <ul>
          <li>
            <a href="https://developers.facebook.com/docs/marketing-api/reference/ads-insights/#fields">
              Campos
            </a>
          </li>
        </ul>
      </p>
      <h3>Filtros en Facebook</h3>
      <ul>
        <li>
          Únicamente es posible filtrar en base a los campos cuyos valores sean
          cadenas de texto.
        </li>
        <li>
          Los operadores disponibles son "Contains" y "Does not contain", mismos
          que verifican que la cadena de texto que se ingresa en el filtro se
          encuentra o no en los valores del campo seleccionado.
        </li>
        <li>
          Se pueden combinar filtros con los operadores lógicos AND y OR.{" "}
          <a href="#filters">Aquí se explica su funcionamiento a detalle.</a>
        </li>
      </ul>
    </Space>
  );
};

export default Facebook;
