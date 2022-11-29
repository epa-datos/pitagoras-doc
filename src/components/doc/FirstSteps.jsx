import { Space } from "antd";
import LoomIframe from "../helpers/LoomIframe";

const FirstSteps = () => {
  return (
    <Space id="first-steps" direction="vertical" style={{ width: "100%" }}>
      <h3>Primeros pasos</h3>
      <p>
        Para poder utilizar el add-on en Google Spreadsheet es necesario agregar
        la aplicación de Pitágoras como extensión.
      </p>
      <LoomIframe
        title="first-steps"
        src="https://www.loom.com/embed/a8c4b164a5ee4b1c909cd901035c4abb"
      />
    </Space>
  );
};
export default FirstSteps;
