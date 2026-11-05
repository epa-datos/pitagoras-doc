import { Anchor } from "antd";
const { Link } = Anchor;

const Sidebar = () => {
  return (
    <Anchor>
      <Link href="#about-pitagoras" title="Sobre Pitágoras" />
      <Link href="#how-it-works" title="Cómo funciona" />
      <Link href="#first-steps" title="Primeros pasos" />
      <Link href="#access" title="Accesos y seguridad" />
      <Link href="#providers" title="Proveedores">
        <Link href="#adwords" title="Adwords" />
        <Link href="#facebook" title="Facebook" />
        <Link href="#bing" title="Bing" />
        <Link href="#tiktok" title="Tiktok" />
        <Link href="#analytics4" title="GA4" />
        <Link href="#dv360" title="DV360" />
        <Link href="#linkedin" title="LinkedIn" />
        <Link href="#amazon" title="Amazon Ads" />
        <Link href="#walmart" title="Walmart Connect" />
        <Link href="#mercadolibre" title="Mercado Libre Ads" />
        <Link href="#appsflyer" title="AppsFlyer" />
        <Link href="#rtbhouse" title="RTB House" />
        <Link href="#analytics" title="Analytics" />
      </Link>
      <Link href="#faqs" title="FAQs" />
      <Link href="#tips" title="Pro Tips" />
    </Anchor>
  );
};

export default Sidebar;
