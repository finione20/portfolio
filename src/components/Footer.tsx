import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t text-zinc-400 px-6 py-10 text-center flex flex-col items-center gap-4">
      {/* Quote */}
      <p className="text-sm italic text-zinc-500 max-w-md">
        "Koding bukan tentang seberapa cepat kamu menulis, tapi seberapa dalam kamu memahami."
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 justify-center">
        <a
          href="https://github.com/wikykobandaha" // Ganti dengan punyamu
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-300"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/wikykobandaha" // Ganti juga kalo belum ada
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-300"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="mailto:wikykobandaha99@gmail.com"
          className="hover:text-white transition duration-300"
        >
          <FaEnvelope size={20} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-zinc-500">
        © {new Date().getFullYear()} Wiky Kobandaha. Dibuat dengan 💻 React & Tailwind.
      </p>
    </footer>
  );
};

export default Footer;
