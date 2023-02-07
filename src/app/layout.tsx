"use client";

import { Background, Box, Card, Navbar } from "@/components";

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
        <GlobalStyle />
        <Box>
          <Card />
          <Card />
          {/* <Navbar /> */}
          {children}
        </Box>
      </body>
    </html>
  );
}
