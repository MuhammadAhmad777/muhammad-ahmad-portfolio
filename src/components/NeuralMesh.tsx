interface NeuralMeshProps {
  className?: string;
  variant?: "grid" | "nodes";
}

export default function NeuralMesh({
  className = "",
  variant = "grid",
}: NeuralMeshProps) {
  if (variant === "nodes") {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.12]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="node-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="40" cy="40" r="1" fill="#4F8BFF" opacity="0.6" />
              <line
                x1="40"
                y1="40"
                x2="80"
                y2="40"
                stroke="#4F8BFF"
                strokeWidth="0.5"
                opacity="0.15"
              />
              <line
                x1="40"
                y1="40"
                x2="40"
                y2="80"
                stroke="#4F8BFF"
                strokeWidth="0.5"
                opacity="0.15"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#node-grid)" />
        </svg>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl animate-pulse-slow animation-delay-2000" />
      </div>
    );
  }

  return (
    <div
      className={`absolute inset-0 neural-mesh pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
