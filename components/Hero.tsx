"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import Image from "next/image";

const ROLES = [
    "Full-Stack Developer",
    "Mobile App Developer",
    "React Native Engineer",
    "Next.js Specialist",
    "Systems Architect",
];

const CODE_LINES = [
    { prefix: "const", name: " developer", op: " =", value: " {", color: "#a5b4fc" },
    { indent: 2, key: "  name:", value: ' "Jaymar G. Aranas"', color: "#34d399" },
    { indent: 2, key: "  role:", value: ' "Full-Stack · Mobile Dev"', color: "#34d399" },
    { indent: 2, key: "  location:", value: ' "Dumaguete, Negros Oriental, Philippines 🇵🇭"', color: "#34d399" },
    { indent: 2, key: "  available:", value: " true", color: "#f472b6" },
    { indent: 2, key: "  stack:", value: " [React Native, Expo, Laravel, etc]", color: "#fb923c" },
    { indent: 0, key: "}", value: "", color: "#a5b4fc" },
    { prefix: "", name: "", op: "", value: "", color: "" },
    { prefix: "developer", name: "", op: ".deploy()", value: " // 🚀", color: "#94a3b8" },
];

const STACK_DATA = [
    { name: "React Native", slug: "react", color: "61DAFB" },
    { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
    { name: "TypeScript", slug: "typescript", color: "3178C6" },
    { name: "Expo", slug: "expo", color: "FFFFFF" },
    { name: "MySQL", slug: "mysql", color: "4479A1" },
    { name: "Laravel", slug: "laravel", color: "FF2D20" },
    { name: "PHP", slug: "php", color: "777BB3" },
    { name: "SQLite", slug: "sqlite", color: "003D8B" },
    { name: "Git", slug: "git", color: "F05032" },
    { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
    { name: "Node.js", slug: "nodedotjs", color: "339933" },
    { name: "Postman", slug: "postman", color: "FF6C37" },
    { name: "Firebase", slug: "firebase", color: "FFCA28" },
    { name: "Java", slug: "openjdk", color: "EA5731" },
    { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
];

export default function Hero() {
    const [roleIdx, setRoleIdx] = useState(0);
    const [typed, setTyped] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [revealedLines, setRevealedLines] = useState(0);
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 60]);

    // Typewriter
    useEffect(() => {
        const role = ROLES[roleIdx];
        let t: ReturnType<typeof setTimeout>;

        if (isTyping) {
            if (typed.length < role.length) {
                t = setTimeout(() => setTyped(role.slice(0, typed.length + 1)), 55);
            } else {
                t = setTimeout(() => setIsTyping(false), 2400);
            }
        } else {
            if (typed.length > 0) {
                t = setTimeout(() => setTyped(typed.slice(0, -1)), 28);
            } else {
                setRoleIdx((i) => (i + 1) % ROLES.length);
                setIsTyping(true);
            }
        }
        return () => clearTimeout(t);
    }, [typed, isTyping, roleIdx]);

    // Reveal code lines sequentially
    useEffect(() => {
        if (revealedLines >= CODE_LINES.length) return;
        const t = setTimeout(() => setRevealedLines((r) => r + 1), 200);
        return () => clearTimeout(t);
    }, [revealedLines]);

    return (
        <section
            ref={containerRef}
            id="hero"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                paddingTop: "5rem",
                paddingBottom: "3rem",
                background: "#030712",
            }}
        >
            {/* Grid bg */}
            <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />

            {/* Glow orbs */}
            <div style={{ position: "absolute", top: "10%", left: "5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "10%", right: "5%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "800px", height: "800px", background: "radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

            <motion.div
                style={{ opacity, y, width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
            >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="hero-grid">

                    {/* Left: Text */}
                    <div>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", marginBottom: "2.5rem" }}>
                            {/* Profile Image - Hero Best Practice */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                style={{ position: "relative", width: "fit-content" }}
                            >
                                <div style={{
                                    position: "relative",
                                    width: "96px",
                                    height: "96px",
                                    borderRadius: "100%",
                                    padding: "3px",
                                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                    boxShadow: "0 0 25px rgba(99,102,241,0.3)"
                                }}>
                                    <Image
                                        src="/jaymar.png"
                                        alt="Jaymar Aranas"
                                        width={96}
                                        height={96}
                                        style={{ borderRadius: "100%", objectFit: "cover", background: "#030712" }}
                                    />
                                    <div style={{ position: "absolute", bottom: "4px", right: "4px", width: "18px", height: "18px", background: "#22c55e", borderRadius: "50%", border: "2px solid #030712", boxShadow: "0 0 10px rgba(34,197,94,0.5)" }} />
                                </div>
                            </motion.div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                {/* Status badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.375rem" }}
                                >
                                    <span className="section-label" style={{ fontSize: "0.65rem", padding: "0.25rem 0.6rem" }}>
                                        <span style={{ position: "relative", display: "inline-flex" }}>
                                            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#22c55e", display: "block" }} />
                                            <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#22c55e", animation: "pulse 1.5s ease-out infinite" }} />
                                        </span>
                                        Booking for Q{Math.floor(new Date().getMonth() / 3) + 1} {new Date().getFullYear()}
                                        <Sparkles size={10} />
                                    </span>
                                </motion.div>

                                {/* Name */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0 }}
                                >
                                    <span style={{ fontSize: "clamp(2.75rem, 6vw, 4.5rem)", color: "#f1f5f9", display: "block" }}>Jaymar</span>
                                    <span className="gradient-text" style={{ fontSize: "clamp(2.75rem, 6vw, 4.5rem)", display: "block" }}>Aranas</span>
                                </motion.h1>
                            </div>
                        </div>

                        {/* Typewriter role */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            style={{ height: "2rem", marginBottom: "1.5rem", display: "flex", alignItems: "center" }}
                        >
                            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "1rem", color: "#818cf8", fontWeight: 400 }}>
                                <span style={{ color: "#475569" }}>// </span>
                                {typed}
                                <span className="cursor-blink" style={{ color: "#a78bfa" }}>▌</span>
                            </span>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55, duration: 0.6 }}
                            style={{ color: "#64748b", fontSize: "1.0625rem", lineHeight: 1.75, maxWidth: "460px", marginBottom: "2.25rem" }}
                        >
                            I build{" "}
                            <span style={{ color: "#94a3b8", fontWeight: 500 }}>production-ready</span> systems that{" "}
                            actually get used — from municipal billing platforms to polished mobile apps.{" "}
                            <span style={{ color: "#6366f1", fontWeight: 500 }}>Philippines-based</span>, available globally.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.65, duration: 0.6 }}
                            style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}
                        >
                            <a href="#projects" className="btn-primary" id="hero-projects-btn">
                                View Work →
                            </a>
                            <a href="#contact" className="btn-secondary" id="hero-contact-btn">
                                Let&apos;s Talk
                            </a>
                        </motion.div>

                        {/* Stats row */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.85 }}
                            style={{
                                marginTop: "1.75rem",
                                display: "flex",
                                gap: "3.5rem",
                                alignItems: "center"
                            }}
                        >
                            {[
                                { n: "2+", label: "Yrs Experience" },
                                { n: "7+", label: "Projects" },
                            ].map((s) => (
                                <div key={s.label} style={{ textAlign: "center" }}>
                                    <div style={{
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        fontWeight: 800,
                                        fontSize: "1.75rem",
                                        color: "#f1f5f9",
                                        lineHeight: 1
                                    }} className="gradient-text">{s.n}</div>
                                    <div style={{
                                        fontSize: "0.625rem",
                                        color: "#64748b",
                                        marginTop: "0.375rem",
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        fontWeight: 600
                                    }}>{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="hero-terminal"
                    >
                        <div className="terminal float">
                            {/* Terminal bar */}
                            <div className="terminal-bar">
                                <div className="terminal-dot" style={{ background: "#ff5f57" }} />
                                <div className="terminal-dot" style={{ background: "#febc2e" }} />
                                <div className="terminal-dot" style={{ background: "#28c840" }} />
                                <span style={{ marginLeft: "auto", fontSize: "0.7rem", color: "#475569" }}>~/portfolio/jaymar.ts</span>
                            </div>
                            {/* Code content */}
                            <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                                {CODE_LINES.map((line, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={i < revealedLines ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                        style={{ lineHeight: "1.8", minHeight: "1.6rem" }}
                                    >
                                        {line.value === "" && line.key === "" && line.prefix === "" ? (
                                            <span>&nbsp;</span>
                                        ) : (
                                            <span>
                                                {line.prefix && <span style={{ color: "#c084fc" }}>{line.prefix}</span>}
                                                {line.name && <span style={{ color: "#93c5fd" }}>{line.name}</span>}
                                                {line.op && <span style={{ color: "#94a3b8" }}>{line.op}</span>}
                                                {line.key && <span style={{ color: "#94a3b8" }}>{line.key}</span>}
                                                {line.value && <span style={{ color: line.color || "#f1f5f9" }}>{line.value}</span>}
                                            </span>
                                        )}
                                    </motion.div>
                                ))}
                                {revealedLines >= CODE_LINES.length && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        style={{ marginTop: "0.75rem", padding: "0.625rem 0.875rem", background: "rgba(99,102,241,0.08)", borderRadius: "0.5rem", border: "1px solid rgba(99,102,241,0.15)" }}
                                    >
                                        <span style={{ color: "#475569" }}>{">"} </span>
                                        <span style={{ color: "#22c55e" }}>Compiled successfully</span>
                                        <span style={{ color: "#475569" }}> in 0.3s ⚡</span>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Marquee tech stack */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                style={{
                    position: "absolute",
                    bottom: "2.5rem",
                    left: 0,
                    right: 0,
                    overflow: "hidden",
                    padding: "0.75rem 0",
                    borderTop: "1px solid rgba(255,255,255,0.04)",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    background: "rgba(255,255,255,0.01)",
                }}
            >
                <div className="marquee" style={{ display: "inline-flex", gap: "3rem", whiteSpace: "nowrap" }}>
                    {[...STACK_DATA, ...STACK_DATA].map((s, i) => (
                        <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                            <img
                                src={`https://cdn.simpleicons.org/${s.slug}/${s.color}`}
                                alt={s.name}
                                style={{ width: "16px", height: "16px", opacity: 0.5, filter: "grayscale(1) brightness(1.5)" }}
                            />
                            <span style={{ color: "#334155", fontSize: "0.8125rem", fontFamily: "JetBrains Mono, monospace", fontWeight: 500 }}>
                                {s.name}
                            </span>
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{ position: "absolute", bottom: "6rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.375rem", color: "#334155" }}
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                >
                    <ArrowDown size={16} />
                </motion.div>
            </motion.div>

            <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .hero-terminal { display: none; }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
        </section>
    );
}
