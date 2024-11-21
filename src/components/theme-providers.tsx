'use client'
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProviders({children}: { children: React.ReactNode }) {
    const { theme } = useTheme();
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
      }, []);
    
      // 클라이언트에서만 렌더링되도록 하여 서버/클라이언트 HTML 불일치 문제 해결
      if (!mount) return null;
    

    return (
        <ThemeProvider attribute="class" defaultTheme={theme || 'light'} enableSystem={false}>
            {children}
        </ThemeProvider>
    )
}