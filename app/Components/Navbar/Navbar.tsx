import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  const formattedTime = time.toLocaleTimeString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });



  return (
    <Navbar isBordered className="bg-color-#581845">
      <NavbarContent className="">
        <NavbarContent >
          <NavbarBrand className=" rounded-none bg-transparent">
            <img
              className="h-16 "
              src="https://www.wiber.com.ar/images/logo/logo.png"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent>
            {hasMounted && formattedTime}
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10 mt-1",
              mainWrapper: "h-full",
              input:
                "text-small text-start leading-[2.5rem] focus:outline-none focus:border-none ml-2",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Buscar"
            size="sm"
            type="search"
          />
        </NavbarContent>
        {/* <NavbarItem>
          {token ? (
            <div className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleMenu}
              >
                <div className="mr-2">Hola,</div>
                <div>{user?.name}</div>
              </div>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link href="/profile" color="foreground">
                        Perfil
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link href={`/mycommerces`} color="foreground">
                        Mis Comercios
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <Link
                        href="/"
                        className="text-black"
                        onClick={() => handleAuthChange(null)}
                      >
                        Cerrar sesion
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Login onAuthChange={handleAuthChange} />
          )} */}
        {/* </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  );
}
