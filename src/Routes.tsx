import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.tsx";
import Home from "./pages/home/Home.tsx";
import Search from "./pages/search/Search.tsx";
import Error from "./pages/error/Error.tsx";

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
