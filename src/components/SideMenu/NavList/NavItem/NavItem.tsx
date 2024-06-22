"use client";

//interfaceは主にオブジェクトの構造を定義するために使用され、

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

//typeは型エイリアス、ユニオン型、タプル型、交差型など、より広範な用途に使用されます。
interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  link: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, link, icon }) => {
  const pathname = usePathname();
  return (
    //flexを親にすると、子要素を横並びにできる
    <Link
      href={link}
      className={`flex p-4 items-center w-full hover:bg-gray-700 font-medium ${
        pathname === link ? "bg-gray-600 border-r-4 border-r-green-500" : ""
      }`}
    >
      <div className="mr-1">{icon}</div>
      <div>{label}</div>
    </Link>
  );
};

export default NavItem;
