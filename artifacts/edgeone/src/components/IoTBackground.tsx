/**
 * IoTBackground.tsx
 * Ported from https://github.com/PravinG0/ambient-iot-flow
 * Pure CSS/SVG IoT network background animation — no Three.js required.
 */

const BINARY_COLUMNS = [
  { left: "6%",  delay: "0s",  duration: "11s", chars: "10110100" },
  { left: "18%", delay: "3s",  duration: "14s", chars: "01001011" },
  { left: "32%", delay: "1s",  duration: "13s", chars: "11010010" },
  { left: "48%", delay: "5s",  duration: "16s", chars: "00110101" },
  { left: "63%", delay: "2s",  duration: "12s", chars: "10101110" },
  { left: "78%", delay: "6s",  duration: "15s", chars: "01110001" },
  { left: "92%", delay: "4s",  duration: "13s", chars: "11001010" },
];

function WifiIcon({ className = "", delay = "0s" }: { className?: string; delay?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={{ animationDelay: delay }}>
      <path d="M2 8.5C8 3 16 3 22 8.5"           stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.9" />
      <path d="M5 12C9.5 8 14.5 8 19 12"          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
      <path d="M8 15.5C10.4 13.5 13.6 13.5 16 15.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <circle cx="12" cy="19" r="1.4" fill="currentColor" />
    </svg>
  );
}

function ChipIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <rect x="10" y="10" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <rect x="15" y="15" width="10" height="10" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      {[14, 20, 26].map((p) => (
        <g key={p}>
          <line x1={p} y1="6"  x2={p} y2="10" stroke="currentColor" strokeWidth="1" />
          <line x1={p} y1="30" x2={p} y2="34" stroke="currentColor" strokeWidth="1" />
          <line x1="6"  y1={p} x2="10" y2={p} stroke="currentColor" strokeWidth="1" />
          <line x1="30" y1={p} x2="34" y2={p} stroke="currentColor" strokeWidth="1" />
        </g>
      ))}
    </svg>
  );
}

function SatelliteIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <rect x="13" y="13" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="3"  y="14" width="8" height="4"        stroke="currentColor" strokeWidth="1"   opacity="0.8" />
      <rect x="21" y="14" width="8" height="4"        stroke="currentColor" strokeWidth="1"   opacity="0.8" />
      <line x1="16" y1="13" x2="16" y2="6" stroke="currentColor" strokeWidth="1" />
      <circle cx="16" cy="5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function IoTBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Base mesh dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(59,130,246,0.18) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Connection lines with animated dash flow */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="iot-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#93c5fd" stopOpacity="0" />
            <stop offset="50%"  stopColor="#93c5fd" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Static faded lines */}
        <g stroke="url(#iot-line-grad)" strokeWidth="1" fill="none">
          <line x1="15%" y1="25%" x2="50%" y2="50%" />
          <line x1="50%" y1="50%" x2="85%" y2="30%" />
          <line x1="50%" y1="50%" x2="30%" y2="80%" />
          <line x1="50%" y1="50%" x2="75%" y2="75%" />
          <line x1="15%" y1="25%" x2="30%" y2="80%" />
          <line x1="85%" y1="30%" x2="75%" y2="75%" />
        </g>
        {/* Animated dash lines */}
        <g stroke="rgba(147,197,253,0.55)" strokeWidth="1" fill="none"
           strokeDasharray="4 6" className="iot-dash-flow">
          <line x1="15%" y1="25%" x2="50%" y2="50%" />
          <line x1="50%" y1="50%" x2="85%" y2="30%" />
          <line x1="50%" y1="50%" x2="30%" y2="80%" />
          <line x1="50%" y1="50%" x2="75%" y2="75%" />
        </g>
      </svg>

      {/* Falling binary streams */}
      {BINARY_COLUMNS.map((col, i) => (
        <div
          key={i}
          className="absolute top-0 font-mono text-[11px] leading-4 whitespace-pre iot-binary-fall"
          style={{
            left: col.left,
            animationDelay: col.delay,
            animationDuration: col.duration,
            color: "rgba(147,197,253,0.35)",
          }}
        >
          {col.chars.split("").map((c, j) => (
            <div key={j}>{c}</div>
          ))}
        </div>
      ))}

      {/* Central radar hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Slowly rotating dashed rings */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full border border-dashed border-blue-500/15 iot-spin-slow" />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] rounded-full border border-dashed border-blue-400/20 iot-spin-reverse" />

        {/* Radar ping rings */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-500/30 rounded-full iot-radar-ping" />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-500/20 rounded-full iot-radar-ping" style={{ animationDelay: "2s" }} />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-500/15 rounded-full iot-radar-ping" style={{ animationDelay: "4s" }} />

        {/* Central chip icon */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-blue-400/70">
          <ChipIcon className="w-full h-full" />
        </div>
        <div className="size-2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full shadow-[0_0_18px_#3b82f6] iot-blink" />

        {/* Orbiting satellite */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 iot-satellite text-blue-300/70">
          <SatelliteIcon className="w-7 h-7" />
        </div>
      </div>

      {/* IoT device nodes with WiFi signals */}
      {[
        { top: "18%", left: "12%", delay: "0s"   },
        { top: "22%", left: "82%", delay: "1.2s" },
        { top: "78%", left: "18%", delay: "2.4s" },
        { top: "72%", left: "84%", delay: "0.6s" },
      ].map((d, i) => (
        <div
          key={`dev-${i}`}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ top: d.top, left: d.left }}
        >
          <div className="relative">
            <div
              className="absolute inset-0 -m-3 rounded-full border border-blue-300/40 iot-signal-wave"
              style={{ animationDelay: d.delay }}
            />
            <div
              className="absolute inset-0 -m-3 rounded-full border border-blue-300/25 iot-signal-wave"
              style={{ animationDelay: `calc(${d.delay} + 1s)` }}
            />
            <WifiIcon className="w-7 h-7 text-blue-300/80 iot-float-slow" delay={d.delay} />
          </div>
        </div>
      ))}

      {/* Pulsing sensor nodes */}
      {[
        { top: "25%", left: "15%", delay: "0s"   },
        { top: "30%", left: "85%", delay: "1s"   },
        { top: "80%", left: "30%", delay: "2s"   },
        { top: "75%", left: "75%", delay: "3s"   },
        { top: "50%", left: "8%",  delay: "0.5s" },
        { top: "55%", left: "92%", delay: "2.5s" },
        { top: "40%", left: "35%", delay: "1.5s" },
        { top: "60%", left: "65%", delay: "3.5s" },
      ].map((n, i) => (
        <div
          key={i}
          className="absolute size-2 bg-blue-500 rounded-full shadow-[0_0_12px_#3b82f6] iot-pulse-node"
          style={{ top: n.top, left: n.left, animationDelay: n.delay }}
        />
      ))}

      {/* Travelling data packets — horizontal */}
      <div className="absolute top-[20%] w-2 h-px bg-blue-300 shadow-[0_0_10px_#93c5fd] iot-travel-x" style={{ animationDuration: "12s" }} />
      <div className="absolute top-[45%] w-3 h-px bg-blue-500 shadow-[0_0_10px_#3b82f6] iot-travel-x" style={{ animationDuration: "15s", animationDelay: "4s" }} />
      <div className="absolute top-[75%] w-2 h-px bg-blue-300 shadow-[0_0_10px_#93c5fd] iot-travel-x" style={{ animationDuration: "10s", animationDelay: "7s" }} />
      <div className="absolute top-[60%] w-4 h-px bg-blue-500 shadow-[0_0_10px_#3b82f6] iot-travel-x" style={{ animationDuration: "13s", animationDelay: "2s" }} />

      {/* Travelling data packets — vertical */}
      <div className="absolute left-[20%] w-px h-3 bg-blue-500 shadow-[0_0_10px_#3b82f6] iot-travel-y" style={{ animationDuration: "18s", animationDelay: "2s" }} />
      <div className="absolute left-[80%] w-px h-2 bg-blue-300 shadow-[0_0_10px_#93c5fd] iot-travel-y" style={{ animationDuration: "14s", animationDelay: "9s" }} />
      <div className="absolute left-[50%] w-px h-3 bg-blue-300 shadow-[0_0_10px_#93c5fd] iot-travel-y" style={{ animationDuration: "16s", animationDelay: "5s" }} />

      {/* Horizontal scanning beam */}
      <div className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-blue-500/6 to-transparent iot-scan-line" />

      {/* Corner telemetry HUD markers */}
      <div className="absolute top-6 left-6 font-mono text-[10px] text-blue-400/40 tracking-widest">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-emerald-400 iot-blink" />
          NODE.SYNC
        </div>
        <div className="mt-1">LAT 40.71° · LON -74.00°</div>
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[10px] text-blue-400/40 tracking-widest text-right">
        <div className="flex items-center justify-end gap-2">
          UPLINK <span className="size-1.5 rounded-full bg-blue-400 iot-blink" />
        </div>
        <div className="mt-1">PKT 0x4F·A2 · 24ms</div>
      </div>

      {/* Vignette — keeps hero text readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(222.2,84%,4.9%)_95%)]" />
    </div>
  );
}
