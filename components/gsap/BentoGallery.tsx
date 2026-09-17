"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

const images = [
  "https://assets.codepen.io/16327/portrait-pattern-1.jpg",
  "https://assets.codepen.io/16327/portrait-image-12.jpg",
  "https://assets.codepen.io/16327/portrait-image-8.jpg",
  "https://assets.codepen.io/16327/portrait-pattern-2.jpg",
  "https://assets.codepen.io/16327/portrait-image-4.jpg",
  "https://assets.codepen.io/16327/portrait-image-3.jpg",
  "https://assets.codepen.io/16327/portrait-pattern-3.jpg",
  "https://assets.codepen.io/16327/portrait-image-1.jpg",
];

const gridAreas = [
  "1 / 1 / 3 / 2",
  "1 / 2 / 2 / 3",
  "2 / 2 / 4 / 3",
  "1 / 3 / 3 / 3",
  "3 / 1 / 3 / 2",
  "3 / 3 / 5 / 4",
  "4 / 1 / 5 / 2",
  "4 / 2 / 5 / 3",
];

export default function BentoGallery() {
  const galleryRef = useRef(null);

  useLayoutEffect(() => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    const galleryItems = gallery.querySelectorAll(".gallery__item");

    let flipCtx;

    const createTween = () => {
      // Limpa a animação anterior
      flipCtx?.revert();

      gallery.classList.remove("gallery--final");

      flipCtx = gsap.context(() => {
        // Estado final temporário
        gallery.classList.add("gallery--final");

        const flipState = Flip.getState(galleryItems);

        // Volta ao estado inicial
        gallery.classList.remove("gallery--final");

        const flip = Flip.to(flipState, {
          simple: true,
          ease: "expoScale(1, 5)",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: gallery,
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: gallery.parentNode,
          },
        });

        timeline.add(flip);
      }, gallery);
    };

    createTween();

    const handleResize = () => {
      createTween();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      flipCtx?.revert();

      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === gallery) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <>
      <section className="gallery-wrap">
        <div ref={galleryRef} id="gallery-8" className="gallery gallery--bento">
          {images.map((image, index) => (
            <div
              key={image}
              className="gallery__item"
              style={{
                gridArea: gridAreas[index],
              }}
            >
              <img src={image} alt="" />
            </div>
          ))}
        </div>
      </section>
      <p className="text-white text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero iusto
        numquam deserunt modi, dolores repellat nemo voluptates, pariatur
        doloribus aspernatur suscipit vel temporibus nulla laboriosam aliquid
        molestias voluptas vitae rem.
      </p>

      <style jsx>{`
        .gallery-wrap {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .gallery {
          position: relative;
          width: 100%;
          height: 100%;
          flex: none;
        }

        .gallery--bento {
          display: grid;
          gap: 1vh;
          grid-template-columns: repeat(3, 32.5vw);
          grid-template-rows: repeat(4, 23vh);
          justify-content: center;
          align-content: center;
        }

        .gallery--final.gallery--bento {
          grid-template-columns: repeat(3, 100vw);
          grid-template-rows: repeat(4, 49.5vh);
          gap: 1vh;
        }

        .gallery__item {
          background-position: 50% 50%;
          background-size: cover;
          flex: none;
          position: relative;
          overflow: hidden;
        }

        .gallery__item img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          display: block;
        }

        @media (max-width: 768px) {
          .gallery--bento {
            grid-template-columns: repeat(3, 32.5vw);
            grid-template-rows: repeat(4, 23vh);
          }

          .gallery--final.gallery--bento {
            grid-template-columns: repeat(3, 100vw);
            grid-template-rows: repeat(4, 49.5vh);
          }
        }
      `}</style>
    </>
  );
}
