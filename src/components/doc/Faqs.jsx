import { Space } from "antd";
import { Collapse } from "antd";
import LoomIframe from "../helpers/LoomIframe";
import "./_doc.scss";

const { Panel } = Collapse;

const Faqs = () => {
  return (
    <>
      <Space id="faqs" direction="vertical">
        <h1>FAQ's</h1>
      </Space>
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        className="site-collapse-custom-collapse"
      >
        <Panel
          header="¿Qué hago si no me aparecen clientes en Pitágoras?"
          key="1"
        >
          <p style={{ paddingLeft: 24 }}>
            Hay 2 casos en los que no te aparecerán cuentas en Pitágoras, una
            pantalla{" "}
            <b>
              <i>Not Authorized</i>
            </b>{" "}
            y{" "}
            <b>
              <i>You don't have permissions to get reports on any client yet</i>
            </b>
            :<br></br>
            <dd>
              <strong>Not Authorized:</strong>
              <br></br>
              <dd>
                Aún no hay una cuenta en Newton creada con el email que estás
                tratando de abrir Pitágoras, crea una cuenta en{" "}
                <a
                  target="_blank"
                  href="https://dashboard.epa.digital/"
                  rel="noreferrer"
                >
                  Newton
                </a>{" "}
                con tu email de EPA, si ya tienes cuenta, solicita al
                administrador(Ruddy González)(si eres alguien externo crea la
                cuenta con tu correo personal y solicítale a tu Gerente de
                cuentas que lo haga por ti), que te active el módulo de
                Pitágoras.
                <br></br>
              </dd>
              <div className="image">
                <img
                  about="Pitagoras screen when there is no account on Newton"
                  title="Pitagoras screen when there is no account on Newton"
                  alt=""
                  src="https://github.com/Eddye-Mx/GA4-BigQueryBuilder/assets/99297157/a3293844-f0a7-451d-9052-5c68724ba9b6"
                ></img>
              </div>
            </dd>
            <dd>
              <strong>
                You don't have permissions to get reports on any client yet:
              </strong>
              <br></br>
              <dd>
                Una vez que tengas cuenta en Newton, solicita al
                administrador(Ruddy González)(en caso de ser externo solicita a
                tu gerente de cuenta que lo solicite por ti) que te agregue
                acceso a tus clientes en Newton. Una vez que te confirme,
                reinicia Pitágoras para ver tus cuentas listadas
              </dd>
              <div className="image">
                <img
                  about="Pitagoras screen when there is no clients on your account"
                  title="Pitagoras screen when there is no clients on your account"
                  alt=""
                  src="https://github.com/Eddye-Mx/GA4-BigQueryBuilder/assets/99297157/1e8148a7-a6fd-41c0-b834-77ca73eb5d1a"
                ></img>
              </div>
            </dd>
          </p>
        </Panel>
        <Panel
          header="¿Qué hago si la cuenta o cliente que necesito no aparece?"
          key="2"
        >
          <p style={{ paddingLeft: 24 }}>
            Los clientes y cuentas que aparecen disponibles en Pitagoras, vienen
            de la base de datos interna de EPA digital. Si es que el cliente o
            cuenta que necesitas para generar reportes no aparece, lleva a cabo
            los siguientes pasos:<br></br>
            <dd>
              <strong>
                1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cuentas de Google
                ads:
              </strong>
              <br></br>
              <dd>
                Asegurate de que la cuenta y/o cliente se encuentren en el MCC
                de EPA (MCC-EPA.DIGITAL) sino está dentro del MCC, pide al
                cliente que le den acceso al correo de analytics@epa.digital con
                el tipo de acceso estandar.<br></br>
                <strong>Cuentas de Analytics y Analytics 4:</strong>
                <br></br>
                Asegurate que tengamos acceso a la propiedad con el correo
                analytics@epa.digital o con analytics2@epa.digital<br></br>
                <strong>Cuentas de Facebook:</strong>
                <br></br>
                Las cuentas de Facebook deben de estar dentro del business
                manager de EPA, además se debe de conceder acceso al usuario de
                sistema DATOS1, sino se cumplen ambos requerimientos no podremos
                descargar la data de la cuenta que se quiere vincular.<br></br>
              </dd>
              <strong>2. </strong>
              Una vez que haz revisado el punto anterior, utiliza el workflow de
              slack en el canal <b>#epa_support_newton</b> con los datos de la
              cuenta (ID, currency, timezone, vertical, unidad de negocio y
              correo de acceso[en el caso de GA4 este es indispensable sea
              analytics o analytics2@epa.digital]). Él dará de alta la cuenta en
              la base de datos de EPA.<br></br>
              <p className="notes">
                Nota:{" "}
                <i>
                  En caso de que seas externo y necesites agregar cuentas
                  primero revísalo con tu gerente de cuentas, pues todas las
                  cuentas que des de alta para tu cliente le aparecerán a todos
                  los usuarios que tengan acceso a dicho cliente, no solo a ti,
                  este requerimiento tu gerente de cuentas lo hará llegar al
                  administrador
                </i>{" "}
                <br />
              </p>
              <strong>3. </strong>
              Una vez que Ruddy haya dado de alta la cuenta, ya podras ver el
              cliente y/o cuenta en pitagoras y podras hacer tus queries. NOTA:
              En el caso de google analytics deberas esperar hasta el dia
              siguiente para poder ver información, ya que el proceso de
              descarga de información corre en las madrugadas.
            </dd>
            <p>
              Si la cuenta ya fue agregada a la base de datos de EPA y sigues
              sin poder verla, es muy posible que no tengas permiso para dicho
              cliente. Solicita al administrador que verifique tus permisos.
            </p>
          </p>
        </Panel>
        <Panel header="¿Qué hago si la data no coincide?" key="3">
          <p style={{ paddingLeft: 24 }}>
            Dado que la información viene directamente de las plataformas, justo
            en el momento que solicitas dicha información (a excepción de google
            analytics) es poco probable que la data no haga match con la
            plataforma, pero si tienes este problema te recomendamos seguir los
            pasos siguientes:
            <dd>
              <strong>1. </strong>Asegúrate de estar utilizando la cuenta
              correcta.<br></br>
              <strong>2. </strong>Revisa con el cliente si no hay algun delay de
              información en la cuenta.<br></br>
              <strong>3. </strong>Revisa con el cliente que no nos hayan quitado
              acceso de la cuenta.<br></br>
              <strong>4. </strong>Asegurate de utilizar las mismas dimensiones y
              métricas que en la plataforma.<br></br>
            </dd>
            Si ya has revisado los pasos anteriores y aun asi no ves
            información, o esta no coincide con la información en plataforma,
            escribe un mensaje al canal de slack <b>#p-pitagoras</b>
          </p>
        </Panel>

        {/* Video no disponible */}
        {/* <Panel header="¿Cómo cruzo la información de las plataformas?" key="4">
          <p style={{ paddingLeft: 24 }}>
            Para crear un reporte combinando la información de múltiples
            proveedores sigue los pasos que se muestran a continuación:
          </p>
          <LoomIframe
            title="reports"
            src="https://www.loom.com/embed/12ff66be3edf4a2290c3ce0046352bad"
          />
        </Panel> */}

        <Panel
          header="¿Por qué no se puede guardar una query con rangos de fechas personalizados?"
          key="5"
        >
          <p style={{ paddingLeft: 24 }}>
            Un rango de fechas personalizado no se puede guardar ya que no
            debería incluir fechas actuales(un rango de fechas personalizado no
            debería usarse para sustituir al reporte acumulado). Entonces, por
            lógica, al no tener fechas actuales no debería haber cambios en la
            información. Es decir, el reporte que obtengas de un reporte de este
            tipo el día de hoy o dentro de 5 meses debería ser el mismo pues al
            ser fechas pasadas ya no van a cambiar a través del tiempo, motivo
            por el cuál no necesita ser guardado pues es un reporte que solo se
            debería ejecutar una vez y la información que recibas guardarla en
            una hoja
          </p>
        </Panel>
        <Panel
          header="¿Qué hago si aparecen cuentas que ya no están activas?"
          key="6"
        >
          <p style={{ paddingLeft: 24 }}>
            En caso de que una cuenta que ya no se esté utilizando siga
            apareciendo en Pitágoras, es necesario hacer la solicitud al
            administrador para que de de baja la cuenta en el sistema.
          </p>
        </Panel>
        <Panel header="Sobre la métrica Reach en Facebook" key="7">
          <p style={{ paddingLeft: 24 }}>
            La métrica reach es una estimación de cuántas personas únicas vieron
            un post. Es diferente a impresiones pues una persona puede tener n
            cantidad de impresiones pero se seguirá contando como uno solo al
            pedir la métrica reach, por lo que debes tener las siguientes
            consideraciones en mente:
            <ul>
              <li>
                La suma de reach de tus campañas no es igual al reach de tu
                cuenta, pues puede haber personas que coinciden en 2 o más
                campañas y que solo se contabilizan como 1 sola al solicitarlo a
                nivel cuenta.
              </li>
              <li>
                Al ser una métrica que se basa en estimaciones considera que el
                valor no es 100% real y que dentro del plazo de 48 horas
                posterior a cerrar el día puede cambiar su valor debido a que se
                sigue calculando.
              </li>
            </ul>
          </p>
        </Panel>
      </Collapse>
    </>
  );
};

export default Faqs;
