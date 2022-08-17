import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useEffect } from "react";
import theme from "../app/styles/default";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "store/store";
import axios from "axios";
import { API_KEY } from "constants/projectConstants";

export default function ExtendedApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        return {
          ...config,
          headers: {
            ...config.headers,
            authorization: `key ${API_KEY}`,
          },
        };
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ToastContainer />
        <CssBaseline />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
