"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type SidebarType = "main" | "manageEvent";

interface SidebarContextType {
  sidebarType: SidebarType;
  setSidebarType: (type: SidebarType) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [sidebarType, setSidebarType] = useState<SidebarType>("main");

  return (
    <SidebarContext.Provider value={{ sidebarType, setSidebarType }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("useSidebar must be used within SidebarProvider");
  return context;
}
