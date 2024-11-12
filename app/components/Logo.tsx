import { Link } from "@remix-run/react";

export const Logo = ({ className }) => {
  return (
    <button className={"flex shrink-0 mr-3 " + className}>
      <Link to="/" className="flex shrink-0">
        <img
          src="https://res.cloudinary.com/dieykc68z/image/upload/v1731438155/logo-light_tceypo.png"
          alt=""
          className="h-8 w-auto shrink-0"
        />
      </Link>
    </button>
  );
};
