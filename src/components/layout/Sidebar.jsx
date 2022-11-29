import { Anchor } from "antd";
const { Link } = Anchor;

const Sidebar = () => {
  return (
    <Anchor>
      <Link href="#about-pitagoras" title="Sobre Pitágoras" />
      <Link href="#first-steps" title="Primeros pasos" />
      <Link href="#providers" title="Proveedores">
        <Link href="#adwords-provider" title="Adwords" />
        <Link href="#analytics-provider" title="Analytics" />
        <Link href="#facebook-provider" title="Facebook" />
        <Link href="#bing-provider" title="Bing" />
      </Link>
      <Link href="#reports" title="Creación de reportes" />
      <Link href="#faqs" title="FAQs" />
    </Anchor>
  );
};

export default Sidebar;
