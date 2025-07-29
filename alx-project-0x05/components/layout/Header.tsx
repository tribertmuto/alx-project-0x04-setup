import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCount } from "../../context/CountContext";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { count } = useCount();

  return (
    <header className="fixed w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link
          href="/"
          className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight"
        >
          Splash App
        </Link>

        {/* Button Group */}
        <div className="flex gap-4">
          {!["/counter-app"].includes(pathname) ? (
            <>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
              >
                Sign In
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
              >
                Sign Up
              </button>
            </>
          ) : (
            <p className="font-semibold text-lg">Current count: {count}</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;