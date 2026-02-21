"use client";

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
                        <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none", marginBottom: "0.75rem" }}>
                            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 12px rgba(99,102,241,0.3)" }}>
                                <Code2 size={17} color="white" />
                            </div>
                            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f1f5f9" }}>
                                Jaymar Aranas
                            </span>
                        </a>
                        <p style={{ color: "#334155", fontSize: "0.8rem", maxWidth: "220px", lineHeight: 1.6 }}>
                            Full‑Stack &amp; Mobile Developer from the Philippines.
                        </p>
                    </div>

                    {/* Nav */}
                    <nav style={{ display: "flex", gap: "0.25rem 2rem", flexWrap: "wrap" }}>
                        {NAV.map((l) => (
                            <a key={l.href} href={l.href} style={{ fontSize: "0.875rem", color: "#334155", textDecoration: "none", transition: "color 0.2s ease" }}>
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    {/* Socials + back to top */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.875rem" }}>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            {SOCIALS.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ width: "36px", height: "36px", borderRadius: "9px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#475569", textDecoration: "none", transition: "all 0.2s ease", cursor: "none" }}>
                                    <s.icon size={15} />
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.75rem", color: "#334155", background: "none", border: "none", cursor: "none", padding: 0 }}
                        >
                            <ArrowUp size={13} />
                            Back to top
                        </button>
                    </div>
                </div>

                {/* Bottom */}
                <div style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                    <p style={{ fontSize: "0.75rem", color: "#1e293b" }}>
                        © {year} Jaymar Aranas. All rights reserved.
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "#1e293b", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                        Built with <Heart size={11} color="#f43f5e" fill="#f43f5e" /> using Next.js &amp; Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
