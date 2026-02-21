"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Smartphone, Globe, Database, Building2, ArrowUpRight } from "lucide-react";

type Project = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    type: string;
    icon: React.ElementType;
    techStack: string[];
    gradientFrom: string;
    gradientTo: string;
    featured?: boolean;
    metrics?: { label: string; value: string }[];
};

const PROJECTS: Project[] = [
    {
        id: "iwater",
        title: "iWater",
        subtitle: "Municipal Water Billing System",
        description:
            "A comprehensive digital billing platform for local government water utilities. Replaced error-prone manual billing with an automated system handling thousands of consumer accounts, monthly billing computation, arrears tracking, and printed billing statements.",
        type: "Government System",
        icon: Building2,
        techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
        gradientFrom: "#0ea5e9",
        gradientTo: "#06b6d4",
        featured: true,
        metrics: [
            { label: "Consumer Accounts", value: "1000+" },
            { label: "Bills Per Month", value: "Automated" },
            { label: "Error Rate", value: "↓ 98%" },
        ],
    },
    {
        id: "bloom-mobile",
        title: "Bloom Mobile",
        subtitle: "Flower Shop E-Commerce App",
        description:
            "A cross-platform mobile application for a local flower shop. Features product browsing, custom bouquet ordering, real-time order tracking, payment integration, and a comprehensive admin panel for inventory and order management.",
        type: "Mobile App",
        icon: Smartphone,
        techStack: ["React Native", "Expo", "SQLite", "NativeWind"],
        gradientFrom: "#ec4899",
        gradientTo: "#f43f5e",
        featured: true,
        metrics: [
            { label: "Platforms", value: "iOS + Android" },
            { label: "Offline", value: "Supported" },
            { label: "Order Types", value: "3" },
        ],
    },
    {
        id: "bloom-web",
        title: "Bloom Dashboard",
        subtitle: "Flower Shop Admin Portal",
        description:
            "Full-featured web admin dashboard complementing the Bloom mobile app. Shop owners manage inventory, process orders, handle customer data, and generate financial reports from any browser.",
        type: "Web System",
        icon: Globe,
        techStack: ["Next.js", "React", "MySQL", "TypeScript", "Tailwind CSS"],
        gradientFrom: "#8b5cf6",
        gradientTo: "#7c3aed",
    },
    {
        id: "munipay",
        title: "MuniPay",
        subtitle: "Municipal Collection Platform",
        description:
            "Multi-service billing and collection platform for local government offices. Centralizes payment collection for multiple utility types with full treasurer-level reporting, receipt printing, and audit trail.",
        type: "Government System",
        icon: Building2,
        techStack: ["PHP", "MySQL", "jQuery", "Bootstrap"],
        gradientFrom: "#f59e0b",
        gradientTo: "#d97706",
    },
    {
        id: "stockwise",
        title: "StockWise",
        subtitle: "Inventory Management System",
        description:
            "CRUD-based inventory management for SMBs transitioning from spreadsheets. Role-based access, automated low-stock alerts, purchase orders, supplier management, and exportable business reports.",
        type: "Business System",
        icon: Database,
        techStack: ["React", "Next.js", "MySQL", "TypeScript"],
        gradientFrom: "#22c55e",
        gradientTo: "#16a34a",
    },
    {
        id: "postrack",
        title: "PosTrack",
        subtitle: "Point-of-Sale Mobile System",
        description:
            "Offline-capable POS system for local retailers. Transaction processing, receipt printing via Expo Print, daily sales summary, manual discounts, and multi-payment method support.",
        type: "Business System",
        icon: Database,
        techStack: ["React Native", "Expo", "SQLite", "Expo Print"],
        gradientFrom: "#6366f1",
        gradientTo: "#4f46e5",
    },
];

const FILTERS = ["All", "Government System", "Mobile App", "Web System", "Business System"];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}>
            {children}
        </motion.div>
    );
}

