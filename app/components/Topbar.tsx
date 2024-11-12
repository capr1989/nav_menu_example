import { Instagram, Phone } from "lucide-react";

export const Topbar = ({ className }) => {
  return (
    <div className={"flex " + className}>
      <div className="flex space-x-2 shrink-0">
        <Instagram />
        <p>4k followers</p>
        <span className="border"></span>
        <Phone />
        <p>66768694</p>
      </div>
    </div>
  );
};
