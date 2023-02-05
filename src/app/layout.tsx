"use client";

import { Background, Box, Navbar } from "@/components";

import { GlobalStyle } from "../style/global.style";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Background />
        <Box>
          <GlobalStyle />
          <Navbar />
          {children}
          <footer />
        </Box>
      </body>
    </html>
  );
}
