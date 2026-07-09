import { Link } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";

export default function Logo() {
  return (
    <Link
      to="/"
      className="font-heading"
    >
      <img src={siteConfig.business.logo} alt=""className="w-36" />
    </Link>
  );
}