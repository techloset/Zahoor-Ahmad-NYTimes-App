import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.tsx";
import Home from "./Pages/Home.tsx";
import Search from "./Pages/Search.tsx";
import Error from "./Pages/Error.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export { router };
