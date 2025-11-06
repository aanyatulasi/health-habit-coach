import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "./app/AppShell";
import Home from "./pages/Home";
import Coach from "./pages/Coach";
import UiKitchen from "./pages/UiKitchen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell><Home/></AppShell>
  },
  { path: "/coach", element: <AppShell><Coach/></AppShell> },
  { path: "/ui", element: <AppShell><UiKitchen/></AppShell> },
]);
