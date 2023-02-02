"use client";

import { Box, Navbar } from "@/components";

import { GlobalStyle } from "../style/global.style";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <GlobalStyle />
        <Box>
          <Navbar />
          {children}
          <footer />
        </Box>
      </body>
    </html>
  );
}
