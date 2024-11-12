import type { MetaFunction } from "@remix-run/node";
import { Navigation } from "~/components/Navigation";

export const meta: MetaFunction = () => {
  return [
    { title: "Meu de Navegacion" },
    { name: "description", content: "Menu de Navegacion: Ejemplo" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="mx-40 mt-7">
        <h1 className="text-4xl font-bold">Menu de Navegacion: Ejemplo </h1>
      </main>
    </div>
  );
}
