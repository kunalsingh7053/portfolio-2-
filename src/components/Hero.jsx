import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  const speakIntro = React.useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const voices = window.speechSynthesis.getVoices();
    const preferredKeys = ["google us english", "microsoft david", "microsoft mark", "zira", "samantha"];
    const selectedVoice =
      voices.find((voice) => {
        const name = `${voice.name} ${voice.voiceURI}`.toLowerCase();
        return preferredKeys.some((key) => name.includes(key));
      }) || voices.find((voice) => voice.lang?.toLowerCase().startsWith("en")) || null;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(
      "Hello, I am Kunal Patel, a web developer from Medi-Caps University."
    );

    if (selectedVoice) utterance.voice = selectedVoice;

    // Slightly lower pitch and controlled rate for a futuristic assistant tone.
    utterance.rate = 0.92;
    utterance.pitch = 0.68;
    utterance.volume = 1;
    utterance.lang = "en-IN";
    window.speechSynthesis.speak(utterance);
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative overflow-hidden min-h-[80vh] flex items-center container section-reveal">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0.25, 0.5, 0.25], y: [0, -8, 0], x: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-2 sm:left-6 top-8 sm:top-12 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-200/50 dark:text-slate-800/40 select-none"
      >
        KUNAL PATEL
      </motion.p>

      <motion.div
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* LEFT SIDE */}
        <div>
          <motion.p variants={item} className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs md:text-sm text-red-700 dark:text-red-300 font-medium">
            Web-Slinger Inspired Portfolio
          </motion.p>

          <motion.h1
            variants={item}
            className="hero-target-heading mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08]"
          >
            Hi, I'm{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="target-lock text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent bg-[length:200%_200%]"
            >
              Web Developer
            </motion.span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-6 w-full max-w-md"
          >
            <motion.img
              style={{ y: photoY }}
              src="/kunal.png"
              alt="Kunal Patel"
              data-cursor="hero-photo"
              onClick={speakIntro}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  speakIntro();
                }
              }}
              tabIndex={0}
              role="button"
              title="Click to activate AI intro voice"
              className="w-full h-[320px] sm:h-[420px] object-cover rounded-xl border border-black/10 dark:border-transparent shadow-2xl shadow-slate-900/20 cursor-pointer transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] focus:outline-none"
            />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-base sm:text-lg text-slate-700 dark:text-slate-300"
          >
            Full-Stack Developer building production-ready web apps with AI integrations, polished frontend systems, and scalable Node.js backends.
          </motion.p>

          <motion.div variants={item} className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm">
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1">React + Node</span>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1">AI Integrations</span>
            <span className="rounded-full border border-slate-400/30 bg-white/50 dark:bg-white/5 px-3 py-1">Responsive UI</span>
          </motion.div>

          {/* BUTTONS */}
          <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="px-5 py-2.5 rounded-lg bg-primary text-white font-semibold transition shadow-md shadow-red-500/30"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/resume.pdf"
              download
              className="px-5 py-2.5 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT SIDE – Auto Coding Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
           className="glass p-4 md:p-6 rounded-2xl max-w-full overflow-hidden border border-accent/25">

            {/* Top bar (VS Code style) */}
            <div className="flex gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>

            {/* Auto Coding Animation */}
            <div className="font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-100">
              <TypeAnimation
                sequence={[
                  `function greet() {\n  return "Hello, I'm Kunal 👋";\n}`,
                  1500,
                  `const stack = ["React", "Node", "MongoDB", "AI"];\n\nstack.forEach(i => console.log(i));`,
                  1500,
                  `app.get("/api", (req,res) => {\n  res.send("Backend Connected ✔");\n});`,
                  1500,
                ]}
                wrapper="code"
                speed={55}
                repeat={Infinity}
                cursor={true}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
