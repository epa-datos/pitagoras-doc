import { Anchor } from "antd";
const { Link } = Anchor;

const Sidebar = () => {
  return (
    <Anchor>
      <Link href="#about-pitagoras" title="Sobre Pitágoras" />
      <Link href="#first-steps" title="Primeros pasos" />
      <Link href="#providers" title="Proveedores">
        <Link href="#adwords" title="Adwords" />
        <Link href="#analytics" title="Analytics" />
        <Link href="#facebook" title="Facebook" />
        <Link href="#bing" title="Bing" />
      </Link>
      <Link href="#reports" title="Creación de reportes" />
      <Link href="#faqs" title="FAQs" />
    </Anchor>
  );
};

export default Sidebar;
