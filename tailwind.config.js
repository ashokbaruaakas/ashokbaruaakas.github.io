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
        "-header-sm": "-13.3%", // Header section top margin  for MD
        "-header-md": "-13.2%", // Header section top margin  for MD
        "-header-lg": "-13%", // Header section top margin  for LG
        "-header-xl": "-14.3%", // Header section top margin  for XL
      },
    },
  },
  variants: {},
  plugins: [],
};
