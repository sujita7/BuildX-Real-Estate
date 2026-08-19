"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GlobalScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait for Next.js to fully render the page and DOM to settle
    const timeout = setTimeout(() => {
      // Clean up previous triggers to avoid duplicates
      ScrollTrigger.getAll().forEach(t => {
        // Only kill standard scroll triggers we create, not the hero ones
        if (t.vars.id === "globalReveal") {
          t.kill();
        }
      });

      const selectors = [
        'section:not(.hero_root__N0Loz)', 
        '.agents-hero_content__Iaj_D', 
        '.blog-post', 
        '.agent',
        '.labeled-section_labeled-section__cCSIG',
        '.core-values-slides_slide__a7k_5',
        '.collapsible_item__VdUU7',
        '.core-team_slide__3X2ID'
      ];
      const elements = document.querySelectorAll(selectors.join(', '));
      
      elements.forEach((el, index) => {
        // Skip elements that are already manually animated by other scripts
        if (el.dataset.animated === "true") return;
        el.dataset.animated = "true";

        gsap.fromTo(el, 
          { autoAlpha: 0, y: 40 },
          { 
            autoAlpha: 1, 
            y: 0, 
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              id: "globalReveal",
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
      ScrollTrigger.refresh();
    }, 300);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
