import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Reveal className="mx-auto max-w-3xl px-6">
        <p className="eyebrow mb-4">About</p>
        <h2 className="section-heading mb-8">
          Bridging AI research
          <br />
          <span className="text-blue-400">and production systems</span>
        </h2>

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
    </section>
  );
}
