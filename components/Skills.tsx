"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Skill = { name: string; icon: string; slug?: string; rgb: string; color: string; category: string };

const SKILLS: Skill[] = [
    // Languages
    // Languages
    { name: "JavaScript", icon: "JS", slug: "javascript", rgb: "247,223,30", color: "#f7df1e", category: "Language" },
    { name: "TypeScript", icon: "TS", slug: "typescript", rgb: "49,120,198", color: "#3178c6", category: "Language" },
    { name: "PHP", icon: "PHP", slug: "php", rgb: "119,123,179", color: "#777bb3", category: "Language" },
    { name: "Java", icon: "☕", slug: "java", rgb: "237,139,0", color: "#ED8B00", category: "Language" },
    { name: "VB.NET", icon: "VB", slug: "visualbasic", rgb: "0,112,192", color: "#0070c0", category: "Language" },
    { name: "C#", icon: "C#", slug: "csharp", rgb: "145,121,228", color: "#9179e4", category: "Language" },
    { name: "C++", icon: "C++", slug: "cplusplus", rgb: "0,89,155", color: "#00599b", category: "Language" },
    { name: "PowerScript", icon: "PB", rgb: "229,29,36", color: "#e51d24", category: "Language" },
    { name: "Python", icon: "PY", slug: "python", rgb: "55,115,165", color: "#3773a5", category: "Language" },
    { name: "HTML5", icon: "HTML", slug: "html5", rgb: "227,76,38", color: "#e34c26", category: "Language" },
    { name: "CSS3", icon: "CSS", slug: "css3", rgb: "21,114,182", color: "#1572b6", category: "Language" },
    { name: "SQL", icon: "SQL", slug: "mysql", rgb: "56,189,248", color: "#38bdf8", category: "Language" },
    // Frameworks
    { name: "Laravel", icon: "L", slug: "laravel", rgb: "255,45,32", color: "#ff2d20", category: "Framework" },
    { name: "React", icon: "⚛", slug: "react", rgb: "97,218,251", color: "#61dafb", category: "Framework" },
    { name: "React Native", icon: "📱", slug: "react", rgb: "97,218,251", color: "#61dafb", category: "Framework" },
    { name: "Next.js", icon: "▲", slug: "nextdotjs", rgb: "255,255,255", color: "#ffffff", category: "Framework" },
    { name: "Expo", icon: "◉", slug: "expo", rgb: "255,255,255", color: "#ffffff", category: "Framework" },
    { name: "Tailwind CSS", icon: "🌊", slug: "tailwindcss", rgb: "56,189,248", color: "#38bdf8", category: "Framework" },
    { name: "Bootstrap", icon: "B", slug: "bootstrap", rgb: "121,82,179", color: "#7952b3", category: "Framework" },
    // Databases
    { name: "MySQL", icon: "🐬", slug: "mysql", rgb: "68,121,161", color: "#4479a1", category: "Database" },
    { name: "Firebase", icon: "🔥", slug: "firebase", rgb: "255,202,40", color: "#FFCA28", category: "Database" },
    { name: "MongoDB", icon: "🍃", slug: "mongodb", rgb: "71,162,72", color: "#47A248", category: "Database" },
    { name: "Firebird", icon: "🦅", slug: "firebird", rgb: "228,34,36", color: "#E42224", category: "Database" },
    { name: "SQLite", icon: "🗄", slug: "sqlite", rgb: "0,61,139", color: "#003d8b", category: "Database" },
    // Tools
    { name: "Postman", icon: "🚀", slug: "postman", rgb: "255,108,55", color: "#FF6C37", category: "Tool" },
    { name: "ODBC", icon: "🔌", rgb: "56,128,232", color: "#3880e8", category: "Tool" },
    { name: "Git", icon: "⎇", slug: "git", rgb: "240,80,50", color: "#f05032", category: "Tool" },
    { name: "REST API", icon: "🔌", rgb: "34,197,94", color: "#22c55e", category: "Tool" },
    { name: "System Design", icon: "🏗", rgb: "167,139,250", color: "#a78bfa", category: "Tool" },
    { name: "CRUD Apps", icon: "⚙", rgb: "251,191,36", color: "#fbbf24", category: "Tool" },
];

const CATEGORIES = ["All", "Language", "Framework", "Database", "Tool"];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}>
            {children}
        </motion.div>
    );
}

