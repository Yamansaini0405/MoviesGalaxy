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
import Action from "./components/Action.jsx";
import Romance from "./components/Romance.jsx";
import Horror from "./components/Horror.jsx";
import Upcoming from "./components/Upcoming.jsx";
import Comedy from "./components/Comedy.jsx";
import Thriller from "./components/Thriller.jsx";
import Login from "./components/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
      <Route path="/Trending" element={<Trending />} />
      <Route path="/" element={<SearchBox />} />
      <Route path="/Overveiw" element={<Overveiw/>}/>
      <Route path="/Action" element={<Action/>}/>
      <Route path="/Romance" element={<Romance/>}/>
      <Route path="/Horror" element={<Horror/>}/>
      <Route path="/Upcoming" element={<Upcoming/>}/>
      <Route path="/Comedy" element={<Comedy/>}/>
      <Route path="/Thriller" element={<Thriller/>}/>
    </Route>
    <Route path="/login" element={<Login />} />
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
