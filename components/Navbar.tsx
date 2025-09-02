// components/Navbar.tsx
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-4 inset-x-0 z-50">
      <nav
        className="
          mx-auto w-[calc(100%-1.5rem)] sm:w-auto max-w-4xl
          h-12 px-4
          rounded-full
          bg-black/35 text-white
          backdrop-blur-md
          border border-white/20
          shadow-lg
          flex items-center justify-between
        "
      >
        <Link href="/" className="flex items-center gap-2">
          {/* pon tu logo si quieres, o deja solo el texto */}
          {/* <img src="/images/logo-modern.svg" alt="Modern Barber Viña" className="h-6" /> */}
          <span className="font-medium">Modern Barber Viña</span>
        </Link>

        <div className="flex gap-4 text-sm">
          <a href="#cuts" className="hover:opacity-100 opacity-90">Cortes</a>
          <a href="#specialists" className="hover:opacity-100 opacity-90">Especialistas</a>
          <a href="#reviews" className="hover:opacity-100 opacity-90">Reseñas</a>
          <a href="#contact" className="hover:opacity-100 opacity-90">Contacto</a>
        </div>
      </nav>
    </header>
  );
}
