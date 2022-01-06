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
      scale: {
        130: "1.30",
      },
      screens: {
        mm: "540px",
        dl: "820px",
        dlg: "920px",
        "2xl": "1440px",
      },
      inset: {
        "17/20": "85%",
        "9/10": "90%",
        "19/20": "96%",
        17: "67px",
      },
      width: {
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
      },
      colors: {
        "dark-blue": withOpacity("--color-dark-blue"),
        "lime-green": withOpacity("--color-lime-green"),
        "bright-cyan": withOpacity("--color-bright-cyan"),
        "grayish-blue": withOpacity("--color-grayish-blue"),
        "light-grayish-blue": withOpacity("--color-light-grayish-blue"),
        "light-gray": withOpacity("--color-light-gray"),
      },
      height: {
        92: "23rem",
        98: "29rem",
      },
      maxHeight: {
        98: "29rem",
        md: "37rem",
        lg: "47rem",
        xl: "52rem",
      },
    },
  },
  plugins: [],
};
