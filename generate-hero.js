const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'app/page.js');
const pageContent = fs.readFileSync(pagePath, 'utf8');

const startIdx = pageContent.indexOf('<section className="hero_root__N0Loz"');
const endIdx = pageContent.indexOf('</section>', startIdx) + '</section>'.length;

const heroHtml = pageContent.substring(startIdx, endIdx);

const heroComponent = `'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const rootRef = useRef(null);
  const backRef = useRef(null);
  const houseTopRef = useRef(null);
  const cloudLeftRef = useRef(null);
  const cloudRightRef = useRef(null);
  const compositeRef = useRef(null);
  const houseCompositeRef = useRef(null);
  const contentRef = useRef(null);
  const overlapRef = useRef(null);
  const logoRef = useRef(null);
  const smokeTopRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const actionsRef = useRef(null);

  useGSAP(() => {
    // Parallax ScrollTrigger timeline
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: rootRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.1
      }
    });

    scrollTl.to([houseTopRef.current, houseCompositeRef.current], {
      y: (window.innerHeight < window.innerWidth) ? "-40%" : "-40%",
      scale: 1.3,
      duration: 1
    }, 0);
    scrollTl.to(smokeTopRef.current, { y: "0%", duration: 1 }, 0);
    scrollTl.to(cloudLeftRef.current, { x: "-15%", duration: 1 }, 0);
    scrollTl.to(cloudRightRef.current, { x: "15%", duration: 1 }, 0);
    scrollTl.to(contentRef.current, { y: "20%", scale: 0.9, duration: 1 }, 0);
    scrollTl.to(contentRef.current, { opacity: 0, duration: 0.2 }, 0);
    scrollTl.to(logoRef.current, { opacity: 1, duration: 0.01 }, 0.1);
    
    // Animate SVG path drawing with native GSAP if possible or just fade
    const paths = logoRef.current ? logoRef.current.querySelectorAll('svg path') : [];
    if(paths.length) {
      gsap.fromTo(paths, { opacity: 0 }, { opacity: 1, duration: 0.3, stagger: 0.05 }, 0.1);
    }

    scrollTl.to(logoRef.current, { opacity: 0, duration: 0.2 }, 0.28);
    scrollTl.to(compositeRef.current, { opacity: 1, duration: 0.1 }, 0.3);
    scrollTl.to(houseTopRef.current, { opacity: 0, duration: 0.1 }, 0.3);

    // Initial load animation
    const loadTl = gsap.timeline({ paused: true });
    loadTl.fromTo(rootRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 }, 0);
    loadTl.fromTo(titleRef.current, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 2 }, 0);
    loadTl.fromTo([textRef.current, actionsRef.current], { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 2, stagger: 0.1 }, 0.4);
    
    if(backRef.current) loadTl.from(backRef.current, { scale: 1.1, duration: 5, ease: "expo.out" }, 0);
    if(cloudLeftRef.current) loadTl.from(cloudLeftRef.current, { y: "50%", duration: 3, ease: "expo.out" }, 0);
    if(cloudRightRef.current) loadTl.from(cloudRightRef.current, { y: "100%", duration: 4, ease: "expo.out" }, 0.1);
    
    const topImg = houseTopRef.current?.querySelector('img');
    const compImg = houseCompositeRef.current?.querySelector('img');
    if(topImg || compImg) {
      loadTl.from([topImg, compImg], { opacity: 0, duration: 0.6 }, 0.2);
      loadTl.from([topImg, compImg], { y: "10%", duration: 3, ease: "expo.out" }, 0.2);
    }

    setTimeout(() => {
      requestAnimationFrame(() => loadTl.play());
    }, 200);
  }, { scope: rootRef });

  return (
${heroHtml
  .replace('<section className="hero_root__N0Loz">', '<section className="hero_root__N0Loz" ref={rootRef} style={{ visibility: "hidden" }}>')
  .replace('<div className="hero_back__8ReFI">', '<div className="hero_back__8ReFI" ref={backRef}>')
  .replace('<div className="hero_house__aJy7p">', '<div className="hero_house__aJy7p" ref={houseTopRef}>')
  .replace('<div className="hero_composite__3blHB">', '<div className="hero_composite__3blHB" ref={compositeRef} style={{opacity:0}}>')
  .replace('<div className="hero_house__aJy7p">', '<div className="hero_house__aJy7p" ref={houseCompositeRef}>')
  .replace('<div className="hero_cloud__TvA3o">', '<div className="hero_cloud__TvA3o" ref={cloudLeftRef}>')
  .replace('<div className="hero_cloud__TvA3o">', '<div className="hero_cloud__TvA3o" ref={cloudRightRef}>')
  .replace('<div className="hero_logo__FxgRj">', '<div className="hero_logo__FxgRj" ref={logoRef} style={{opacity:0}}>')
  .replace('<div className="hero_smoke__8za_R">', '<div className="hero_smoke__8za_R" ref={smokeTopRef}>')
  .replace('<div className="hero_content__DK_Ny">', '<div className="hero_content__DK_Ny" ref={contentRef}>')
  .replace('<div className="hero_title__JpmHS">', '<div className="hero_title__JpmHS" ref={titleRef}>')
  .replace('<div className="hero_text__R6LQ5">', '<div className="hero_text__R6LQ5" ref={textRef}>')
  .replace('<div className="hero_actions__RlphJ">', '<div className="hero_actions__RlphJ" ref={actionsRef}>')
  .replace('<div className="hero_overlap__d3EJV">', '<div className="hero_overlap__d3EJV" ref={overlapRef}>')
}
  );
}
`;

fs.writeFileSync(path.join(process.cwd(), 'components/Hero.jsx'), heroComponent);
console.log('Created Hero.jsx');

// Now replace Hero in page.js
let newPageContent = pageContent.replace(heroHtml, '<Hero />');
newPageContent = newPageContent.replace('import Header from "@/components/Header";', 'import Header from "@/components/Header";\nimport Hero from "@/components/Hero";');

fs.writeFileSync(pagePath, newPageContent);
console.log('Updated app/page.js');
