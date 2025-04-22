import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiMongodb, SiFigma } from "react-icons/si";

const skills = [
  {
    name: "React",
    level: 90,
    description: "Digunakan di hampir semua proyek frontend",
    icon: <FaReact size={40} color="#61DBFB" />,
    quote: "React itu udah kayak sahabat coding, selalu dia lagi dia lagi 😄",
  },
  {
    name: "Tailwind CSS",
    level: 85,
    description: "Framework CSS utama untuk styling",
    icon: <SiTailwindcss size={40} color="#38BDF8" />,
    quote: "Styling paling cepet dan bersih ya pake Tailwind, no debat.",
  },
  {
    name: "TypeScript",
    level: 80,
    description: "Bahasa utama saat ini dalam development",
    icon: <SiTypescript size={40} color="#007ACC" />,
    quote: "Lebih ribet dari JS? Iya. Tapi worth it banget buat jangka panjang.",
  },
  {
    name: "HTML5",
    level: 95,
    description: "Dasar semua struktur halaman web",
    icon: <FaHtml5 size={40} color="#e34c26" />,
    quote: "Fondasi semua. Gak bisa bohong, HTML itu ibu kandung web.",
  },
  {
    name: "CSS3",
    level: 80,
    description: "Untuk styling sebelum pakai Tailwind",
    icon: <FaCss3Alt size={40} color="#264de4" />,
    quote: "Pernah jadi andalan sebelum kenal Tailwind 😅",
  },
  {
    name: "GitHub",
    level: 75,
    description: "Tempat ngatur semua source code proyek",
    icon: <FaGithub size={40} color="#fff" />,
    quote: "Tempat paling tenang buat commit dosa-dosa bug 🤫",
  },
];

const learning = [
  {
    name: "Next.js",
    level: 50,
    description: "Masih eksplorasi SSR & routing",
    icon: <SiNextdotjs size={40} color="#fff" />,
  },
  {
    name: "MongoDB",
    level: 40,
    description: "Dipakai untuk backend Web Desa",
    icon: <SiMongodb size={40} color="#4DB33D" />,
  },
  {
    name: "Figma",
    level: 60,
    description: "Untuk wireframing & UI design dasar",
    icon: <SiFigma size={40} color="#a259ff" />,
  },
];

const SkillBar = ({ level }: { level: number }) => (
  <div className="w-full bg-zinc-700 rounded-full h-2 mt-2 overflow-hidden">
    <div
      className="h-2 rounded-full bg-gradient-to-r from-green-400 via-lime-400 to-green-500 animate-pulse"
      style={{ width: `${level}%`, transition: "width 0.6s ease-in-out" }}
    />
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 py-16 bg-zinc-900"
    >
      <motion.div
        className="w-full max-w-5xl text-center"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Skill & Tools
        </h2>
        <p className="text-zinc-400 mb-12 text-lg max-w-xl mx-auto">
          Berikut adalah teknologi dan alat yang saya kuasai, serta beberapa yang sedang saya pelajari untuk terus berkembang.
        </p>

        {/* Bagian Skill yang Dikuasai */}
        <div className="mb-16">
          <h3 className="text-xl text-white font-semibold mb-4">Teknologi yang Dikuasai</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-zinc-300 p-4 bg-zinc-800 rounded-xl shadow-md hover:shadow-green-500/30 transition duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                title={skill.description}
              >
                {skill.icon}
                <p className="mt-2 font-medium">{skill.name}</p>
                <SkillBar level={skill.level} />
                <p className="text-sm italic text-zinc-400 mt-2 text-center">{skill.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bagian Sedang Dipelajari */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-4">Sedang Dipelajari</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {learning.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-zinc-300 p-4 bg-zinc-800 rounded-xl shadow-md hover:shadow-blue-400/30 transition duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                title={item.description}
              >
                {item.icon}
                <p className="mt-2 font-medium">{item.name}</p>
                <SkillBar level={item.level} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
