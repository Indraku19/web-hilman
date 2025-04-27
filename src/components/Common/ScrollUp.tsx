"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollUp() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // opsional: untuk animasi scroll halus
    });
  }, [pathname]);

  return null;
}