import { Space } from "antd";
import AboutPitagoras from "../doc/AboutPitagoras";
import Faqs from "../doc/Faqs";
import FirstSteps from "../doc/FirstSteps";
import AllProviders from "../doc/providers/AllProviders";

const MainContainer = () => {
  return (
    <Space direction="vertical">
      <AboutPitagoras />
      <FirstSteps />
      <AllProviders />
      <Faqs />
    </Space>
  );
};

export default MainContainer;
