"use client";

import Footer from "@/src/components/common/footer";
import Header from "@/src/components/common/header";

export default function HomeLocaleLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <main>
        {/* App Header */}
        <Header />
        header
        {/* Main App */}
        <div className="min-h-screen pt-36">{children}</div>
        {/* App Footer */}
        <Footer />
        footer
      </main>
    </>
  );
}
