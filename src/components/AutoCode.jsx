import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function AutoCode() {
  return (
    <div className="glass p-4 rounded-xl text-sm font-mono bg-black/10 dark:bg-white/5 shadow-lg max-w-full overflow-hidden">
      {/* VS Code Top Bar */}
      <div className="flex gap-2 mb-3">
        <span className="w-3 h-3 rounded-full bg-red-400"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-400"></span>
      </div>

      {/* Animated Coding */}
      <TypeAnimation
        sequence={[
          `function greet() {\n  return "Hello, I'm Kunal 👋";\n}`,
          1500,
          `const skills = ["React", "Node", "AI", "MongoDB"];\n\nskills.map(i => console.log(i));`,
          1500,
          `app.get("/api", (req,res) => {\n  res.send("API Connected ✔");\n});`,
          1500,
        ]}
        wrapper="pre"
        speed={60}
        repeat={Infinity}
        cursor={true}
        className="text-slate-800 dark:text-slate-100 whitespace-pre-wrap break-words max-w-full"
      />
    </div>
  );
}
