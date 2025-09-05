export default function Header() {
  return (
    <header className="w-full bg-primary-gray py-8 px-8 fixed top-0 z-50">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* 5个元素均匀分布 */}
        <div className="w-full flex items-center justify-between">
          <a 
            href="#works" 
            className="text-primary-orange text-64px font-bold font-mango cursor-pointer hover:opacity-80 transition-opacity"
          >
            WORKS
          </a>
          
          <a 
            href="#about" 
            className="text-primary-orange text-64px font-bold font-mango cursor-pointer hover:opacity-80 transition-opacity"
          >
            ABOUT
          </a>

          {/* Logo 元素 */}
          <a 
            href="#home" 
            className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-32 h-32 bg-primary-orange rounded-full flex items-center justify-center">
              <span className="text-white text-3xl font-bold">LOGO</span>
            </div>
          </a>

          <a 
            href="#services" 
            className="text-primary-orange text-64px font-bold font-mango cursor-pointer hover:opacity-80 transition-opacity"
          >
            SERVICES
          </a>
          
          <a 
            href="#contact" 
            className="text-primary-orange text-64px font-bold font-mango cursor-pointer hover:opacity-80 transition-opacity"
          >
            CONTACT
          </a>
        </div>
      </nav>
    </header>
  );
}
