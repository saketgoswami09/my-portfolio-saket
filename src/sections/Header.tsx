import ThemeSwitch from "@/components/ThemeSwitch";

export const Header = () => {
  return (
    <div className="flex justify-center  items-center fixed  top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      
        <a href="#hero" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
      
        <a
          href="mailto:saketgirigoswami4141@gmail.com"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
        
      </nav>
      <div className="absolute right-3"><ThemeSwitch /></div>
    </div>
  );
};
