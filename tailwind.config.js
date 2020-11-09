module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      spacing: {
        "header-bg": "20rem", // Header BG Height for LG
      },
      margin: {
        "-header-md": "-6.3rem", // Header section top margin  for MD
        "-header-lg": "-8.3rem", // Header section top margin  for LG
        "-header-xl": "-9.1rem", // Header section top margin  for XL
      },
    },
  },
  variants: {},
  plugins: [],
};
