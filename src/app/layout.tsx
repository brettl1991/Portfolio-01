"use client";

import { Background, Box, Card, Navbar, Label } from "@/components";

import { GlobalStyle } from "../style/global.style";

export default function RootLayout({}) {
  return (
    <html>
      <body>
        <Background />
        <GlobalStyle />
        <Box>
          <Card>
            <div>
              <Label htmlFor="menu-1">click me 1</Label>
            </div>
            <div>
              <Label htmlFor="menu-2">click me 2</Label>
            </div>
            <div>
              <Label htmlFor="menu-3">click me 3</Label>
            </div>
            <div>
              <Label htmlFor="menu-4">click me 4</Label>
            </div>
          </Card>
          <Card $overflow $minWidth={640} $aspect="1/1">
            <input type="radio" name="yeey" id="menu-1" />
            <Card $hide $position="absolute" $aspect="1/1" $color="red">
              show
            </Card>

            <input type="radio" name="yeey" id="menu-2" />
            <Card $hide $position="absolute" $aspect="1/1" $color="green">
              show
            </Card>

            <input type="radio" name="yeey" id="menu-3" />
            <Card $hide $position="absolute" $aspect="1/1" $color="blue">
              hhhh
            </Card>

            <input type="radio" name="yeey" id="menu-4" />
            <Card $hide $position="absolute" $aspect="1/1" $color="purple">
              purple
            </Card>
          </Card>
          <Card $shadow $color="green" $minWidth={480}>
            15/21
          </Card>
        </Box>
      </body>
    </html>
  );
}
