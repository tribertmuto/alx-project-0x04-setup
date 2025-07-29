import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
// Update the import path below to the correct relative path based on your project structure.
// For example, if CountContext.tsx is in 'alx-project-0x05/context/CountContext.tsx':
import { useCount } from "../../context/CountContext";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { count } = useCount();

  return (
    <header className="fixed w-full bg-white shadow-md">
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
              <Button
                buttonLabel="Sign In"
                buttonBackgroundColor="red"
              />
              <Button
                buttonLabel="Sign Up"
                buttonBackgroundColor="blue"
              />
            </>
          ) : (
            <p className=" font-semibold text-lg">Current count : {count}</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;