"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ReinitializeChat() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.ChatAssistant?.initializeChat) {
      window.ChatAssistant.initializeChat();
    }
  }, [pathname]); 

  return null; // This component doesn't render anything
}
