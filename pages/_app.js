import "../styles/global.css";
import React, { useState, useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  const { value } = useDarkMode(false, { storageKey: null, onChange: null });
  const theme = value ? darkTheme : lightTheme;

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{body}</div>;
  }

  return body;
}
