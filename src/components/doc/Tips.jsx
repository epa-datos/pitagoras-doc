const Tips = () => {
  return (
    <>
      <Space id="tips" direction="vertical">
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
                con tu email de EPA.<br></br>
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
                Una vez que tengas cuenta en Newton solicita a Ruddy González
                que te agregue acceso a tus clientes en Newton, una vez te
                confirme reinicia Pitágoras para ver tus cuentas listadas
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
                1. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cuentas de Google
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
              Una vez que haz revisado el punto anterior, contacta a Ruddy
              Gonzalez, con los datos de la cuenta (ID, currency, timezone,
              vertical, unidad de negocio y correo de acceso[en el caso de GA4
              este es indispensable]). El dará de alta la cuenta en la base de
              datos de EPA.<br></br>
              <strong>3. </strong>
              Una vez que Rudy haya dado de alta la cuenta, ya podras ver el
              cliente y/o cuenta en pitagoras y podras hacer tus queries. NOTA:
              En el caso de google analytics deberas esperar hasta el dia
              siguiente para poder ver información, ya que el proceso de
              descarga de información corre en las madrugadas.
            </dd>
          </p>
        </Panel>
        <Panel header="¿Qué hago si la data no coincide?" key="3">
          <p style={{ paddingLeft: 24 }}>
            Dado que la información viene directamente de las plataformas justo
            en el momento que solicitas dicha información (a excepción de google
            analytics) es poco probable que la data no haga match con la
            plataforma, pero si tienes este problema te recomendamos seguir los
            pasos siguientes:
            <dd>
              <strong>1. </strong>Asegurate de estar utilizando la cuenta
              correcta.<br></br>
              <strong>2. </strong>Revisa con el cliente si no hay algun delay de
              información en la cuenta.<br></br>
              <strong>3. </strong>Revisa con el cliente que no nos hayan quitado
              acceso de la cuenta.<br></br>
              <strong>4. </strong>Asegurate de utilizar las mismas dimensiones y
              métricas que en la plataforma.<br></br>
            </dd>
            Si ya has revisado los pasos anteriores y aun asi no ves información
            o esta, no coincide con la información en plataforma escribe un
            mensaje al canal de slack #p_epa-addon
          </p>
        </Panel>
        <Panel header="¿Cómo cruzo la información de las plataformas?" key="4">
          <p style={{ paddingLeft: 24 }}>
            Para crear un reporte combinando la información de múltiples
            proveedores sigue los pasos que se muestran a continuación:
          </p>
          <LoomIframe
            title="reports"
            src="https://www.loom.com/embed/12ff66be3edf4a2290c3ce0046352bad"
          />
        </Panel>
      </Collapse>
    </>
  );
};

export default Tips;
