import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Typewriter } from "react-simple-typewriter";
import type { Engine } from "tsparticles-engine";

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center px-6 py-16 overflow-hidden"
    >
      {/* Partikel Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: { enable: false },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { value: 60 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Konten Hero */}
      <motion.div
        className="relative z-10 text-center text-white max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="block">Hi, Saya</span>
          <span className="block mt-2 text-4xl text-[#61DBFB] drop-shadow-[0_0_12px_#61DBFB] animate-pulse">
            Wiky Kobandaha
          </span>
        </h1>

        {/* Typewriter Effect */}
        <motion.p
          className="text-lg md:text-2xl text-zinc-300 mb-10 h-[60px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typewriter
            words={[
              "Web Developer",
              "Teknologi",
              "Desain",
              "Pemecah Masalah",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.p>

        {/* Tombol CTA */}
        <motion.a
          href="#about"
          className="inline-block px-8 py-4 bg-[#38BDF8] text-zinc-900 font-semibold rounded-xl hover:bg-[#0284C7] transition duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Pelajari Lebih Lanjut
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 w-full text-center z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <p className="text-zinc-300">Scroll ke bawah</p>
        <div className="mt-2">
          <motion.div
            className="w-8 h-8 border-2 border-zinc-300 rounded-full mx-auto animate-pulse"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
