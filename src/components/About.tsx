"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import NeuralMesh from "./NeuralMesh";

function PortraitStage() {
  return (
    <Reveal variant="up" delay={60} className="relative w-full">
      <div className="about-portrait relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:max-w-none">
        <div className="about-portrait-stage" aria-hidden="true">
          <div className="about-portrait-bloom" />
          <div className="about-portrait-bloom about-portrait-bloom-secondary" />
          <div className="about-portrait-ring" />
          <div className="about-portrait-ring about-portrait-ring-inner" />
          <span className="about-accent-glyph about-accent-a">&lt;/&gt;</span>
          <span className="about-accent-glyph about-accent-b">=&gt;</span>
        </div>

        <div className="about-portrait-figure relative z-10">
          <Image
            src="/myimage/ahmad-akmal.png"
            alt="Muhammad Ahmad"
            width={720}
            height={900}
            priority
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 420px"
            className="about-portrait-img relative z-10 mx-auto h-auto w-full object-contain object-bottom select-none"
          />
          <div className="about-portrait-fade" aria-hidden="true" />
        </div>
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="about" className="section-shell relative overflow-hidden">
      <NeuralMesh variant="nodes" className="opacity-50" />
      <div
        className="about-section-glow pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] gap-8 sm:gap-10 lg:gap-14 items-center">
          <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
            <PortraitStage />
          </div>

          <div className="order-2 pb-2 min-w-0">
            <Reveal>
              <p className="eyebrow mb-3 sm:mb-4">About</p>
              <h2 className="section-heading mb-6 sm:mb-8">
                Bridging AI research
                <br />
                <span className="text-blue-400">and production systems</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-4 sm:space-y-5 text-text-secondary text-[15px] sm:text-[17px] leading-relaxed">
                <p>
                  I work across traditional AI (computer vision, deep learning) and
                  modern generative systems: autonomous agents, RAG pipelines, and
                  voice AI. The goal is never to bolt on an LLM for show. It is to
                  build something that removes real work: fewer manual steps, faster
                  access to data, interfaces that hold up under production load.
                </p>
                <p>
                  I own the full stack, from model training and evaluation through
                  API design, real-time pipelines, and the frontend layer. I have
                  shipped platforms in healthcare, voice AI, and document
                  intelligence, each one coordinating multiple models, data sources,
                  and third-party integrations under tight operational constraints.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
