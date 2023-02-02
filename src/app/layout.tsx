"use client";

import { Box, Navbar } from "@/components";

import { GlobalStyle } from "../style/global.style";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(children);
  return (
    <html>
      <body>
        <GlobalStyle />
        <Box>
          <Navbar />
        </Box>
        {children}
        <footer />
      </body>
    </html>
  );
}
