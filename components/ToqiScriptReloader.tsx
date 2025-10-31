// "use client";
// import { usePathname } from "next/navigation";
// import { useEffect, useRef } from "react";
// import { useCategory } from "@/context/CategoryContext";

// export default function ToqiScriptReloader() {
//   const pathname = usePathname();
//   const lastInitializedPath = useRef<string | null>(null);
//     const lastSubCategory = useRef<string | null>(null);

//   const hasInitializedOnce = useRef(false);
//   const { selectedSubCategory } = useCategory();

//   useEffect(() => {
//     const scriptId = "toqi-script";
//     const existingScript = document.getElementById(scriptId);

//     const initializeChat = () => {
//       if (window.ChatAssistant?.initializeChat) {
//         console.log("🧠 Reinitializing chat for", pathname);
//         window.ChatAssistant.initializeChat();
//       }
//     };

//     // 🛑 Avoid running twice on initial page load
//     if (!hasInitializedOnce.current) {
//       hasInitializedOnce.current = true;
//       lastInitializedPath.current = pathname;
//       lastSubCategory.current = selectedSubCategory;
//       return; // Let the script itself handle first init
//     }

//     // ✅ For subsequent route changes only
//     if (lastInitializedPath.current !== pathname || lastSubCategory.current !== selectedSubCategory) {
//       lastInitializedPath.current = pathname;
//       initializeChat();
//     }
//   }, [pathname ,selectedSubCategory]);

//   return null;
// }


"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useCategory } from "@/context/CategoryContext";

export default function ToqiScriptReloader() {
  const pathname = usePathname();
  const { selectedSubCategory } = useCategory();

  const lastInitializedPath = useRef<string | null>(null);
  const lastSubCategory = useRef<string | null>(null);
  const hasInitializedOnce = useRef(false);
  const hasLoadedInitialSubCategory = useRef(false);

  useEffect(() => {
    const initializeChat = () => {
      if (window.ChatAssistant?.initializeChat) {
        window.ChatAssistant.initializeChat();
      }
    };

    // First-ever render — don’t run anything
    if (!hasInitializedOnce.current) {
      hasInitializedOnce.current = true;
      lastInitializedPath.current = pathname;
      lastSubCategory.current = selectedSubCategory;
      return;
    }

    const pathChanged = lastInitializedPath.current !== pathname;
    const subCategoryChanged =
      selectedSubCategory &&
      selectedSubCategory !== lastSubCategory.current;

    // Ignore first async set of selectedSubCategory on page load
    if (!hasLoadedInitialSubCategory.current && selectedSubCategory) {
      hasLoadedInitialSubCategory.current = true;
      lastSubCategory.current = selectedSubCategory;
      return;
    }

    if (pathChanged || subCategoryChanged) {
      lastInitializedPath.current = pathname;
      lastSubCategory.current = selectedSubCategory;
      initializeChat();
    }
  }, [pathname, selectedSubCategory]);

  return null;
}


