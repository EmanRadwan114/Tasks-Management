module.exports = {
  typescript: true,
  icon: true, // removes width/height + adds viewBox
  ignoreExisting: true,

  svgProps: {
    fill: "currentColor",
  },

  svgo: true,
  svgoConfig: {
    plugins: [
      {
        name: "removeAttrs",
        params: {
          attrs: "(fill|stroke)", // removes ALL hardcoded colors
        },
      },
    ],
  },
};
