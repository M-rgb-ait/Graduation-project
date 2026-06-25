"use client";

import ToggleLocale from "@/src/components/common/langudg";
import ThemeToggle from "@/src/components/common/them";
import Image from "next/image";

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex w-full items-center justify-end gap-2 px-4 py-3">
        <ToggleLocale />
        <ThemeToggle />
      </header>

      {/* Main content */}
      <main className="grid flex-1 grid-cols-1 md:grid-cols-2">
        {/* Children */}
        <div className="flex items-center justify-center p-6">{children}</div>

        {/* Side image */}
        <div className="relative hidden md:block">
          <Image
            src="/assets/home-section-1-static.png"
            alt="red presents"
            fill
            className="object-cover"
            priority
          />
        </div>
      </main>
    </div>
  );
}
