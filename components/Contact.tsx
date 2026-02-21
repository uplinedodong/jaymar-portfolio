"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Facebook, Send, CheckCircle, MapPin, Clock, ArrowRight } from "lucide-react";

const SOCIALS = [
    { id: "c-email", icon: Mail, label: "Email", value: "101aranasjaymar@gmail.com", href: "mailto:101aranasjaymar@gmail.com", color: "#6366f1" },
    { id: "c-github", icon: Github, label: "GitHub", value: "github.com/uplinedodong", href: "https://github.com/uplinedodong", color: "#94a3b8" },
    { id: "c-facebook", icon: Facebook, label: "Facebook", value: "Jaymar G. Aranas", href: "https://facebook.com/xuplinedd", color: "#3b82f6" },
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

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => { setLoading(false); setSent(true); }, 1600);
    };

    return (
        <section
            id="contact"
            style={{ padding: "6rem 0", background: "#030712", position: "relative", overflow: "hidden" }}
        >
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.15), transparent)" }} />
            <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: "700px", height: "700px", background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>
                <Reveal>
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <span className="section-label" style={{ marginBottom: "1rem", display: "inline-flex" }}>Contact</span>
                        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f1f5f9", lineHeight: 1.15, letterSpacing: "-0.02em", marginTop: "0.875rem" }}>
                            Let&apos;s build something{" "}
                            <span className="gradient-text">great together</span>
                        </h2>
                        <p style={{ color: "#475569", fontSize: "1rem", marginTop: "0.875rem", maxWidth: "460px", margin: "0.875rem auto 0" }}>
                            Open to freelance, full-time, and collaboration. Let&apos;s talk.
                        </p>
                    </div>
                </Reveal>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "2rem", alignItems: "start" }} className="contact-grid">

                    {/* Left: info */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <Reveal delay={0.1}>
                            {/* CTA card */}
                            <div style={{ padding: "2rem", borderRadius: "1.25rem", background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05))", border: "1px solid rgba(99,102,241,0.2)", marginBottom: "0.5rem" }}>
                                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#f1f5f9", marginBottom: "0.625rem" }}>
                                    Ready to collaborate?
                                </div>
                                <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                                    Whether you need a billing system, mobile app, or full-stack web platform — I turn ideas into production-ready software.
                                </p>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.875rem", color: "#94a3b8" }}>
                                        <MapPin size={14} color="#6366f1" />
                                        Philippines · Remote Worldwide
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.875rem", color: "#94a3b8" }}>
                                        <Clock size={14} color="#6366f1" />
                                        Response within 24 hours
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {SOCIALS.map((s, i) => (
                            <Reveal key={s.id} delay={0.15 + i * 0.08}>
                                <a
                                    id={s.id}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        padding: "1rem 1.25rem",
                                        borderRadius: "1rem",
                                        background: "rgba(8,12,24,0.6)",
                                        border: "1px solid rgba(255,255,255,0.05)",
                                        textDecoration: "none",
                                        transition: "all 0.25s ease",
                                        cursor: "none",
                                    }}
                                    className="glass-hover"
                                >
                                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `${s.color}15`, border: `1px solid ${s.color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <s.icon size={16} color={s.color} />
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ fontSize: "0.7rem", color: "#475569", marginBottom: "0.125rem", letterSpacing: "0.06em" }}>{s.label}</div>
                                        <div style={{ fontSize: "0.85rem", color: "#94a3b8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.value}</div>
                                    </div>
                                    <ArrowRight size={14} color="#334155" />
                                </a>
                            </Reveal>
                        ))}
                    </div>

                    {/* Right: Form */}
                    <Reveal delay={0.2}>
                        <div style={{ padding: "2rem", borderRadius: "1.25rem", background: "rgba(8,12,24,0.7)", border: "1px solid rgba(255,255,255,0.05)" }}>
                            {sent ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{ textAlign: "center", padding: "3rem 1rem" }}
                                >
                                    <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(34,197,94,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                                        <CheckCircle size={30} color="#22c55e" />
                                    </div>
                                    <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.375rem", color: "#f1f5f9", marginBottom: "0.625rem" }}>
                                        Message received! 🎉
                                    </h3>
                                    <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>I&apos;ll get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                                        style={{ padding: "0.625rem 1.5rem", borderRadius: "0.75rem", background: "transparent", border: "1px solid rgba(99,102,241,0.3)", color: "#818cf8", fontSize: "0.875rem", fontWeight: 600, cursor: "none" }}
                                    >
                                        Send another →
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
                                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.125rem", color: "#f1f5f9", marginBottom: "0.25rem" }}>
                                        Send a Message
                                    </div>

                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                                        <div>
                                            <label style={{ display: "block", fontSize: "0.8rem", color: "#64748b", marginBottom: "0.5rem", fontWeight: 500 }} htmlFor="name">Name</label>
                                            <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Dodong Jaymar" className="form-input" />
                                        </div>
                                        <div>
                                            <label style={{ display: "block", fontSize: "0.8rem", color: "#64748b", marginBottom: "0.5rem", fontWeight: 500 }} htmlFor="email">Email</label>
                                            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="dodongjaymar@gmail.com" className="form-input" />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ display: "block", fontSize: "0.8rem", color: "#64748b", marginBottom: "0.5rem", fontWeight: 500 }} htmlFor="subject">Subject</label>
                                        <input id="subject" name="subject" type="text" required value={form.subject} onChange={handleChange} placeholder="Project inquiry / Freelance work / Collaboration" className="form-input" />
                                    </div>

                                    <div>
                                        <label style={{ display: "block", fontSize: "0.8rem", color: "#64748b", marginBottom: "0.5rem", fontWeight: 500 }} htmlFor="message">Message</label>
                                        <textarea id="message" name="message" required rows={6} value={form.message} onChange={handleChange} placeholder="Describe your project, timeline, and what you're looking for..." className="form-input" />
                                    </div>

                                    <motion.button
                                        id="contact-submit"
                                        type="submit"
                                        disabled={loading}
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="btn-primary"
                                        style={{ width: "100%", opacity: loading ? 0.7 : 1 }}
                                    >
                                        {loading ? (
                                            <>
                                                <div style={{ width: "16px", height: "16px", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
                                                Sending...
                                            </>
                                        ) : (
                                            <><Send size={16} /> Send Message</>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </Reveal>
                </div>
            </div>

            <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
        </section>
    );
}
