import { Space } from "antd";
import { Collapse } from "antd";
import LoomIframe from "../helpers/LoomIframe";
import "./_doc.scss";

const { Panel } = Collapse;

const Tips = () => {
  return (
    <>
      <Space id="tips" direction="vertical">
        <h1>Pro Tips</h1>
      </Space>
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        className="site-collapse-custom-collapse"
      >
        <Panel header="Descargar mucha información de Pitágoras" key="1">
          <p style={{ paddingLeft: 24 }}>
            Descargar información de reportes pesados:<br></br>
            <dd>
              Supongamos que necesitas crear un reporte de más de 6 meses atrás
              y que siga funcionan con la opción cummulative. Crear una sola
              query que haga esta extracción sería una mala práctica, pues
              diariamente estarías refrescando la información del día anterior
              más 6 meses más. Considera realizar lo siguiente:
              <br />
              <br />
              <strong>Pasos</strong>
              <br></br>
              <dd>
                Define el tiempo que vas a necesitar descargar y por cuánto
                tiempo lo vas a querer descargar. Por ejemplo, es 28 de Julio de
                2023 y necesitas hacer un reporte desde enero a la fecha y que
                continúe lo que resta del año. Lo vamos a dividir en 2 reportes,
                histórico y acumulativo:<br></br>
                <dd>Histórico: Del 1/1/2023 al 15/07/2023</dd>
                <dd>
                  Acumulativo: del 16/06/2023 a la fecha(opción{" "}
                  <i>cummulative till yesterday</i>)
                </dd>
                <br />
              </dd>
            </dd>
            <dd>
              <strong>
                <b>Histórico</b>
              </strong>
              <br></br>
              <dd>
                Este reporte no se necesita guardar pues será consultado solo 1
                vez: se hace la query de las dimensiones y métricas que
                necesitas, escoges la opción de custom date range de el 1/1/2023
                al 15/07/2023 y se descargará por defecto en la pestaña{" "}
                <i>Default</i>, una vez descargado puedes renombrar la pestaña a
                "histórico" o algún otro nombre que la identifique
                <div>
                  <img
                    about="Historic Report"
                    title="Historic Report"
                    // style="float:left;width:50%;height:100%;object-fit:cover;"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt=""
                    src="https://github.com/Eddye-Mx/GA4-BigQueryBuilder/assets/99297157/af88cda9-64a7-47ab-a8ee-2412b8930227"
                    width={"auto"}
                  ></img>
                </div>
              </dd>
            </dd>
          </p>
          <dd>
            <strong>
              <b>Combinar Reportes</b>
            </strong>
            <br></br>
            <dd>
              Una vez que tengas los 2 reportes puedes elegir 2 opciones:
              <li>
                <ul>
                  Usar una hoja nueva para juntar los valores de ambos reportes
                  copiando y pegando los valores
                </ul>
                <ul>Referenciar los valores de las hojas</ul>
              </li>
              <br />
              Una sugerencia es usar la misma hoja de histórico llamando por
              referencia los valores de la hoja acumulada, así en esta misma
              hoja tendremos toda la información que necesitemos y de esta hoja
              podremos hacer pivot tables si necesitaramos
              <div className="image">
                <img
                  about="Combinning Reports"
                  title="Combinning Reports"
                  style={{
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alt=""
                  src="https://github.com/Eddye-Mx/GA4-BigQueryBuilder/assets/99297157/2cdc40bd-8189-47c7-9506-7f8973b8f314"
                  width={"auto"}
                ></img>
              </div>
            </dd>
          </dd>
          <dd>
            <strong>
              <b>Siguientes pasos</b>
            </strong>
            <br></br>
            <dd>
              Ahora solo necesitaremos cada mes o mes y medio copiar los valores
              de la hoja del acumulado a la del histórico y actualizar el
              reporte de cummulative nuevamente con una fecha de inicio no mayor
              a 40 días y seguir repitiendo el proceso
            </dd>
          </dd>
        </Panel>
        <Panel
          id="filters"
          header="Funcionamiento de filtros OR y AND en Pitágoras"
          key="2"
        >
          <p style={{ paddingLeft: 24 }}>
            Qué es un filtro OR, AND y cuándo utilizarlos, supongamos que
            tenemos la siguiente imagen de referencia:
            <br />
            <br />
            <dd>
              <img
                alt="example shirts"
                src="https://github.com/Eddye-Mx/GA4-BigQueryBuilder/assets/99297157/5d1bf57e-502a-4cf9-ad29-c966e605b4a0"
                style={{ width: "100%" }}
              ></img>
              <br />
              <dd>
                Un filtro AND es un filtro donde las condiciones que le coloques
                deben cumplirse todas para regresar un valor
                <br />
                Un filtro OR es un filtro donde las condiciones que le coloques
                no necesariamente deben cumplirse todas para regresar valores
                <br />
                <br />
                Por ejemplo, tomando en cuenta la imágen de arriba, un filtro
                AND podría ser (colorDePlayera=blanco AND colorDePlayera=negro).
                Esto traerá las playeras cuyo color sea blanco y negro al mismo
                tiempo. En este caso, sería solo la playera a rayas pues es la
                única que cumple con ambas condiciones al mismo tiempo.
                <br />
                <br />
                Ahora, un filtro OR sería (colorDePlayera=blanco OR
                colorDePlayera=negro). Esto traería como respuesta las 3
                playeras, pues las 3 playeras tienen blanco o negro en su color,
                así que las 3 cumplen con la condición
              </dd>
            </dd>
          </p>
          <LoomIframe
            title="filters-example"
            src="https://www.loom.com/embed/085709fcb0704deeac3690202390a054?sid=1246cf9f-8b79-4930-8d1f-0ae18c097367"
          />
        </Panel>
        <Panel header="Editar Queries" key="3">
          <p style={{ paddingLeft: 24 }}>
            Una query se puede reciclar modificando prácticamente todos los
            valores de dicha query para que te siga sirviendo y no tener que
            crear una nueva query cada día, cada semana o cada mes. incluso 
            si ya no te sirve una query puedes eliminarla seleccionando dicha 
            query y usando el botón de borrar.
          </p>
        </Panel>
        <Panel header="Hoja savedQueriesPitagoras" key="4">
          <p style={{ paddingLeft: 24 }}>
            Evita tocar la hoja savedQueriesPitagoras pues de llegar a hacerlo 
            puedes llegar a recibir un error de Pitagoras referente a que el 
            registro no se encontró en dicha hoja.
          </p>
        </Panel>
      </Collapse>
    </>
  );
};

export default Tips;
