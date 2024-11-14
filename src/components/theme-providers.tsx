'use client'
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProviders({children}: { children: React.ReactNode }) {
    const { theme } = useTheme();

    return (
        <ThemeProvider attribute="class" defaultTheme={theme} enableSystem={false}>
        {children}
        </ThemeProvider>
    )
}