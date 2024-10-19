'use client'
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProviders({ initTheme, children }: {
    initTheme: string,
    children: React.ReactNode,
}) {
    const [clientTheme, setClientTheme] = useState(false);

    useEffect(() => {
        setClientTheme(true);
    }, [])
    
    if(!clientTheme) {
        return ;
    }

    return (
    <ThemeProvider
        enableSystem={false}
        attribute="class"
        defaultTheme={initTheme} >
        {children}
    </ThemeProvider>
    )
}