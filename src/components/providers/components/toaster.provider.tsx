import { Check, Info, X } from "lucide-react";

import { Toaster } from "@/components/ui/sonner";

export default function ToasterProvider() {
  return (
    <Toaster
      toastOptions={{
        closeButton: true,
        className:
          "dark:!border-none !shadow-lg !text-zinc-800 !gap-[10px] !py-4 ",
        classNames: {
          success: "!bg-emerald-50 !border-emerald-700 dark:!bg-emerald-300 ",
          error: "!bg-red-50 !border-red-700 dark:!bg-red-300 ",
          info: "!bg-zinc-50 !border-zinc-400 dark:!bg-zinc-300 ",
          closeButton:
            "!bg-transparent !text-zinc-500 !border-none   [&_svg]:!size-4 !right-0 !left-auto !top-4",
        },
      }}
      icons={{
        success: <Check size="18" />,
        error: <X size="18" />,
        info: <Info size="18" />,
      }}
    />
  );
}
