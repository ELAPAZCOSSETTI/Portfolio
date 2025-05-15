

function Footer() {


  return (
    <footer className="bg-rose-400 text-black py-6 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} La Perreria. Todos los derechos reservados.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">
            Privacidad
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Términos
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contacto
          </a>
        </div>
        <div className="mt-4 md:mt-0 text-sm">

        </div>
      </div>
    </footer>
  );
}

export default Footer;
