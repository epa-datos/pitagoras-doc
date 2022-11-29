import { Space } from "antd";
import Adwords from "./Adwords";
import Analytics from "./Analytics";
import Bing from "./Bing";
import Facebook from "./Facebook";

const AllProviders = () => {
  return (
    <Space id="providers" direction="vertical" style={{ width: "100%" }}>
      <h3>Proveedores</h3>
      <Adwords />
      <Analytics />
      <Facebook />
      <Bing />
    </Space>
  );
};

export default AllProviders;
