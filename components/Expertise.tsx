"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, Globe, Database, Layers, GitBranch, Cpu } from "lucide-react";

const AREAS = [
    {
        icon: Globe,
        title: "Full-Stack Web",
        desc: "End-to-end systems from database schema to polished UI — Next.js, React, PHP, MySQL.",
        tags: ["Next.js", "React", "PHP", "MySQL", "REST API"],
        color: "#6366f1",
        rgb: "99,102,241",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        desc: "Cross-platform apps with React Native & Expo. Offline support, native UX, SQLite storage.",
        tags: ["React Native", "Expo", "SQLite", "NativeWind"],
        color: "#ec4899",
        rgb: "236,72,153",
    },
    {
        icon: Database,
        title: "Database Design",
        desc: "Normalized schemas, optimized queries, and seamless app integration with MySQL & SQLite.",
        tags: ["MySQL", "SQLite", "Schema Design", "Query Optimization"],
        color: "#38bdf8",
        rgb: "56,189,248",
    },
    {
        icon: Layers,
        title: "Billing & Gov Systems",
        desc: "Municipal billing, government LGU platforms, payment tracking, and reconciliation reports.",
        tags: ["LGU Systems", "Billing", "CRUD", "Reports"],
        color: "#f59e0b",
        rgb: "245,158,11",
    },
    {
        icon: Cpu,
        title: "UI/UX Implementation",
        desc: "Component-driven, accessible, responsive interfaces with micro-animations and Tailwind CSS.",
        tags: ["Tailwind CSS", "Animations", "Responsive", "Accessible"],
        color: "#22c55e",
        rgb: "34,197,94",
    },
    {
        icon: GitBranch,
        title: "Deploy & Maintain",
        desc: "Production deployment to Vercel and shared hosts. Git workflow, bug fixing, iterative delivery.",
        tags: ["Vercel", "Git", "CI/CD", "Maintenance"],
        color: "#a78bfa",
        rgb: "167,139,250",
    },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}>
            {children}
        </motion.div>
    );
}

export default function Expertise() {
    return (
        <section
            id="expertise"
            style={{ padding: "6rem 0", background: "linear-gradient(180deg, #030712 0%, #050b18 50%, #030712 100%)", position: "relative", overflow: "hidden" }}
        >
            <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.15), transparent)" }} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>
                {/* Header */}
                <Reveal>
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <span className="section-label" style={{ marginBottom: "1rem", display: "inline-flex" }}>Expertise</span>
                        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f1f5f9", lineHeight: 1.15, letterSpacing: "-0.02em", marginTop: "0.875rem" }}>
                            What I <span className="gradient-text">do best</span>
                        </h2>
                        <p style={{ color: "#475569", fontSize: "1rem", marginTop: "0.875rem", maxWidth: "480px", margin: "0.875rem auto 0" }}>
                            Six core disciplines I bring to every engagement.
                        </p>
                    </div>
                </Reveal>

                {/* Cards */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }} className="expertise-grid">
                    {AREAS.map((area, i) => (
                        <ExpertiseCard key={area.title} area={area} delay={i * 0.07} />
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 960px) {
          .expertise-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .expertise-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}

function ExpertiseCard({ area, delay }: { area: typeof AREAS[0]; delay: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            style={{
                padding: "1.75rem",
                borderRadius: "1.25rem",
                background: "rgba(8, 12, 24, 0.7)",
                border: "1px solid rgba(255,255,255,0.05)",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                position: "relative",
                overflow: "hidden",
            }}
            className="glass-hover"
        >
            {/* Subtle glow in corner */}
            <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "120px", height: "120px", background: `radial-gradient(circle, rgba(${area.rgb},0.12) 0%, transparent 70%)`, pointerEvents: "none" }} />

            {/* Icon */}
            <div style={{
                width: "48px", height: "48px", borderRadius: "14px",
                background: `linear-gradient(135deg, rgba(${area.rgb},0.15), rgba(${area.rgb},0.05))`,
                border: `1px solid rgba(${area.rgb},0.2)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "1.25rem",
                position: "relative",
            }}>
                <area.icon size={22} color={area.color} />
            </div>

            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.0625rem", color: "#f1f5f9", marginBottom: "0.625rem" }}>
                {area.title}
            </h3>

            <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                {area.desc}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {area.tags.map((tag) => (
                    <span key={tag} style={{
                        fontSize: "0.68rem", padding: "0.18rem 0.6rem", borderRadius: "9999px",
                        background: `rgba(${area.rgb},0.08)`,
                        border: `1px solid rgba(${area.rgb},0.18)`,
                        color: area.color,
                        fontFamily: "JetBrains Mono, monospace",
                        fontWeight: 500,
                    }}>
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
