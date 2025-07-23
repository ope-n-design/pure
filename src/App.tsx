<<<<<<< HEAD
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import React from "react";

// ✅ 타입 명시
interface IntroProps {
  onFinish: () => void;
  isMobile: boolean;
}

const Intro: React.FC<IntroProps> = ({ onFinish, isMobile }) => {
  const ref = useRef(null);
  const [wheelCount, setWheelCount] = useState(0);
  const [startFadeOut, setStartFadeOut] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  const maxScrolls = 10;
  const progress = Math.min(wheelCount / maxScrolls, 1);
  const opacity = startFadeOut ? 0 : 1 - progress;

  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      if (animationDone) return;
      e.preventDefault();
      if (wheelCount < maxScrolls && !startFadeOut) {
        setWheelCount((prev) => Math.min(prev + 1, maxScrolls));
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [wheelCount, startFadeOut, animationDone, isMobile]);

  useEffect(() => {
    if (!isMobile && progress === 1 && !startFadeOut) {
      setStartFadeOut(true);
      setTimeout(() => {
        setAnimationDone(true);
        document.body.style.overflow = "auto";
        onFinish();
      }, 1400);
    }
  }, [progress, startFadeOut, onFinish, isMobile]);

  const videoMotionProps = isMobile
    ? { opacity: 1 }
    : {
        scaleX: 1 - 0.7 * progress,
        scaleY: 1 - 0.3 * progress,
        opacity,
      };

  return (
    <section
      ref={ref}
      id="intro"
      className={`relative min-h-screen w-full ${
        isMobile ? "overflow-auto" : "overflow-hidden"
      } flex items-center justify-center bg-white`}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0"
        animate={videoMotionProps}
        transition={{
          scaleX: { duration: 2 },
          scaleY: { duration: 2 },
          opacity: { duration: 1.4 },
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-screen object-cover"
        >
          <source src="/video/intro-garden.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent z-10" />
        <motion.img
          src="images/logo.png"
          alt="로고"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-20 h-10 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        />
      </motion.div>

      <h1 className="absolute z-30 text-[#1c3c2f] text-5xl md:text-6xl font-serifTitle text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
        정원, 자연, 디자인
      </h1>
    </section>
  );
};

export default Intro;
=======
import { useState, useEffect, useRef } from "react";
import "./index.css";
import Sidebar from "./components/sidebar";
import Intro from "./components/intro";
import About from "./components/about";
import ScrollOverlaySection from "./components/ScrollOverlaySection";
import Portfolio from "./components/portfolio";
import Works from "./components/works";
import Contact from "./components/contact";

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [aboutDone, setAboutDone] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ 모바일 여부 체크
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ 모바일일 경우 바로 Intro/About 완료 처리
  useEffect(() => {
    if (isMobile) {
      setIntroDone(true);
      setAboutDone(true);
    }
  }, [isMobile]);

  // ✅ 스크롤 허용 조건
  useEffect(() => {
    if (mainRef.current) {
      const allowScroll = isMobile || (introDone && aboutDone);
      mainRef.current.style.overflowY = allowScroll ? "scroll" : "hidden";

      // ✅ 모바일은 body도 강제 허용
      if (isMobile) {
        document.body.style.overflowY = "auto";
      }
    }
  }, [introDone, aboutDone, isMobile]);

  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* ✅ 모바일 햄버거 */}
      {isMobile && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 text-3xl md:hidden"
        >
          ☰
        </button>
      )}

      <main ref={mainRef} className="w-full md:w-4/5 scroll-smooth">
        {isMobile ? (
          <>
            <Intro onFinish={() => {}} isMobile={true} />
            <About onFinish={() => {}} isMobile={true} />
            <ScrollOverlaySection />
            <Portfolio />
            <Works />
            <Contact />
          </>
        ) : (
          <>
            {!introDone && (
              <Intro onFinish={() => setIntroDone(true)} isMobile={false} />
            )}
            {introDone && !aboutDone && (
              <About onFinish={() => setAboutDone(true)} isMobile={false} />
            )}
            {introDone && aboutDone && (
              <>
                <ScrollOverlaySection />
                <Portfolio />
                <Works />
                <Contact />
              </>
            )}
          </>
        )}
      </main>

      <Sidebar
        introUnlocked={introDone && aboutDone}
        isMobile={isMobile}
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </div>
  );
}
>>>>>>> e880b95f (Initial commit for deployment)
