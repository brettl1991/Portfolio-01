import { ReactNode } from "react";

export type cardType = {
  children?: ReactNode;
  $aspect?: string;
  $minWidth?: number;
  $color?: string;
  $position?: "absolute" | "relative" | "static" | "fixed";
  $shadow?: boolean;
  $hide?: boolean;
  $overflow?: boolean;
};
