import { Link } from "@remix-run/react";

export const Logo = ({ className }) => {
  return (
    <button className={"flex shrink-0 mr-3 " + className}>
      <Link to="/" className="flex shrink-0">
        <img
          src="/public/logo-light.png"
          alt=""
          className="h-8 w-auto shrink-0"
        />
      </Link>
    </button>
  );
};
