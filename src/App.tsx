import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { Layout } from "./layouts/Layout/Layout";
import { APP_LINKS } from "./utils/appLinks";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={APP_LINKS.home} element={<HomePage />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
