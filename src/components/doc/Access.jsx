import { Space, Table } from "antd";
import "./_doc.scss";

const columns = [
  { title: "Plataforma", dataIndex: "platform", key: "platform", width: 170 },
  { title: "A quién se da acceso", dataIndex: "who", key: "who" },
  { title: "Nivel que pedimos", dataIndex: "level", key: "level", width: 220 },
];

const data = [
  {
    key: "ads",
    platform: "Google Ads",
    who: "La cuenta debe estar dentro del MCC de EPA. Si no, acceso directo al usuario analytics@epa.digital.",
    level: "Estándar (no administrador)",
  },
  {
    key: "ga4",
    platform: "Google Analytics 4",
    who: "La propiedad, al usuario analytics@epa.digital o analytics2@epa.digital.",
    level: "Lector",
  },
  {
    key: "fb",
    platform: "Facebook",
    who: "La cuenta publicitaria debe estar en el Business Manager de EPA y asignada al usuario de sistema de EPA. Se necesitan ambas cosas.",
    level: "Solo lectura de anuncios",
  },
  {
    key: "ml",
    platform: "Mercado Libre Ads",
    who: "El anunciante debe dar acceso al usuario de analytics de EPA con Advertising habilitado. Un solo acceso cubre todos los anunciantes y productos (Product Ads, Brand Ads, Display) compartidos con ese usuario.",
    level: "Acceso a la cuenta de anuncios",
  },
  {
    key: "az",
    platform: "Amazon Ads",
    who: "El perfil del anunciante (Sponsored Ads) o la entidad DSP, con acceso para EPA.",
    level: "Lectura de reportes",
  },
  {
    key: "wmt",
    platform: "Walmart Connect",
    who: "Acceso de partner para EPA.",
    level: "Solo reportes",
  },
  {
    key: "rtb",
    platform: "RTB House",
    who: "El anunciante debe estar en la cuenta de RTB House de EPA.",
    level: "Lectura",
  },
  {
    key: "af",
    platform: "AppsFlyer",
    who: "La app debe ser visible para el token de EPA, o el cliente comparte el export a BigQuery.",
    level: "Lectura de reportes",
  },
  {
    key: "others",
    platform: "TikTok, Bing, LinkedIn, DV360",
    who: "La cuenta compartida con el usuario o el Business Center/MCC de EPA.",
    level: "Lector o de reportes",
  },
];

const Access = () => {
  return (
    <Space id="access" direction="vertical" style={{ width: "100%" }}>
      <h1>Accesos y seguridad</h1>

      <h2>Cómo deben ser los accesos</h2>
      <p>
        EPA se conecta a las plataformas con{" "}
        <strong>una credencial central por plataforma</strong> (el usuario de
        analytics, el MCC o el Business Manager de EPA). Las personas de EPA
        usan Pitágoras con su propio correo, pero{" "}
        <strong>no ven ni generan tokens</strong>. Lo único que se pide al
        cliente es dar acceso a ese usuario de EPA, solo a las cuentas que se
        van a reportar.
      </p>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        size="small"
        bordered
      />

      <h3>Si el cliente no quiere dar acceso a una cuenta central</h3>
      <ul>
        <li>
          No se necesita acceso a todo su MCC, Business Manager o portafolio:
          basta con invitar al usuario de EPA{" "}
          <strong>solo a las cuentas o propiedades concretas</strong>.
        </li>
        <li>
          Con acceso estándar o de lector, la plataforma no permite crear,
          editar ni pausar nada.
        </li>
        <li>
          El cliente puede quitar ese acceso en cualquier momento desde su
          propia consola.
        </li>
      </ul>

      <h2>Solo lectura</h2>
      <p>
        Pitágoras <strong>únicamente hace consultas</strong> de reportes y de
        los campos disponibles. No cambia pujas, presupuestos, estados,
        audiencias ni usuarios, y no sube conversiones. Esto se garantiza con:
      </p>
      <ol>
        <li>
          El código, que solo implementa consultas hacia las plataformas.
        </li>
        <li>
          El nivel de acceso que el cliente otorga (estándar o lector): la
          plataforma rechaza cualquier escritura.
        </li>
        <li>
          Permisos de solo lectura cuando la plataforma los ofrece (por ejemplo
          Google Analytics 4 y Facebook). En algunas plataformas (Google Ads,
          Microsoft Ads, Amazon, DV360) el permiso técnico que ofrece la
          plataforma es amplio, así que la garantía es el nivel de acceso que se
          otorga y el hecho de que solo se hacen consultas.
        </li>
      </ol>

      <h2>Impacto en las cuentas y en sus cuotas</h2>
      <ul>
        <li>
          Leer reportes <strong>no altera</strong> la entrega, el gasto ni la
          configuración de las campañas.
        </li>
        <li>
          Las cuotas de las APIs pertenecen a la aplicación o credencial que
          hace la consulta. EPA usa sus propias aplicaciones, por lo que si el
          cliente también se conecta a la API con las suyas,{" "}
          <strong>no se suman a las de EPA</strong>.
        </li>
        <li>
          Excepción: en <strong>AppsFlyer</strong> la cuota es por cuenta de
          AppsFlyer, así que se comparte con quien más consulte esa cuenta.
        </li>
      </ul>

      <h2>Seguridad</h2>
      <ul>
        <li>
          Las credenciales se guardan en el{" "}
          <strong>gestor de secretos de Google Cloud</strong> (Secret Manager):
          cifradas, con acceso restringido por permisos y con registro de
          cada lectura. No están en hojas, correos ni repositorios.
        </li>
        <li>
          Si cada persona generara sus propios tokens habría muchas
          credenciales fuera de control, con permisos distintos y sin forma de
          revocarlas cuando alguien deja EPA. Con una credencial central se
          rota y se revoca en un solo lugar.
        </li>
        <li>
          El acceso de cada persona a un cliente se controla en Newton, y quitar
          un permiso es inmediato.
        </li>
        <li>
          Cada consulta queda registrada (usuario, plataforma, cuentas, filas y
          fecha).
        </li>
      </ul>
    </Space>
  );
};

export default Access;
