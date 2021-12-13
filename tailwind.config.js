function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  mode: "jit",
  purge: ["./**/*.{vue, js, jsx}"],
  darkMode: "class", // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          muted: withOpacity("--color-text-muted"),
          inverted: withOpacity("--color-text-inverted"),
          primary: withOpacity("--color-primary"),
          secondary: withOpacity("--color-secondary"),
          tertiary: withOpacity("--color-tertiary"),
          "secondary-accent": withOpacity("--color-secondary-accent"),
          "tertiary-accent": withOpacity("--color-tertiary-accent"),
        },
      },
      backgroundColor: {
        skin: {
          primary: withOpacity("--color-primary"),
          "button-accent": withOpacity("--color-button-accent"),
          "button-accent-hover": withOpacity("--color-button-accent-hover"),
          "button-muted": withOpacity("--color-button-muted"),
          secondary: withOpacity("--color-secondary"),
          tertiary: withOpacity("--color-tertiary"),
          "secondary-accent": withOpacity("--color-secondary-accent"),
          "tertiary-accent": withOpacity("--color-tertiary-accent"),
        },
      },
    },
  },
  plugins: [],
};
