module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(-20px)", opacity: "0.5" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
