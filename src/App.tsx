import { Suspense, lazy, useEffect } from "react";
import "./App.css";
import "bulmaswatch/superhero/bulmaswatch.min.css";
import Loader from "./components/loader";
import ShareFile from "./components/save-file";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { useActions } from "./hooks/use-actions";
import NotFound from "./components/not-found";

const CellList = lazy(() => import("./components/CellList"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/basic-template" />} />
      <Route path="/:name" element={<Page />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

const Page: React.FC = () => {
  const params = useParams();
  const { setCellsState } = useActions();
  useEffect(() => {
    fetch(
      `https://js-notebook-urtheaman.herokuapp.com/notebook/${params.name}`,
      {
        method: "GET",
	"Access-Control-Allow-Origin": "*"
      }
    )
      .then((res) => res.json())
      .then((res) => setCellsState(res?.cells))
      .catch((err) => console.error("couldnt get the result from server", err));
  });
  return (
    <Suspense fallback={<Loader />}>
      <ShareFile />
      <CellList />
    </Suspense>
  );
};
