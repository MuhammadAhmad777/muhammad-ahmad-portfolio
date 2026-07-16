"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/data";
import Reveal from "./Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const formspreeFormId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

const inputClasses =
  "w-full px-4 py-3 rounded-xl bg-navy-800/60 border border-white/8 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200 text-[15px]";

const contactMethods = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    Icon: MailIcon,
    external: false,
  },
  {
    label: "GitHub",
    value: "MuhammadAhmad777",
    href: siteConfig.github,
    Icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Muhammad Ahmad",
    href: siteConfig.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!formspreeFormId) {
      setError("Contact form is not configured yet. Please email me directly.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    setLoading(true);

    try {
      const response = await fetch(
        `https://formspree.io/f/${formspreeFormId}`,
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        },
      );

      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(result?.error ?? "Failed to send message. Please try again.");
      }

      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="eyebrow mb-4">Get in Touch</p>
          <h2 className="section-heading mb-4">
            Let&apos;s build something
            <span className="text-blue-400"> together</span>
          </h2>
          <p className="text-text-secondary mb-12 max-w-xl text-[17px]">
            I&apos;m open to remote AI/ML engineering roles and interesting
            collaboration opportunities. If you have a project that needs
            production-grade AI engineering, let&apos;s talk.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-3" delay={100} variant="up">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Name"
                    required
                    disabled={loading}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    required
                    disabled={loading}
                    className={inputClasses}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                  disabled={loading}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required
                  disabled={loading}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {error ? (
                <p className="text-sm text-red-400" role="alert">
                  {error}
                </p>
              ) : null}

              {submitted ? (
                <p className="text-sm text-emerald-400" role="status">
                  Thanks! Your message was sent. I&apos;ll get back to you soon.
                </p>
              ) : null}

              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-blue-500 text-white font-semibold text-sm hover:bg-blue-400 transition-colors duration-200 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading || submitted}
              >
                {loading
                  ? "Sending..."
                  : submitted
                    ? "Message Sent!"
                    : "Send Message"}
              </button>
            </form>
          </Reveal>

          <div className="lg:col-span-2 space-y-5">
            {contactMethods.map(({ label, value, href, Icon, external }, i) => (
              <Reveal key={label} delay={140 + i * 80} variant="right">
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center gap-4 glass-panel rounded-xl px-5 py-4 hover:border-blue-500/25 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-text-secondary">{label}</p>
                    <p className="text-sm font-medium text-text-primary group-hover:text-blue-400 transition-colors truncate">
                      {value}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
