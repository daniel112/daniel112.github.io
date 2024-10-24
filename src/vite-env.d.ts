/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default ReactComponent;
}

// Add custom color variants to the theme type
export declare module "@mui/material/styles" {
  interface Palette {
    onPrimary: Palette["primary"];
    onSecondary: Palette["primary"];
    onBackground: Palette["primary"];
    onSurface: Palette["primary"];
    onError: Palette["primary"];
  }
  interface PaletteOptions {
    onPrimary?: PaletteOptions["primary"];
    onSecondary?: PaletteOptions["primary"];
    onBackground?: PaletteOptions["primary"];
    onSurface?: PaletteOptions["primary"];
    onError?: PaletteOptions["primary"];
  }
}
