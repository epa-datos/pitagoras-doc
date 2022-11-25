import { Anchor } from "antd";
const { Link } = Anchor;

const Sidebar = () => {
  return (
    <Anchor>
      <Link href="#about-pitagoras" title="About Pitágoras" />
      <Link href="#providers" title="Providers">
        <Link href="#adwords-provider" title="Adwords" />
        <Link href="#analytics-provider" title="Analytics" />
        <Link href="#facebook-provider" title="Facebook" />
        <Link href="#bing-provider" title="Bing" />
      </Link>
      <Link href="#faqs" title="FAQs" />
    </Anchor>
  );
};

export default Sidebar;
