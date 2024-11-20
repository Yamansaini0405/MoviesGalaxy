import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import { AppProvider } from "./context/MovieContext.jsx";
import Trending from "./components/Trending.jsx";
import SearchBox from "./components/SearchBox.jsx";
import Overveiw from "./components/Overveiw.jsx";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/Trending" element={<Trending />} />
      <Route path="/" element={<SearchBox />} />
      <Route path="/Overveiw" element={<Overveiw/>}/>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>
);
