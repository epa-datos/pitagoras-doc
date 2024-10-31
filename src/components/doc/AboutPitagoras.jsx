import { Space } from "antd";
import "./_doc.scss";

const AboutPitagoras = () => {
  return (
    <Space id="about-pitagoras" direction="vertical">
      <h1>Pitágoras </h1>
      <p>
        Pitágoras es un add-on de Google Sheets que permite descargar
        información de distintas plataformas cómo{" "}
        <strong>
          Adwords, Facebook, Analytics*, Bing, TikTok, Google Analytics 4,
          LinkedIn y DV360.
        </strong>
      </p>
      <p className="newInfo">
        <b>
          Actualmente se está trabajando en agregar más plataformas como
          Appsflyer y Pinterest.
        </b>
      </p>

      <h3>Pitágoras vs EPA Add On</h3>
      <ul>
        <li>
          Para{" "}
          <strong>
            Adwords, Facebook, Bing, Tiktok, Google Analytics 4, LinkedIn y
            DV360{" "}
          </strong>
          esta nueva versión obtiene los datos directamente de las API's de los
          proveedores en el momento en el que son solicitados.
        </li>
        <li>
          Para <strong>Analytics</strong> la información ya no se actualiza ya que dejó de funcionar Universal Analytics en Julio 2023
        </li>
      </ul>
    </Space>
  );
};

export default AboutPitagoras;
