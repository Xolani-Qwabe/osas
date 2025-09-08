"use client"
import React, { useEffect, useRef } from 'react'
import './Button.css'
import Link from 'next/link'

const Button = ({ text }) => {
  const btnRef = useRef<HTMLDivElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spanRef.current) return;
      const { width } = (e.target as HTMLElement).getBoundingClientRect();
      const offset = (e as any).offsetX;
      const left = `${(offset / width) * 100}%`;

      try {
        spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
      } catch {}
    };

    const handleMouseLeave = () => {
      if (!spanRef.current) return;
      spanRef.current.animate({ left: "50%" }, { duration: 100, fill: "forwards" });
    };

    if (btnRef.current) {
      btnRef.current.addEventListener("mousemove", handleMouseMove);
      btnRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (btnRef.current) {
        btnRef.current.removeEventListener("mousemove", handleMouseMove);
        btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={btnRef}
      className="p-4 sm:p-4 md:p-6 lg:p-8 h-10 w-20 sm:h-10 sm:w-20 md:h-12 md:w-24 lg:h-16 lg:w-32 relative overflow-hidden"
      id="main-button"
      onClick={() => ""}
    >
      <Link
        href="/quote"
        className="z-10  text-[.8rem] sm:text-[.8rem] md:text-[1rem] lg:text-[1.4rem]"
      >
        {text}
      </Link>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-10 w-10 sm:h-10 sm:w-10 md:w-12 md:h-12 lg:h-16 lg:w-16 
        -translate-x-[50%] -translate-y-[50%] rounded-full bg-white"
      />
    </div>
  )
}

export default Button
