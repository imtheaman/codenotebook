import { Suspense, lazy } from "react";
import "./App.css";
import "bulmaswatch/superhero/bulmaswatch.min.css";
import Loader from "./components/loader";
import ShareFile from "./components/save-file";

const CellList = lazy(() => import("./components/CellList"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ShareFile />
      <CellList />
    </Suspense>
  );
};

export default App;
