"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ReactNode, useState } from "react";

export function Providers({ children }: { children: ReactNode }) {
  // Usamos useState para evitar recrear el cliente en cada render
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {children}
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
