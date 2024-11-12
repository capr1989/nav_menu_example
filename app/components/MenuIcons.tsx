import { Heart, ArrowUpDown, ShoppingBag } from "lucide-react";
export const MenuIcons = ({ className }) => {
  return (
    <div className={"flex m-auto space-x-2 " + className}>
      <Heart />
      <ArrowUpDown />
      <ShoppingBag />
    </div>
  );
};
