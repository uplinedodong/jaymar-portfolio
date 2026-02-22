"use client";

import Image from "next/image";
import { Github, Facebook, Mail, Code2, Heart, ArrowUp } from "lucide-react";

const NAV = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" },
];

const SOCIALS = [
    { icon: Github, href: "https://github.com/uplinedodong", label: "GitHub" },
    { icon: Facebook, href: "https://facebook.com/xuplinedd", label: "Facebook" },
    { icon: Mail, href: "mailto:101aranasjaymar@email.com", label: "Email" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={{ background: "#020610", borderTop: "1px solid rgba(255,255,255,0.04)", position: "relative" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem 2rem" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2.5rem" }}>

                    {/* Brand */}
                    <div>
                        <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none", marginBottom: "0.875rem" }}>
                            <Image
                                src="/logo.png"
                                alt="Jaymar G. Aranas"
                                width={34}
                                height={34}
                                style={{
                                    borderRadius: "10px",
                                    objectFit: "cover",
                                    boxShadow: "0 0 16px rgba(99,102,241,0.2)",
                                    flexShrink: 0,
                                }}
                            />
                            <div>
                                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f1f5f9", lineHeight: 1.1 }}>Jaymar G. Aranas</div>
                                <div style={{ fontSize: "0.65rem", color: "#475569", letterSpacing: "0.04em", fontFamily: "JetBrains Mono, monospace" }}>Full-stack · Mobile Dev</div>
                            </div>
                        </a>
                        <p style={{ color: "#475569", fontSize: "0.8rem", maxWidth: "220px", lineHeight: 1.6 }}>
                            Senior‑level engineering for web and mobile platforms.
                        </p>
                    </div>

                    {/* Nav */}
                    <nav style={{ display: "flex", gap: "0.25rem 2rem", flexWrap: "wrap" }}>
                        {NAV.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                style={{
                                    fontSize: "0.875rem",
                                    color: "#64748b",
                                    textDecoration: "none",
                                    transition: "color 0.2s ease"
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#f1f5f9")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    {/* Socials + back to top */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.875rem" }}>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    style={{
                                        width: "36px", height: "36px", borderRadius: "9px",
                                        background: "rgba(255,255,255,0.03)",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        color: "#64748b", textDecoration: "none",
                                        transition: "all 0.2s ease", cursor: "none"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = "#f1f5f9";
                                        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = "#64748b";
                                        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                                    }}
                                >
                                    <s.icon size={15} />
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            style={{
                                display: "flex", alignItems: "center", gap: "0.375rem",
                                fontSize: "0.75rem", color: "#64748b",
                                background: "none", border: "none", cursor: "none",
                                padding: 0, transition: "color 0.2s ease"
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#f1f5f9")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                        >
                            <ArrowUp size={13} />
                            Back to top
                        </button>
                    </div>
                </div>

                {/* Bottom */}
                <div style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <p style={{ fontSize: "0.75rem", color: "#475569", letterSpacing: "0.02em" }}>
                        © {year} Jaymar G. Aranas. Precision-engineered in the Philippines.
                    </p>
                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        <span style={{ fontSize: "0.75rem", color: "#1e293b", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
                            Availability: Q{Math.floor(new Date().getMonth() / 3) + 1} {new Date().getFullYear()}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
