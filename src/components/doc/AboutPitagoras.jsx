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
          Adwords, Facebook, Analytics, Bing, TikTok, y Google Analytics 4.
        </strong>
      </p>
      <p className="newInfo">
        <b>
          Actualmente se está trabajando en agregar más plataformas como
          Appsflyer, Pinterest y LinkedIn.
        </b>
      </p>

      <h3>Pitágoras vs EPA Admin Tool</h3>
      <ul>
        <li>
          Para{" "}
          <strong>Adwords, Facebook, Bing, Tiktok y Google Analytics 4 </strong>
          esta nueva versión obtiene los datos directamente de las API's de los
          proveedores en el momento en el que son solicitados.
        </li>
        <li>
          Para <strong>Analytics</strong> la información se obtiene de la misma
          manera que el EPA Admin Tool; al finalizar un día los datos son
          consultados y almacenados en nuestra base de datos con la finalidad de
          proveer mayor exactitud en los datos solicitados.
        </li>
      </ul>
    </Space>
  );
};

export default AboutPitagoras;
