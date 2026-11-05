import { Space } from "antd";
import "./_doc.scss";

const AboutPitagoras = () => {
  return (
    <Space id="about-pitagoras" direction="vertical">
      <h1>Pitágoras </h1>
      <p>
        Pitágoras es un add-on de Google Sheets que permite descargar
        información de las plataformas publicitarias y de analítica con las que
        trabaja EPA Digital, directo a una hoja y con refresco programado:{" "}
        <strong>
          Google Ads, Facebook, Bing, TikTok, Google Analytics 4, LinkedIn,
          DV360, Amazon Ads, Walmart Connect, Mercado Libre Ads, AppsFlyer, RTB
          House y Presupuestos.
        </strong>
      </p>

      <h3>Pitágoras vs EPA Add On</h3>
      <ul>
        <li>
          Para{" "}
          <strong>
            Google Ads, Facebook, Bing, TikTok, Google Analytics 4, LinkedIn,
            DV360, Walmart Connect, Mercado Libre Ads, AppsFlyer (API) y RTB
            House
          </strong>{" "}
          esta versión obtiene los datos directamente de las API's de los
          proveedores en el momento en el que son solicitados.
        </li>
        <li>
          Para <strong>Amazon Ads</strong>, <strong>AppsFlyer (BigQuery)</strong>{" "}
          y <strong>Presupuestos</strong> la información se lee de tablas que se
          cargan de forma periódica, por lo que no es en tiempo real.
        </li>
        <li>
          Para <strong>Analytics</strong> (Universal Analytics) la información
          ya no se actualiza porque dejó de funcionar en Julio 2023. Usa{" "}
          <strong>Google Analytics 4</strong>.
        </li>
      </ul>

      <h3>Solo lectura</h3>
      <p>
        Pitágoras <strong>solo lee</strong> información. No crea, edita, pausa
        ni borra campañas, presupuestos ni audiencias en las cuentas de los
        clientes. Más detalle en <a href="#access">Accesos y seguridad</a>.
      </p>
    </Space>
  );
};

export default AboutPitagoras;
