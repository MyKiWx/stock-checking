"use client";

import { Theme, ThemeProvider, createTheme } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import React from "react";

type Props = {};

const theme: Theme = createTheme({
  components: {},
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
};

export default Providers;
