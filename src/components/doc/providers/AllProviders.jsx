import { Space } from "antd";
import Adwords from "./Adwords";
import Analytics from "./Analytics";
import Bing from "./Bing";
import Facebook from "./Facebook";
import "./_provider.scss";

const AllProviders = () => {
  return (
    <Space id="providers" direction="vertical" style={{ width: "100%" }}>
      <h1>Proveedores</h1>
      <Adwords />
      <Analytics />
      <Facebook />
      <Bing />
    </Space>
  );
};

export default AllProviders;
