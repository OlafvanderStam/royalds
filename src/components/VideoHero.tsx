"use client";

import { useState, useEffect, useRef } from "react";

interface VideoHeroProps {
  videoSrc?: string;
  posterSrc?: string;
  children: React.ReactNode;
}

export default function VideoHero({ videoSrc, posterSrc, children }: VideoHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Default maritime video from Pexels (free to use) - ship/ocean footage
  const defaultVideoSrc = "https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4";
  // Fallback poster image for mobile - ship/maritime
  const defaultPosterSrc = "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrolled = window.scrollY;
        videoRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      {!isMobile ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={posterSrc || defaultPosterSrc}
          onLoadedData={() => setIsLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover scale-110 transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videoSrc || defaultVideoSrc} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${posterSrc || defaultPosterSrc})`,
          }}
        />
      )}

      {/* Multi-layer gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/60" />

      {/* Animated particles/glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange/15 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-light/30 rounded-full blur-[120px]" />
      </div>

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-silver-light/70 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-silver-light/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-silver-light/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
