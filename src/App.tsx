import { Routes, Route } from "react-router-dom";
import List from "./components/list";
import Item from "./components/item";
import Logo from "./components/logo";

const App = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Logo className="logo" />
        <Routes>
          <Route path="/" element={<List />}>
            <Route path="item/:assetId" element={<Item />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
