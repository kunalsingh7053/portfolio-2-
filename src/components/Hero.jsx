import React from "react";
import { motion } from "framer-motion";
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
  return (
    <section id="home" className="min-h-[72vh] flex items-center container">
      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* LEFT SIDE */}
        <div>
          <motion.p variants={item} className="text-sm text-accent font-medium">
            Hello — Welcome
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight"
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
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent bg-[length:200%_200%]"
            >
              Kunal Patel
            </motion.span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 text-lg text-slate-700 dark:text-slate-300"
          >
            Full-Stack Developer | AI Integrations | React & NodeJS
          </motion.p>

          {/* BUTTONS */}
          <motion.div variants={item} className="mt-6 flex gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="px-5 py-2 rounded-md bg-primary text-black font-semibold transition"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/resume.pdf"
              download
              className="px-5 py-2 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
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
           className="glass p-4 md:p-6 rounded-2xl max-w-full overflow-hidden">

            {/* Top bar (VS Code style) */}
            <div className="flex gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>

            {/* Auto Coding Animation */}
            <div className="font-mono text-sm text-slate-800 dark:text-slate-100">
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
