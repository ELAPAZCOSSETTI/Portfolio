import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
} from "@nextui-org/react";
import Avatar from "../Avatar/Avatar";
export default function App() {


  return (
    <Navbar isBordered className="mt-6">
      <NavbarContent className="mb-6">
        <NavbarContent >
          <NavbarBrand >
            <Avatar />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent>
          <NavbarItem className="pl-28">
            <Link href="/search" className="text-black">
              Comercios
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-black">Beneficios</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-black">Integraciones</Link>
          </NavbarItem>
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
