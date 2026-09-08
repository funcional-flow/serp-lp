"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/widgets/Hero";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <main>
        <section>
          <Hero
            image="/Hero/serp-marca-abreviada-amarela.png"
            background="bg-purple1"
          />
        </section>
        <section>
          <Hero
            image="/Hero/serp-marca-abreviada-roxa.png"
            background="bg-yellow1"
          />
        </section>
      </main>
    </>
  );
}
