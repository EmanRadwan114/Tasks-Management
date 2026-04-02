const config = {
  typescript: true,
  icon: true,
  svgProps: {
    fill: "currentColor",
    stroke: "currentColor",
  },
  svgo: true,
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            // This prevents SVGO from deleting paths it thinks are "empty"
            // but are actually essential to the icon's structure.
            removeUselessStrokeAndFill: false,
          },
        },
      },
      {
        name: "removeAttrs",
        params: {
          // Use simple strings for the attributes you want to strip
          // SVGO will find them on any element (path, circle, rect, etc.)
          attrs: ["fill", "stroke"],
        },
      },
    ],
  },
};

export default config;
