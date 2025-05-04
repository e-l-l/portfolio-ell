"use client";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(70, 70, 85, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(70, 70, 85, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "center center",
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 80%)",
        }}
      />
    </div>
  );
}
