"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import NeuralMesh from "./NeuralMesh";

function PortraitStage() {
  return (
    <Reveal variant="left" delay={60} className="relative">
      <div className="about-portrait relative mx-auto max-w-md lg:max-w-none">
        {/* Atmospheric stage behind the figure */}
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
            className="about-portrait-img relative z-10 mx-auto h-auto w-full max-w-[420px] object-contain object-bottom select-none"
          />
          <div className="about-portrait-fade" aria-hidden="true" />
        </div>
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <NeuralMesh variant="nodes" className="opacity-50" />
      <div
        className="about-section-glow pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 items-end lg:items-center">
          <PortraitStage />

          <div className="pb-2">
            <Reveal>
              <p className="eyebrow mb-4">About</p>
              <h2 className="section-heading mb-8">
                Bridging AI research
                <br />
                <span className="text-blue-400">and production systems</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-5 text-text-secondary text-[17px] leading-relaxed">
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
