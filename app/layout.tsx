// app/layout.tsx
import "./globals.css";
import SiteProvider from "@/lib/SiteProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <SiteProvider>
          <Navbar />
          <main>{children}</main>   {/* ← QUITA la clase pt-14 */}
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}
