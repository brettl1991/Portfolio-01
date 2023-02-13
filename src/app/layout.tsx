"use client";

import { Background, Box, Card, Navbar, Label } from "@/components";
import { ReactNode } from "react";

import { GlobalStyle } from "../style/global.style";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <GlobalStyle />
        <Background />
        <Navbar />
        <Box>
          <Card />
          {children}
        </Box>
      </body>
    </html>
  );
}
