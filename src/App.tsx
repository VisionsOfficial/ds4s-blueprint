import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { Layout } from "./layouts/Layout/Layout";
import { APP_LINKS } from "./utils/appLinks";
import { UseCasePage } from "./pages/UseCasePage/UseCasePage";
import { StakeholderPage } from "./pages/StakeholderPage/StakeholderPage";
import { GovernancePage } from "./pages/GovernancePage/GovernancePage";
import { EUDunePage } from "./pages/EUDunePage/EUDunePage";
import { BuildingBlocksPage } from "./pages/BuildingBlocksPage/BuildingBlocksPage";
import { TechnicalTrackPage } from "./pages/TechnicalTrackPage/TechnicalTrackPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={APP_LINKS.home} element={<HomePage />}></Route>
      <Route
        path={APP_LINKS.useCases + "/:useCase"}
        element={<UseCasePage />}
      ></Route>
      <Route
        path={APP_LINKS.useCases + "/:useCase/:stakeholder/:category"}
        element={<StakeholderPage />}
      ></Route>
      <Route path={APP_LINKS.govervance} element={<GovernancePage />}></Route>
      <Route path={APP_LINKS.EUDune} element={<EUDunePage />}></Route>
      <Route
        path={APP_LINKS.buildingBlocks}
        element={<BuildingBlocksPage />}
      ></Route>
      <Route
        path={APP_LINKS.buildingBlocks + "/:bbs"}
        element={<TechnicalTrackPage />}
      ></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
