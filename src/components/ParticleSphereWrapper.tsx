"use client";

import dynamic from "next/dynamic";

// Dynamic import with no SSR in this client component
const ParticleSphere = dynamic(() => import("@/components/ParticleSphere"), {
  ssr: false,
});

export default function ParticleSphereWrapper() {
  return <ParticleSphere />;
}
