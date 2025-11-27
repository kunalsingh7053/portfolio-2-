import React, { useEffect, useState, useRef } from "react";

/**
 * GitHubContrib
 * - username: GitHub username
 * - try to load snake from user's repo; if not available, show inline SVG snake animation
 */
export default function GitHubContrib({ username = "kunalsingh7053" }) {
  const chartSrc = `https://ghchart.rshah.org/${username}`;
  const snakeRepoRaw = `https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake-dark.svg`;
  const [snakeAvailable, setSnakeAvailable] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    // Try HEAD first to be lighter; some hosts reject HEAD, so fallback to GET on failure
    async function check() {
      try {
        const res = await fetch(snakeRepoRaw, { method: "HEAD" });
        if (!cancelled && res.ok) {
          setSnakeAvailable(snakeRepoRaw);
          return;
        }
        // fallback to GET (some servers don't allow HEAD)
        const res2 = await fetch(snakeRepoRaw);
        if (!cancelled && res2.ok) {
          setSnakeAvailable(snakeRepoRaw);
          return;
        }
      } catch (e) {
        // ignore and fall through to null
      }
      if (!cancelled) setSnakeAvailable(false);
    }
    check();
    return () => {
      cancelled = true;
    };
  }, [snakeRepoRaw]);

  return (
    <div
      ref={containerRef}
      className="mt-6 glass p-6 rounded-2xl shadow-xl border border-white/10 backdrop-blur-xl transition-all hover:scale-[1.01] relative overflow-hidden"
      aria-label="GitHub contributions"
    >
      <h4 className="font-bold text-lg mb-3 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
        GitHub Contributions
      </h4>

      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noreferrer"
        className="block relative"
        aria-label={`Open ${username} on GitHub`}
      >
        {/* Contribution chart */}
        <img
          src={chartSrc}
          alt={`${username} GitHub contributions`}
          loading="lazy"
          className="w-full h-auto rounded-lg ring-1 ring-white/10 shadow-md block"
          style={{ display: "block" }}
        />

        {/* Overlay area: absolute, covers the chart */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          {/* If repo snake exists, show it; otherwise show inline animated snake */}
          {snakeAvailable === null ? (
            // still checking: show subtle shimmer placeholder
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-pulse opacity-30 w-3/4 h-2 rounded" />
            </div>
          ) : snakeAvailable ? (
            <img
              src={snakeAvailable}
              alt=""
              className="w-full h-full object-cover rounded-lg"
              style={{ mixBlendMode: "screen" }}
            />
          ) : (
            // Inline fallback SVG snake animation
            <svg
              className="w-full h-full"
              viewBox="0 0 800 200"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="snakeGradient" x1="0" x2="1">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="1" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* faint grid hint (matches contribution grid feel) */}
              <g opacity="0.12">
                {Array.from({ length: 7 }).map((_, row) =>
                  Array.from({ length: 26 }).map((__, col) => {
                    const size = 10;
                    const gap = 6;
                    const x = 40 + col * (size + gap);
                    const y = 24 + row * (size + gap);
                    return (
                      <rect
                        key={`g-${row}-${col}`}
                        x={x}
                        y={y}
                        rx="2"
                        ry="2"
                        width={size}
                        height={size}
                        fill="#111827"
                        opacity="0.08"
                      />
                    );
                  })
                )}
              </g>

              {/* path the snake follows (a sweeping S-ish path across grid) */}
              <path
                id="snakePath"
                d="M48 60 C140 10, 320 10, 420 60 C520 110, 660 110, 748 60"
                fill="none"
                stroke="transparent"
                strokeWidth="2"
              />

              {/* draw trailing snake with multiple circles that follow the path with staggered begin */}
              {Array.from({ length: 12 }).map((_, i) => {
                const delay = (i * 0.08).toFixed(2);
                const radius = 6 - Math.min(i, 6) * 0.4; // tail tapers
                const opacity = 1 - i * 0.06;
                return (
                  <circle
                    key={`s-${i}`}
                    r={radius}
                    fill="url(#snakeGradient)"
                    style={{ filter: "url(#glow)", opacity }}
                  >
                    <animateMotion
                      dur="4s"
                      repeatCount="indefinite"
                      begin={`${delay}s`}
                      rotate="auto"
                    >
                      <mpath href="#snakePath" />
                    </animateMotion>
                  </circle>
                );
              })}

              {/* subtle head accent using a slightly larger circle with a tiny blink */}
              <circle cx="-10" cy="-10" r="10" fill="transparent" id="head">
                <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#snakePath" />
                </animateMotion>
              </circle>
            </svg>
          )}
        </div>
      </a>

      <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
        Click to view full GitHub profile. If you want the GitHub-generated
        snake, add the snake action to your repo — or keep this live fallback.
      </p>

      {/* small note / action button area */}
      <div className="mt-3 flex gap-2">
        <a
          className="inline-block px-3 py-1 rounded-lg text-sm font-medium ring-1 ring-white/6 bg-white/5"
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
     
      </div>
    </div>
  );
}
