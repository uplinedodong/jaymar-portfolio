"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, Code2, Coffee, Zap, Target, Trophy, Heart } from "lucide-react";

const BENTO_CARDS = [
    {
        id: "bio",
        span: "col-span-2 row-span-2",
        content: "bio",
    },
    {
        id: "location",
        content: "location",
    },
    {
        id: "experience",
        content: "experience",
    },
    {
        id: "projects",
        content: "projects",
    },
    {
        id: "mindset",
        content: "mindset",
    },
    {
        id: "stack",
        span: "col-span-2",
        content: "stack",
    },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    );
}

const cardBase: React.CSSProperties = {
    background: "rgba(8, 12, 24, 0.6)",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: "1.25rem",
    padding: "1.5rem",
    position: "relative",
    overflow: "hidden",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
};

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
];

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" style={{ padding: "6rem 0 0", background: "#030712", position: "relative" }}>
            {/* Subtle divider */}
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)" }} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem 6rem" }}>

                {/* Header */}
                <Reveal>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "3.5rem" }}>
                        <span className="section-label" style={{ alignSelf: "flex-start" }}>About Me</span>
                        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f1f5f9", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
                            I don&apos;t just ship features —<br />
                            <span className="gradient-text">I ship solutions.</span>
                        </h2>
                    </div>
                </Reveal>

                {/* Bento Grid */}
                <div
                    ref={ref}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gridTemplateRows: "auto",
                        gap: "1rem",
                    }}
                    className="about-grid"
                >

                    {/* BIO — large card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        style={{ ...cardBase, gridColumn: "span 2", gridRow: "span 2" }}
                        className="glass-hover"
                    >
                        {/* Glow and Image */}
                        <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "220px", height: "220px", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />

                        <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", zIndex: 2 }}>
                            <div style={{ position: "relative", width: "70px", height: "70px", borderRadius: "100%", padding: "3px", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 0 20px rgba(99,102,241,0.3)" }}>
                                <Image
                                    src="/jaymar.png"
                                    alt="Jaymar Aranas"
                                    width={70}
                                    height={70}
                                    style={{ borderRadius: "100%", objectFit: "cover", background: "#030712" }}
                                />
                            </div>
                        </div>

                        <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", boxShadow: "0 0 20px rgba(99,102,241,0.3)" }}>
                            <Code2 size={22} color="white" />
                        </div>

                        <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#f1f5f9", marginBottom: "0.875rem" }}>
                            THE MISSION
                        </h3>

                        <p style={{ color: "#94a3b8", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "1.25rem", fontWeight: 500 }}>
                            Practical, production‑focused Software Developer from the Philippines with expertise in full‑stack web development and cross‑platform mobile applications.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "1.75rem" }}>
                            <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.6 }}>
                                I specialize in building real-world systems that work in production — not just demos. My experience includes:
                            </p>

                            <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                <li style={{ display: "flex", gap: "0.75rem" }}>
                                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#6366f1", marginTop: "0.5rem", flexShrink: 0 }} />
                                    <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.5 }}>
                                        <strong style={{ color: "#94a3b8" }}>Government & Municipal Systems:</strong> LGU platforms like iWATER, handling billing, payment tracking, and reconciliation.
                                    </p>
                                </li>
                                <li style={{ display: "flex", gap: "0.75rem" }}>
                                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#6366f1", marginTop: "0.5rem", flexShrink: 0 }} />
                                    <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.5 }}>
                                        <strong style={{ color: "#94a3b8" }}>Cross-Platform Mobile:</strong> React Native & Expo apps with SQLite offline storage, native UX, and OTA updates.
                                    </p>
                                </li>
                                <li style={{ display: "flex", gap: "0.75rem" }}>
                                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#6366f1", marginTop: "0.5rem", flexShrink: 0 }} />
                                    <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.5 }}>
                                        <strong style={{ color: "#94a3b8" }}>Business Platforms:</strong> Performance-aware dashboards and CRUD-heavy applications built to deliver value.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                            <a href="#projects" className="btn-primary" style={{ fontSize: "0.825rem", padding: "0.6rem 1.25rem" }}>
                                See Work →
                            </a>
                            <a href="mailto:101aranasjaymar@email.com" className="btn-secondary" style={{ fontSize: "0.825rem", padding: "0.6rem 1.25rem" }}>
                                Email Me
                            </a>
                        </div>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.12 }}
                        style={{ ...cardBase }}
                        className="glass-hover"
                    >
                        <MapPin size={20} color="#6366f1" style={{ marginBottom: "0.75rem" }} />
                        <div style={{ fontSize: "0.75rem", color: "#475569", marginBottom: "0.25rem", letterSpacing: "0.06em" }}>LOCATION</div>
                        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#f1f5f9" }}>Negros Oriental, Philippines</div>
                        <div style={{ fontSize: "0.8rem", color: "#475569", marginTop: "0.375rem" }}>Remote · Worldwide</div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.17 }}
                        style={{ ...cardBase }}
                        className="glass-hover"
                    >
                        <Calendar size={20} color="#8b5cf6" style={{ marginBottom: "0.75rem" }} />
                        <div style={{ fontSize: "0.75rem", color: "#475569", marginBottom: "0.25rem", letterSpacing: "0.06em" }}>EXPERIENCE</div>
                        <div className="gradient-text" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "2rem", lineHeight: 1 }}>2+</div>
                        <div style={{ fontSize: "0.8rem", color: "#475569", marginTop: "0.375rem" }}>Years building real systems</div>
                    </motion.div>

                    {/* Projects */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.22 }}
                        style={{ ...cardBase }}
                        className="glass-hover"
                    >
                        <Trophy size={20} color="#f59e0b" style={{ marginBottom: "0.75rem" }} />
                        <div style={{ fontSize: "0.75rem", color: "#475569", marginBottom: "0.25rem", letterSpacing: "0.06em" }}>COMPLETED</div>
                        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "2rem", lineHeight: 1, color: "#fbbf24" }}>7+</div>
                        <div style={{ fontSize: "0.8rem", color: "#475569", marginTop: "0.375rem" }}>Deployed projects</div>
                    </motion.div>

                    {/* Mindset */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.27 }}
                        style={{ ...cardBase }}
                        className="glass-hover"
                    >
                        <Target size={20} color="#22c55e" style={{ marginBottom: "0.75rem" }} />
                        <div style={{ fontSize: "0.75rem", color: "#475569", marginBottom: "0.25rem", letterSpacing: "0.06em" }}>FOCUS</div>
                        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f1f5f9" }}>Production-First</div>
                        <div style={{ fontSize: "0.8rem", color: "#475569", marginTop: "0.375rem" }}>Built to be deployed</div>
                    </motion.div>

                    {/* Stack showcase — wide */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.32 }}
                        style={{ ...cardBase, gridColumn: "span 2" }}
                        className="glass-hover"
                    >
                        <Zap size={20} color="#38bdf8" style={{ marginBottom: "0.875rem" }} />
                        <div style={{ fontSize: "0.75rem", color: "#475569", marginBottom: "0.75rem", letterSpacing: "0.06em" }}>PRIMARY STACK</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {["ODBC", "Firebird", "SQLite", "Javascript", "React Native", "Next.js", "TypeScript", "MySQL", "Expo", "PHP", "C++", "Node.js"].map((t) => (
                                <span key={t} className="tech-pill">{t}</span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Marquee tech stack */}
            <div
                style={{
                    overflow: "hidden",
                    padding: "1.25rem 0",
                    borderTop: "1px solid rgba(255,255,255,0.04)",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    background: "rgba(255,255,255,0.012)",
                    marginTop: "2rem",
                }}
            >
                <div className="marquee" style={{ display: "inline-flex", gap: "3.5rem", whiteSpace: "nowrap" }}>
                    {[...STACK_DATA, ...STACK_DATA].map((s, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", opacity: 0.4, transition: "opacity 0.3s ease" }}>
                            <img
                                src={`https://cdn.simpleicons.org/${s.slug}/${s.color}`}
                                alt={s.name}
                                style={{ width: "18px", height: "18px", filter: "grayscale(1) brightness(1.2)" }}
                            />
                            <span style={{ color: "#475569", fontSize: "0.875rem", fontFamily: "JetBrains Mono, monospace", fontWeight: 500, letterSpacing: "0.02em" }}>
                                {s.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > div[style*="span 2"] { grid-column: span 1 !important; }
        }
      `}</style>
        </section>
    );
}
