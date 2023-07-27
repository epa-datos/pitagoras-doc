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
        <Link href="#tiktok" title="Tiktok" />
        <Link href="#analytics4" title="GA4" />
      </Link>
      <Link href="#faqs" title="FAQs" />
      <Link href="#tips" title="Pro Tips" />
    </Anchor>
  );
};

export default Sidebar;
