import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Syphon Apparel",
    short_name: "Syphon",
    description:
      "Premium apparel manufacturer specializing in custom clothing, sportswear, activewear, leather jackets, racing wear and private label manufacturing.",

    start_url: "/",

    display: "standalone",

    background_color: "#111111",

    theme_color: "#00C853",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}