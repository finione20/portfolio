import { motion } from "framer-motion";
import {
  Mail,
  Download,
  Instagram,
  Phone,
  MapPin,
  Clock,
  Sparkles
} from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: "wikykobandaha99@gmail.com",
    link: "mailto:wikykobandaha99@gmail.com",
  },
  {
    icon: <Phone size={20} />,
    label: "0851-6159-0920 (WhatsApp)",
    link: "https://wa.me/6285161590920",
  },
  {
    icon: <Instagram size={20} />,
    label: "@hyeonyue_",
    link: "https://instagram.com/hyeonyue_",
  },
  {
    icon: <MapPin size={20} />,
    label: "Desa Motabang, Sulawesi Utara",
    link: null,
  },
  {
    icon: <Clock size={20} />,
    label:
      "Aktif: Senin - Jumat (08.00 - 16.00 WITA) | Sabtu-Minggu: respons via WhatsApp ✨",
    link: null,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"
    >
      <motion.div
        className="max-w-3xl w-full text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-white mb-4 flex justify-center items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Sparkles className="text-yellow-400" />
          Hubungi Saya
        </motion.h2>

        <p className="text-zinc-300 mb-10 text-lg md:text-xl">
          Ayo terhubung! 🚀 Baik untuk kolaborasi, tanya-tanya soal project, atau sekadar ngobrol santai~
        </p>

        <motion.div
          className="grid gap-6 text-zinc-200 text-left md:grid-cols-2 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {contactInfo.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              {item.icon}
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-yellow-300 transition text-sm md:text-base"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-sm md:text-base">{item.label}</span>
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="mailto:wikykobandaha99@gmail.com"
            className="bg-white text-zinc-900 font-semibold px-6 py-3 rounded-xl hover:bg-yellow-300 hover:text-zinc-900 transition duration-300 shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            Kirim Email 📩
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            className="text-white border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-zinc-900 transition duration-300 flex items-center gap-2 shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <Download size={18} /> Download CV
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
