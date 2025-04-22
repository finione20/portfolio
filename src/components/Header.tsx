import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Menggunakan useCallback untuk mencegah controlNavbar di-recreate pada setiap render
  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShow(false); // scroll down → hide
    } else {
      setShow(true); // scroll up → show
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]); // Dependensinya hanya lastScrollY

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]); // Menambahkan controlNavbar sebagai dependensi

  const navItems = [
    { label: "Tentang", to: "about" },
    { label: "Skill", to: "skills" },
    { label: "Kontak", to: "contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-zinc-900/80 backdrop-blur-sm`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white font-bold text-lg tracking-widest">WELCOME</h1>
        <nav className="space-x-6 text-sm text-zinc-300">
          {navItems.map((item, i) => (
            <ScrollLink
              key={i}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-white transition"
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
