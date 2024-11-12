import { SearchIcon } from "lucide-react";
import { Form } from "@remix-run/react";

export const Search = ({ className }) => {
  return (
    <Form className={" rounded-md border flex bg-white " + className}>
      <SearchIcon className="h-[16px] w-[16px] m-auto bg-white ml-2 shrink-0" />

      <input
        type="text"
        name=""
        id=""
        placeholder="Search..."
        className="w-full focus-visible:outline-none px-4"
      />
    </Form>
  );
};