export default function Skills() {
    const [activeCat, setActiveCat] = useState("All");
    const filtered = SKILLS.filter((s) => activeCat === "All" || s.category === activeCat);

    return (
        <section
            id="skills"
            style={{ padding: "6rem 0", position: "relative", background: "linear-gradient(180deg, #030712 0%, #050b18 100%)" }}
        >
            <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />

            <div style={{ position: "absolute", right: 0, top: "30%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>
                <Reveal>
                    <div style={{ marginBottom: "3.5rem" }}>
                        <span className="section-label" style={{ marginBottom: "1rem", display: "inline-flex" }}>Skills & Tools</span>
                        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f1f5f9", lineHeight: 1.15, letterSpacing: "-0.02em", marginTop: "0.75rem" }}>
                            My <span className="gradient-text">technical arsenal</span>
                        </h2>
                        <p style={{ color: "#475569", fontSize: "1rem", marginTop: "0.875rem", maxWidth: "480px" }}>
                            A comprehensive overview of the technologies I use to build scalable, production-ready applications.
                        </p>
                    </div>
                </Reveal>

                {/* Filter */}
                <Reveal delay={0.1}>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCat(cat)}
                                style={{
                                    padding: "0.375rem 1rem",
                                    borderRadius: "9999px",
                                    fontSize: "0.8125rem",
                                    fontWeight: 500,
                                    cursor: "none",
                                    transition: "all 0.2s ease",
                                    border: "1px solid",
                                    ...(activeCat === cat
                                        ? { background: "#6366f1", borderColor: "#6366f1", color: "white", boxShadow: "0 0 16px rgba(99,102,241,0.4)" }
                                        : { background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)", color: "#64748b" }),
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </Reveal>

                {/* Skill Grid */}
                <motion.div
                    layout
                    style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "0.875rem" }}
                >
                    {filtered.map((skill, i) => (
                        <SkillCard key={skill.name} skill={skill} delay={i * 0.04} />
                    ))}
                </motion.div>

                {/* Legend / experience bars */}
                <Reveal delay={0.4}>
                    <div style={{ marginTop: "4rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
                        {[
                            { label: "Ecosystem", pct: 90, color: "#61dafb" },
                            { label: "Backend & APIs", pct: 89, color: "#22c55e" },
                            { label: "Mobile Dev", pct: 93, color: "#a78bfa" },
                            { label: "Database Design", pct: 85, color: "#38bdf8" },
                        ].map((bar) => (
                            <ExperienceBar key={bar.label} {...bar} />
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

function SkillCard({ skill, delay }: { skill: Skill; delay: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const [hovered, setHovered] = useState(false);
    const [imgStatus, setImgStatus] = useState<'loading' | 'success' | 'error'>('loading');

    // Simple icons colors should be lowercase without #
    const iconColor = skill.color.replace("#", "").toLowerCase();
    const iconUrl = skill.slug
        ? `https://cdn.simpleicons.org/${skill.slug}/${iconColor}`
        : null;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="skill-card"
            style={{
                "--skill-color": `rgba(${skill.rgb},0.14)`,
                "--skill-rgb": skill.rgb,
            } as React.CSSProperties}
        >
            {/* Icon */}
            <div style={{
                width: "46px", height: "46px", borderRadius: "12px",
                background: `rgba(${skill.rgb},0.1)`,
                border: `1px solid rgba(${skill.rgb},0.2)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                ...(hovered ? { background: `rgba(${skill.rgb},0.2)`, boxShadow: `0 0 16px rgba(${skill.rgb},0.3)` } : {}),
            }}>
                {iconUrl && imgStatus !== 'error' && (
                    <img
                        src={iconUrl}
                        alt={skill.name}
                        onLoad={() => setImgStatus('success')}
                        onError={() => setImgStatus('error')}
                        style={{
                            width: "28px",
                            height: "28px",
                            objectFit: "contain",
                            filter: hovered ? "brightness(1.2) saturate(1.2)" : "none",
                            transition: "all 0.3s opacity",
                            opacity: imgStatus === 'success' ? 1 : 0,
                            position: imgStatus === 'success' ? 'relative' : 'absolute',
                        }}
                    />
                )}

                {(imgStatus === 'error' || !iconUrl) && (
                    <span style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 800,
                        fontSize: skill.icon.length > 3 ? "0.65rem" : "0.95rem",
                        color: skill.color,
                        textAlign: "center",
                        display: "block",
                        letterSpacing: "-0.02em"
                    }}>
                        {skill.icon}
                    </span>
                )}

                {imgStatus === 'loading' && iconUrl && (
                    <div className="shimmer" style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.03)" }} />
                )}
            </div>

            {/* Name */}
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: hovered ? "#f1f5f9" : "#94a3b8", textAlign: "center", transition: "color 0.2s ease", lineHeight: 1.3 }}>
                {skill.name}
            </span>

            {/* Category label */}
            <span style={{ fontSize: "0.65rem", color: "#334155", letterSpacing: "0.04em", fontFamily: "JetBrains Mono, monospace" }}>
                {skill.category}
            </span>
        </motion.div>
    );
}

function ExperienceBar({ label, pct, color }: { label: string; pct: number; color: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <div ref={ref} style={{ padding: "1rem 1.25rem", background: "rgba(8,12,24,0.6)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "0.875rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.625rem" }}>
                <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#e2e8f0" }}>{label}</span>
                <span style={{ fontSize: "0.8rem", fontFamily: "JetBrains Mono, monospace", color: "#475569" }}>{pct}%</span>
            </div>
            <div style={{ height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "9999px", overflow: "hidden" }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${pct}%` } : {}}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    style={{ height: "100%", borderRadius: "9999px", background: `linear-gradient(to right, ${color}99, ${color})` }}
                />
            </div>
        </div>
    );
}
