import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 py-16 bg-zinc-800"
    >
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Tentang Saya
        </h2>

        {/* Foto Profil dengan Border Glow */}
        <motion.div
          className="mb-6 relative w-fit mx-auto rounded-full p-1 bg-gradient-to-tr from-[#38BDF8] via-[#61DBFB] to-[#38BDF8] shadow-lg shadow-cyan-500/30"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="./src/assets/img/profil.png"
            alt="Wiky Kobandaha"
            className="w-32 h-32 rounded-full object-cover border-4 border-zinc-800"
          />
        </motion.div>

        {/* Intro Text */}
        <motion.p
          className="text-zinc-300 text-lg leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Saya Wiky Kobandaha, Web Developer dari Desa Motabang yang punya semangat besar untuk membangun solusi digital yang bermanfaat. Saya percaya bahwa setiap baris kode bisa membawa perubahan — dari desa, untuk dunia.
        </motion.p>

        {/* Quote */}
        <motion.blockquote
          className="italic text-cyan-400 text-md mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          "Web bukan sekadar tampilan. Ia adalah cerita, pengalaman, dan jembatan untuk memahami."
        </motion.blockquote>

        {/* Fakta Unik */}
        <div className="mb-8">
          <motion.h3
            className="text-xl text-white font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            🎯 Proyek & Fakta Menarik:
          </motion.h3>
          <motion.ul
            className="text-zinc-300 text-lg mt-4 space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <li className="hover:text-cyan-400 transition">🛠️ Mengerjakan Web Desa Motabang, proyek terbesar dan penuh tantangan.</li>
            <li className="hover:text-cyan-400 transition">🎓 Membuat lambang resmi jurusan RPL untuk SMK Cokroaminoto.</li>
          </motion.ul>
        </div>

        {/* Visi */}
        <div className="mb-8">
          <motion.h3
            className="text-xl text-white font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            🌟 Visi:
          </motion.h3>
          <motion.p
            className="text-zinc-300 text-lg mt-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Saya ingin web ini bukan cuma portofolio, tapi juga tempat edukasi dan inspirasi. Saya ingin bantu orang lain memahami bahwa dunia coding itu luas, menyenangkan, dan bukan sesuatu yang menyeramkan.
          </motion.p>
        </div>

        {/* Hobi */}
        <div>
          <motion.h3
            className="text-xl text-white font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            🎣 Hobi:
          </motion.h3>
          <motion.p
            className="text-zinc-300 text-lg mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Di luar layar, saya suka memancing. Itu waktu terbaik buat recharge ide, sekaligus latihan sabar 😄
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
