import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { AppContextProvider } from "./contexts";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
