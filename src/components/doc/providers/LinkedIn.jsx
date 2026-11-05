import { Space } from "antd";

const LinkedIn = () => {
  return (
    <Space id="linkedin" direction="vertical" style={{ width: "100%" }}>
      <h2>LinkedIn</h2>
      <p>
        Para descargar un reporte selecciona un <i>pivote</i> (Company,
        Account, Campaign, Campaign Group, Creative o Conversion), una{" "}
        <i>granularidad</i> (All, Daily, Monthly o Yearly) y las{" "}
        <i>métricas</i>.
      </p>
      <p>
        Aquí puedes encontrar la información oficial de las métricas:{" "}
        <a
          href="https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/ads-reporting"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn Ads Reporting
        </a>
      </p>
    </Space>
  );
};

export default LinkedIn;
