import { Space } from "antd";
import Adwords from "./Adwords";
import Analytics from "./Analytics";
import Bing from "./Bing";
import Facebook from "./Facebook";
import Tiktok from "./Tiktok";
import "./_provider.scss";
import Analytics4 from "./Analytics4";
import Dv360 from "./DV360";

const AllProviders = () => {
  return (
    <Space id="providers" direction="vertical" style={{ width: "100%" }}>
      <h1>Proveedores</h1>
      <Adwords />
      <Facebook />
      <Bing />
      <Tiktok />
      <Analytics4 />
      <Dv360/>
      <Analytics />
    </Space>
  );
};

export default AllProviders;
