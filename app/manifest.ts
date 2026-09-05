import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Codegnan Labs — Campus Innovation & Technology Experiences",
    short_name: "Codegnan Labs",
    description:
      "We bring industry learning to your campus. Hands-on Workshops, Bootcamps, and Hackathons for colleges and students.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#304ffe",
    icons: [
      {
        src: "/codegnan_logo.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/codegnan_logo.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
