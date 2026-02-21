"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
            const ids = links.map((l) => l.href.slice(1));
            for (const id of [...ids].reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY + 100 >= el.offsetTop) {
                    setActive(id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
    }, [open]);

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    padding: scrolled ? "0.75rem 0" : "1.5rem 0",
                    transition: "all 0.4s ease",
                    ...(scrolled && {
                        background: "rgba(3, 7, 18, 0.85)",
                        backdropFilter: "blur(24px) saturate(180%)",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }),
                }}
            >
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {/* Logo */}
                    <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}>
                        <div style={{
                            width: "36px", height: "36px", borderRadius: "10px",
                            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            boxShadow: "0 0 16px rgba(99,102,241,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                            flexShrink: 0,
                        }}>
                            <span style={{ color: "white", fontSize: "0.875rem", fontWeight: 700, fontFamily: "JetBrains Mono, monospace" }}>JA</span>
                        </div>
                        <div>
                            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f1f5f9", lineHeight: 1.1 }}>Jaymar Aranas</div>
                            <div style={{ fontSize: "0.65rem", color: "#475569", letterSpacing: "0.06em", fontFamily: "JetBrains Mono, monospace" }}>full-stack · mobile</div>
                        </div>
                    </a>

                    {/* Desktop nav */}
                    <nav style={{ display: "none", alignItems: "center", gap: "0.25rem" }} className="md-flex">
                        {links.map((link) => {
                            const isActive = active === link.href.slice(1);
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    style={{
                                        position: "relative",
                                        padding: "0.5rem 1rem",
                                        fontSize: "0.875rem",
                                        fontWeight: 500,
                                        color: isActive ? "#a5b4fc" : "#64748b",
                                        textDecoration: "none",
                                        borderRadius: "0.625rem",
                                        transition: "color 0.2s ease",
                                    }}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                borderRadius: "0.625rem",
                                                background: "rgba(99,102,241,0.08)",
                                                border: "1px solid rgba(99,102,241,0.15)",
                                            }}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                        />
                                    )}
                                    <span style={{ position: "relative", zIndex: 1 }}>{link.label}</span>
                                </a>
                            );
                        })}
                        <a
                            href="#contact"
                            className="btn-primary"
                            style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem", borderRadius: "0.625rem", marginLeft: "0.5rem" }}
                        >
                            Hire Me →
                        </a>
                    </nav>

                    {/* Mobile burger */}
                    <button
                        id="mobile-menu-btn"
                        onClick={() => setOpen(!open)}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "40px",
                            height: "40px",
                            borderRadius: "10px",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "#94a3b8",
                            cursor: "none",
                        }}
                        className="md-hidden"
                        aria-label="Menu"
                    >
                        {open ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 40,
                            background: "rgba(3, 7, 18, 0.98)",
                            backdropFilter: "blur(24px)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "0.5rem",
                        }}
                    >
                        {links.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.07 }}
                                onClick={() => setOpen(false)}
                                style={{
                                    fontSize: "2rem",
                                    fontWeight: 700,
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    color: "#94a3b8",
                                    textDecoration: "none",
                                    padding: "0.75rem 2rem",
                                }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: links.length * 0.07 }}
                            onClick={() => setOpen(false)}
                            className="btn-primary"
                            style={{ marginTop: "1.5rem" }}
                        >
                            Hire Me →
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
          .md-hidden { display: none !important; }
        }
      `}</style>
        </>
    );
}
