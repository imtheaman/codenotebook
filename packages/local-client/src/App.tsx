import { Suspense, lazy, useEffect } from "react";
import "./App.css";
import "bulmaswatch/superhero/bulmaswatch.min.css";
import Loader from "./components/loader";
import ShareFile from "./components/save-file";

const CellList = lazy(() => import("./components/CellList"));

const App = () => {
  useEffect(() => {
    fetch("/notebook/finding-the-best-result-twice", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error("couldnt get the result from server", err));
  });
  return (
    <Suspense fallback={<Loader />}>
      <ShareFile />
      <CellList />
    </Suspense>
  );
};

export default App;
