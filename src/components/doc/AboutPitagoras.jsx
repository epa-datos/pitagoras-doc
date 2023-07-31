import { Space } from "antd";
import "./_doc.scss";

const AboutPitagoras = () => {
  return (
    <Space id="about-pitagoras" direction="vertical">
      <h1>Pitágoras </h1>
      <p>
        Pitágoras es un add-on de Google Spreadsheet, el cual permite descargar
        información de distintas plataformas cómo{" "}
        <strong>Adwords, Facebook, Analytics y Bing.</strong>
      </p>
      <p className="newInfo">
        <b>
          Actualizado: Ahora puedes descargar información de{" "}
          <a href="#tiktok">TikTok</a> y{" "}
          <a href="#analytics4">Google Analytics 4</a>
        </b>
      </p>

      <h3>Pitágoras vs EPA Admin Tool</h3>
      <ul>
        <li>
          Para <strong>Adwords, Facebook y Bing </strong>esta nueva versión
          obtiene los datos directamente de las API's en el momento en el que
          son solicitados.
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