export default function Projects() {
    const [filter, setFilter] = useState("All");
    const filtered = PROJECTS.filter((p) => filter === "All" || p.type === filter);
    const featured = filtered.filter((p) => p.featured);
    const rest = filtered.filter((p) => !p.featured);

    return (
        <section
            id="projects"
            style={{ padding: "6rem 0", background: "#030712", position: "relative" }}
        >
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.15), transparent)" }} />
            <div style={{ position: "absolute", left: 0, bottom: "20%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>
                {/* Header */}
                <Reveal>
                    <div style={{ marginBottom: "3.5rem" }}>
                        <span className="section-label" style={{ marginBottom: "1rem", display: "inline-flex" }}>Work</span>
                        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f1f5f9", lineHeight: 1.15, letterSpacing: "-0.02em", marginTop: "0.75rem" }}>
                            Things I&apos;ve{" "}
                            <span className="gradient-text">built &amp; shipped</span>
                        </h2>
                    </div>
                </Reveal>

                {/* Filters */}
                <Reveal delay={0.1}>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "3rem" }}>
                        {FILTERS.map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                style={{
                                    padding: "0.4rem 1.1rem",
                                    borderRadius: "9999px",
                                    fontSize: "0.8125rem",
                                    fontWeight: 500,
                                    cursor: "none",
                                    transition: "all 0.25s ease",
                                    border: "1px solid",
                                    ...(filter === f
                                        ? { background: "#6366f1", borderColor: "#6366f1", color: "#fff", boxShadow: "0 0 16px rgba(99,102,241,0.35)" }
                                        : { background: "transparent", borderColor: "rgba(255,255,255,0.08)", color: "#64748b" }),
                                }}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </Reveal>

                {/* Featured projects (large) */}
                {featured.length > 0 && (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", gap: "1.25rem", marginBottom: "1.25rem" }} className="featured-grid">
                        {featured.map((p, i) => (
                            <FeaturedCard key={p.id} project={p} delay={i * 0.1} />
                        ))}
                    </div>
                )}

                {/* Rest (smaller) */}
                {rest.length > 0 && (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}>
                        {rest.map((p, i) => (
                            <SmallCard key={p.id} project={p} delay={i * 0.07} />
                        ))}
                    </div>
                )}
            </div>

            <style>{`
        @media (max-width: 768px) {
          .featured-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}

function FeaturedCard({ project, delay }: { project: Project; delay: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="project-card"
            style={{
                minHeight: "320px",
                transform: hovered ? "translateY(-6px)" : "translateY(0)",
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(${project.gradientFrom.replace("#", "").match(/../g)?.map(h => parseInt(h, 16)).join(",")},0.15)` : "none",
                borderColor: hovered ? `rgba(99,102,241,0.25)` : "rgba(255,255,255,0.05)",
            }}
        >
            {/* Gradient accent line */}
            <div style={{ height: "3px", background: `linear-gradient(to right, ${project.gradientFrom}, ${project.gradientTo})`, position: "absolute", top: 0, left: 0, right: 0 }} />

            {/* Glow bg */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "200px", background: `linear-gradient(180deg, rgba(99,102,241,0.04) 0%, transparent 100%)`, pointerEvents: "none" }} />

            <div style={{ padding: "2rem", position: "relative", zIndex: 1 }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                        <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: `linear-gradient(135deg, ${project.gradientFrom}22, ${project.gradientTo}22)`, border: `1px solid ${project.gradientFrom}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <project.icon size={20} color={project.gradientFrom} />
                        </div>
                        <div>
                            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#f1f5f9" }}>{project.title}</div>
                            <div style={{ fontSize: "0.8rem", color: "#475569", marginTop: "0.125rem" }}>{project.subtitle}</div>
                        </div>
                    </div>
                    <span style={{ fontSize: "0.7rem", padding: "0.25rem 0.75rem", borderRadius: "9999px", background: `${project.gradientFrom}18`, border: `1px solid ${project.gradientFrom}30`, color: project.gradientFrom, fontFamily: "JetBrains Mono, monospace", fontWeight: 500, whiteSpace: "nowrap" }}>
                        {project.type}
                    </span>
                </div>

                <p style={{ color: "#64748b", fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>{project.description}</p>

                {/* Metrics */}
                {project.metrics && (
                    <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem", padding: "1rem 1.25rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "0.75rem" }}>
                        {project.metrics.map((m) => (
                            <div key={m.label}>
                                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#f1f5f9", fontSize: "1.1rem" }}>{m.value}</div>
                                <div style={{ fontSize: "0.7rem", color: "#475569", marginTop: "0.125rem" }}>{m.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Tech */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                    {project.techStack.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: "0.75rem" }}>
                    <button id={`prj-github-${project.id}`} className="btn-secondary" style={{ padding: "0.6rem 1.25rem", fontSize: "0.8125rem", borderRadius: "0.75rem" }}>
                        <Github size={15} /> Code
                    </button>
                    <button id={`prj-demo-${project.id}`} style={{ display: "flex", alignItems: "center", gap: "0.375rem", padding: "0.6rem 1.25rem", fontSize: "0.8125rem", borderRadius: "0.75rem", background: `${project.gradientFrom}15`, border: `1px solid ${project.gradientFrom}30`, color: project.gradientFrom, cursor: "none", fontWeight: 600, transition: "all 0.2s ease" }}>
                        <ExternalLink size={15} /> Live Demo
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

function SmallCard({ project, delay }: { project: Project; delay: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="project-card"
            style={{
                transform: hovered ? "translateY(-4px)" : "translateY(0)",
                transition: "all 0.3s ease",
                borderColor: hovered ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.05)",
            }}
        >
            <div style={{ height: "2px", background: `linear-gradient(to right, ${project.gradientFrom}, ${project.gradientTo})`, position: "absolute", top: 0, left: 0, right: 0 }} />
            <div style={{ padding: "1.5rem", position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: `${project.gradientFrom}18`, border: `1px solid ${project.gradientFrom}28`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <project.icon size={17} color={project.gradientFrom} />
                    </div>
                    <ArrowUpRight size={15} color={hovered ? "#6366f1" : "#334155"} style={{ transition: "color 0.2s ease" }} />
                </div>

                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#f1f5f9", marginBottom: "0.25rem" }}>{project.title}</h3>
                <p style={{ fontSize: "0.75rem", color: "#475569", marginBottom: "0.875rem" }}>{project.subtitle}</p>
                <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    {project.description.slice(0, 140)}...
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                    {project.techStack.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                </div>

                <div style={{ display: "flex", gap: "0.625rem" }}>
                    <button id={`prj-gh-${project.id}`} className="btn-secondary" style={{ flex: 1, padding: "0.5rem", fontSize: "0.8rem", borderRadius: "0.625rem" }}>
                        <Github size={14} /> Code
                    </button>
                    <button id={`prj-dm-${project.id}`} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.3rem", padding: "0.5rem", fontSize: "0.8rem", borderRadius: "0.625rem", background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.18)", color: "#818cf8", cursor: "none", fontWeight: 600 }}>
                        <ExternalLink size={14} /> Demo
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
