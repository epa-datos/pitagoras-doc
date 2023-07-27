import { Space } from "antd";
import AboutPitagoras from "../doc/AboutPitagoras";
import Faqs from "../doc/Faqs";
import Tips from "../doc/Tips";
import FirstSteps from "../doc/FirstSteps";
import AllProviders from "../doc/providers/AllProviders";

const MainContainer = () => {
  return (
    <Space direction="vertical">
      <AboutPitagoras />
      <FirstSteps />
      <AllProviders />
      <Faqs />
      <Tips/>
    </Space>
  );
};

export default MainContainer;
