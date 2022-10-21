const theme = {
  color: {
    primaryColor: "#ff385c",
    borderPrimaryColor: "#dddddd",
    whiteColor: "#fff",
    oneFontColor: "#222",
    twoFontColor: "#717171",
    primaryBorderColor: "#dddddd",
    oneBgColor: "#F7F7F7",
    whiteBgColor: "#fff",
  },
  mixin: {
    boxshadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      }
    `,
    radiusClass: `
      height: 48px;
      padding: 0 15px;
      border: 1px solid var(--primary-border-color);
      border-radius: 25px;
    `,
  },
  size: {
    oneFontSize: "14px",
  },
};
export default theme;
