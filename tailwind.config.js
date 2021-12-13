function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  purge: ["./**/*.{vue, js, jsx}"],
  darkMode: "class", // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": withOpacity("--color-dark-blue"),
        "lime-green": withOpacity("--color-lime-green"),
        "bright-cyan": withOpacity("--color-bright-cyan"),
        "grayish-blue": withOpacity("--color-grayish-blue"),
        "light-grayish-blue": withOpacity("--color-light-grayish-blue"),
        "light-gray": withOpacity("--color-light-gray"),
      },
    },
  },
  plugins: [],
};
