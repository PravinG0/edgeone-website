/**
 * IoTHeroVisual.tsx — Isometric IoT Dashboard Visual
 * CSS + SVG, no external deps. Dark-theme glowing aesthetic.
 */

import { useEffect, useRef } from "react";

export function IoTHeroVisual() {
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full h-[540px] flex items-center justify-center">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 55% 50%, rgba(59,130,246,0.13) 0%, transparent 70%)" }} />

      {/* Main SVG */}
      <svg viewBox="0 0 560 500" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[520px] h-auto" aria-hidden>
        <defs>
          <filter id="f-glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="f-glow-sm"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <linearGradient id="g-panel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f1f3d" stopOpacity="0.95"/>
            <stop offset="100%" stopColor="#060e1f" stopOpacity="0.98"/>
          </linearGradient>
          <linearGradient id="g-screen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0a1628" stopOpacity="1"/>
            <stop offset="100%" stopColor="#060c18" stopOpacity="1"/>
          </linearGradient>
          <linearGradient id="g-bar-blue" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1d4ed8"/>
            <stop offset="100%" stopColor="#60a5fa"/>
          </linearGradient>
          <linearGradient id="g-bar-cyan" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0e7490"/>
            <stop offset="100%" stopColor="#22d3ee"/>
          </linearGradient>
          <linearGradient id="g-bar-violet" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#5b21b6"/>
            <stop offset="100%" stopColor="#a78bfa"/>
          </linearGradient>
          <radialGradient id="g-dot" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="1"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3"/>
          </radialGradient>
        </defs>

        {/* ── Background subtle grid ── */}
        <g opacity="0.04" stroke="#3b82f6" strokeWidth="0.5">
          {[0,1,2,3,4,5,6,7,8,9,10].map(i=><line key={`v${i}`} x1={i*56} y1="0" x2={i*56} y2="500"/>)}
          {[0,1,2,3,4,5,6,7,8,9].map(i=><line key={`h${i}`} x1="0" y1={i*56} x2="560" y2={i*56}/>)}
        </g>

        {/* ═══════════════════════════════════════
            MAIN DASHBOARD PANEL (isometric feel)
        ══════════════════════════════════════ */}

        {/* Panel shadow */}
        <rect x="92" y="42" width="386" height="290" rx="18" fill="#000" fillOpacity="0.4" filter="url(#f-glow)"/>
        {/* Panel body */}
        <rect x="88" y="38" width="386" height="290" rx="18" fill="url(#g-panel)" stroke="#1e3a5f" strokeWidth="1.2"/>
        {/* Screen area */}
        <rect x="104" y="60" width="354" height="250" rx="10" fill="url(#g-screen)" stroke="#1a3050" strokeWidth="0.8"/>

        {/* Header bar */}
        <rect x="104" y="60" width="354" height="32" rx="10" fill="#0a1e38"/>
        <rect x="104" y="80" width="354" height="12" rx="0" fill="#0a1e38"/>
        <circle cx="122" cy="76" r="5" fill="#ef4444" fillOpacity="0.7"/>
        <circle cx="138" cy="76" r="5" fill="#f59e0b" fillOpacity="0.7"/>
        <circle cx="154" cy="76" r="5" fill="#10b981" fillOpacity="0.7"/>
        <text x="200" y="81" fill="#4b6080" fontSize="9" fontFamily="Inter, monospace" letterSpacing="2">EDGEONE PLATFORM — LIVE</text>
        {/* Live dot */}
        <circle cx="400" cy="76" r="4" fill="#10b981">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite"/>
        </circle>
        <text x="410" y="80" fill="#10b981" fontSize="8" fontFamily="Inter, monospace">LIVE</text>

        {/* ── Left panel: metric cards ── */}
        {[
          { y: 110, label: "ASSETS TRACKED", val: "247", color: "#60a5fa", sub: "↑ 12 this hour" },
          { y: 168, label: "EDGE NODES",     val: "38",  color: "#22d3ee", sub: "All online" },
          { y: 226, label: "ALERTS",         val: "3",   color: "#f59e0b", sub: "2 resolved" },
        ].map((m) => (
          <g key={m.label}>
            <rect x="112" y={m.y} width="110" height="48" rx="8" fill="#081525" stroke="#1a3050" strokeWidth="0.8"/>
            <text x="120" y={m.y + 14} fill="#4b6080" fontSize="7" fontFamily="Inter" letterSpacing="1.5">{m.label}</text>
            <text x="120" y={m.y + 32} fill={m.color} fontSize="20" fontWeight="700" fontFamily="Outfit" filter="url(#f-glow-sm)">{m.val}</text>
            <text x="120" y={m.y + 44} fill="#374151" fontSize="7" fontFamily="Inter">{m.sub}</text>
          </g>
        ))}

        {/* ── Center panel: bar chart ── */}
        <text x="242" y="108" fill="#4b6080" fontSize="8" fontFamily="Inter" letterSpacing="1.5">DEVICE ACTIVITY</text>
        {/* Bars */}
        {[
          { x: 242, h: 60, grad: "g-bar-blue",   label: "MON" },
          { x: 262, h: 90, grad: "g-bar-cyan",   label: "TUE" },
          { x: 282, h: 50, grad: "g-bar-blue",   label: "WED" },
          { x: 302, h: 110,grad: "g-bar-violet", label: "THU" },
          { x: 322, h: 75, grad: "g-bar-cyan",   label: "FRI" },
          { x: 342, h: 95, grad: "g-bar-blue",   label: "SAT" },
          { x: 362, h: 70, grad: "g-bar-violet", label: "SUN" },
        ].map((b) => (
          <g key={b.x}>
            <rect x={b.x} y={240 - b.h} width="14" height={b.h} rx="3" fill={`url(#${b.grad})`} opacity="0.85">
              <animate attributeName="height" from="0" to={String(b.h)} dur="1.2s" fill="freeze" begin="0.3s"/>
              <animate attributeName="y" from="240" to={String(240 - b.h)} dur="1.2s" fill="freeze" begin="0.3s"/>
            </rect>
            <text x={b.x + 7} y="254" textAnchor="middle" fill="#374151" fontSize="6.5" fontFamily="Inter">{b.label}</text>
          </g>
        ))}
        {/* Chart baseline */}
        <line x1="238" y1="240" x2="384" y2="240" stroke="#1a3050" strokeWidth="0.8"/>

        {/* ── Right panel: live feed list ── */}
        <text x="398" y="108" fill="#4b6080" fontSize="8" fontFamily="Inter" letterSpacing="1.5">LIVE EVENTS</text>
        {[
          { y: 118, dot: "#10b981", text: "Ward-3 Tag 0x4F online",  time: "0:02s" },
          { y: 136, dot: "#60a5fa", text: "Forklift A12 geofence",   time: "0:15s" },
          { y: 154, dot: "#f59e0b", text: "Temp sensor 22°C alert",  time: "0:41s" },
          { y: 172, dot: "#10b981", text: "Gateway GW-07 synced",    time: "1:02s" },
          { y: 190, dot: "#60a5fa", text: "AI node inference done",  time: "1:18s" },
          { y: 208, dot: "#a78bfa", text: "OPC-UA data push OK",     time: "2:05s" },
          { y: 226, dot: "#10b981", text: "Pump P-03 health 98%",    time: "2:33s" },
        ].map((e) => (
          <g key={e.y}>
            <circle cx="400" cy={e.y + 4} r="3.5" fill={e.dot}>
              <animate attributeName="opacity" values="1;0.4;1" dur={`${1.2 + (e.y % 5) * 0.3}s`} repeatCount="indefinite"/>
            </circle>
            <text x="410" y={e.y + 8} fill="#6b7280" fontSize="8" fontFamily="Inter">{e.text}</text>
            <text x="440" y={e.y + 8} textAnchor="end" fill="#374151" fontSize="7" fontFamily="Inter, monospace" x="452">{e.time}</text>
          </g>
        ))}

        {/* ═══════════════════════════════════════
            FLOATING DEVICE CARDS (bottom)
        ══════════════════════════════════════ */}

        {/* Card 1 — Gateway */}
        <g style={{ animation: "iot-float-slow 6s ease-in-out infinite", transformOrigin: "155px 395px" }}>
          <rect x="88" y="358" width="134" height="74" rx="12" fill="#081525" stroke="#1e3a5f" strokeWidth="1"/>
          <rect x="88" y="358" width="134" height="74" rx="12" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.4"/>
          <circle cx="106" cy="378" r="10" fill="#0f2040" stroke="#3b82f6" strokeWidth="0.8"/>
          <text x="106" y="382" textAnchor="middle" fill="#60a5fa" fontSize="9" fontWeight="700">GW</text>
          <text x="124" y="374" fill="#9ca3af" fontSize="8" fontFamily="Inter">GATEWAY</text>
          <text x="124" y="386" fill="white" fontSize="10" fontWeight="700" fontFamily="Outfit">GW-07</text>
          <circle cx="201" cy="371" r="4" fill="#10b981"><animate attributeName="opacity" values="1;0.2;1" dur="1.6s" repeatCount="indefinite"/></circle>
          <text x="192" y="397" fill="#374151" fontSize="7" fontFamily="Inter, monospace">12 devices</text>
          <rect x="96" y="406" width="108" height="3" rx="1.5" fill="#1a3050"/>
          <rect x="96" y="406" width="85" height="3" rx="1.5" fill="#3b82f6"/>
          <text x="96" y="418" fill="#374151" fontSize="6.5" fontFamily="Inter">78% capacity</text>
        </g>

        {/* Card 2 — RTLS */}
        <g style={{ animation: "iot-float-slow 7s ease-in-out infinite", transformOrigin: "280px 410px", animationDelay: "1s" }}>
          <rect x="214" y="358" width="134" height="74" rx="12" fill="#081525" stroke="#1e3a5f" strokeWidth="1"/>
          <rect x="214" y="358" width="134" height="74" rx="12" fill="none" stroke="#22d3ee" strokeWidth="0.5" opacity="0.4"/>
          <circle cx="232" cy="378" r="10" fill="#0a1f2e" stroke="#22d3ee" strokeWidth="0.8"/>
          <text x="232" y="382" textAnchor="middle" fill="#22d3ee" fontSize="7" fontWeight="700">RTLS</text>
          <text x="250" y="374" fill="#9ca3af" fontSize="8" fontFamily="Inter">TRACKING</text>
          <text x="250" y="386" fill="white" fontSize="10" fontWeight="700" fontFamily="Outfit">247 Tags</text>
          <circle cx="327" cy="371" r="4" fill="#10b981"><animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite"/></circle>
          <text x="222" y="397" fill="#374151" fontSize="7" fontFamily="Inter, monospace">&lt;2ms latency</text>
          <rect x="222" y="406" width="108" height="3" rx="1.5" fill="#1a3050"/>
          <rect x="222" y="406" width="98" height="3" rx="1.5" fill="#22d3ee"/>
          <text x="222" y="418" fill="#374151" fontSize="6.5" fontFamily="Inter">91% accuracy</text>
        </g>

        {/* Card 3 — AI Edge */}
        <g style={{ animation: "iot-float-slow 5s ease-in-out infinite", transformOrigin: "405px 395px", animationDelay: "1.8s" }}>
          <rect x="340" y="358" width="134" height="74" rx="12" fill="#081525" stroke="#1e3a5f" strokeWidth="1"/>
          <rect x="340" y="358" width="134" height="74" rx="12" fill="none" stroke="#a78bfa" strokeWidth="0.5" opacity="0.4"/>
          <circle cx="358" cy="378" r="10" fill="#130a2e" stroke="#a78bfa" strokeWidth="0.8"/>
          <text x="358" y="382" textAnchor="middle" fill="#a78bfa" fontSize="8" fontWeight="700">AI</text>
          <text x="376" y="374" fill="#9ca3af" fontSize="8" fontFamily="Inter">EDGE NODE</text>
          <text x="376" y="386" fill="white" fontSize="10" fontWeight="700" fontFamily="Outfit">99.9% UP</text>
          <circle cx="453" cy="371" r="4" fill="#10b981"><animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite"/></circle>
          <text x="348" y="397" fill="#374151" fontSize="7" fontFamily="Inter, monospace">1.8ms inference</text>
          <rect x="348" y="406" width="108" height="3" rx="1.5" fill="#1a3050"/>
          <rect x="348" y="406" width="106" height="3" rx="1.5" fill="#a78bfa"/>
          <text x="348" y="418" fill="#374151" fontSize="6.5" fontFamily="Inter">99.1% SLA</text>
        </g>

        {/* ═══════════════════════════════════════
            CONNECTING LINES (panel → cards)
        ══════════════════════════════════════ */}
        <line x1="155" y1="328" x2="155" y2="358" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.4"/>
        <line x1="280" y1="328" x2="280" y2="358" stroke="#22d3ee" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.4"/>
        <line x1="405" y1="328" x2="405" y2="358" stroke="#a78bfa" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.4"/>

        {/* ═══════════════════════════════════════
            FLOATING DATA PACKETS on lines
        ══════════════════════════════════════ */}
        <circle r="3" fill="#3b82f6" filter="url(#f-glow-sm)">
          <animateMotion path="M 155 328 L 155 358 L 155 328" dur="2s" repeatCount="indefinite" begin="0s"/>
          <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle r="3" fill="#22d3ee" filter="url(#f-glow-sm)">
          <animateMotion path="M 280 328 L 280 358 L 280 328" dur="2.4s" repeatCount="indefinite" begin="0.8s"/>
          <animate attributeName="opacity" values="0;1;1;0" dur="2.4s" repeatCount="indefinite" begin="0.8s"/>
        </circle>
        <circle r="3" fill="#a78bfa" filter="url(#f-glow-sm)">
          <animateMotion path="M 405 328 L 405 358 L 405 328" dur="1.8s" repeatCount="indefinite" begin="0.4s"/>
          <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite" begin="0.4s"/>
        </circle>

        {/* ═══════════════════════════════════════
            TOP BADGE — uptime monitor
        ══════════════════════════════════════ */}
        <g style={{ animation: "iot-float-slow 5s ease-in-out infinite", transformOrigin: "470px 25px" }}>
          <rect x="390" y="8" width="148" height="30" rx="8" fill="#081525" stroke="#1e3a5f" strokeWidth="0.8"/>
          <circle cx="404" cy="23" r="5" fill="#10b981">
            <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="fillOpacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite"/>
          </circle>
          <text x="415" y="19" fill="#9ca3af" fontSize="7" fontFamily="Inter" letterSpacing="1">SYSTEM STATUS</text>
          <text x="415" y="30" fill="#10b981" fontSize="9" fontWeight="700" fontFamily="Outfit">All Systems Operational</text>
        </g>

      </svg>
    </div>
  );
}
