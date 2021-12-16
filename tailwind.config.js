function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  // mode: "jit",
  purge: ["./**/*.{vue, js, jsx}"],
  darkMode: "class", // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        99: "88.833333333%",
      },
      colors: {
        "dark-blue": withOpacity("--color-dark-blue"),
        "lime-green": withOpacity("--color-lime-green"),
        "bright-cyan": withOpacity("--color-bright-cyan"),
        "grayish-blue": withOpacity("--color-grayish-blue"),
        "light-grayish-blue": withOpacity("--color-light-grayish-blue"),
        "light-gray": withOpacity("--color-light-gray"),
      },
      backgroundImage: {
        "hero-pattern": "url('../src/assets/bg-intro-mobile.svg')",
      },
      height: {
        92: "23rem",
        98: "29rem",
      },
      maxHeight: {
        92: "23rem",
        98: "29rem",
      },
    },
  },
  plugins: [],
};
