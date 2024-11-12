import { Link } from "@remix-run/react";

export const MenuLinks = ({ className }) => {
  return (
    <div className={"m-auto mr-3 " + className}>
      <Link to="/" className=" flex ">
        Inicio
      </Link>
      <Link to="/" className="flex">
        Nosotros
      </Link>
      <Link to="/" className="flex">
        Productos
      </Link>
      <Link to="/" className="flex">
        Reclamos
      </Link>
      <Link to="/" className="flex">
        Categorias
      </Link>
    </div>
  );
};
