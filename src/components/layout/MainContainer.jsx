import { Space } from "antd";
import AboutPitagoras from "../doc/AboutPitagoras";
import Faqs from "../doc/Faqs";
import Tips from "../doc/Tips";
import FirstSteps from "../doc/FirstSteps";
import HowItWorks from "../doc/HowItWorks";
import Access from "../doc/Access";
import AllProviders from "../doc/providers/AllProviders";

const MainContainer = () => {
  return (
    <Space direction="vertical">
      <AboutPitagoras />
      <HowItWorks />
      <FirstSteps />
      <Access />
      <AllProviders />
      <Faqs />
      <Tips/>
    </Space>
  );
};

export default MainContainer;
